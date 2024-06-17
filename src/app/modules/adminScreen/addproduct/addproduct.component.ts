import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminscreenService } from '../adminscreen.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductForm: any;
  file:File[]=[]
  filenames:String=""
  // category:any = [
  //   { value: "", viewValue: "Please Select a category" },
  //   { value: "mobile", viewValue: "Mobile" },
  //   { value: "laptop", viewValue: "Laptop" },
  //   { value: "shoes", viewValue: "Shoes" }
  // ];
  category:any;
  // brands:any = [
  //   { value: "", viewValue: "Please Select a brand" },
  //   { value: "vivo", viewValue: "Vivo" },
  //   { value: "redmi", viewValue: "Redmi" },
  //   { value: "apple", viewValue: "Apple" }
  // ];
  booleanvalue:any = [
    { id: 1, value: "Yes" },
    { id: 0, value: "No" },
  ];
  brands:any;

  constructor(private adminscreenService:AdminscreenService) {

   }

  ngOnInit(): void {
    this.form();
    this.adminscreenService.getcategory().subscribe(result=>{
        this.category=result.payload
    })
  }

  form(){
    this.addProductForm=new FormGroup({
      name: new FormControl("", [Validators.required]),
      categoryid: new FormControl("", [Validators.required]),
      brandid: new FormControl("", [Validators.required]),
      showInHomeScreen: new FormControl("", [Validators.required]),
      isOffersApplicable: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      file: new FormControl("", [Validators.required])
    })
  }

  getBrand(categoryId:number){
    console.log(`inside getbrand ${categoryId}`)
    this.adminscreenService.getBrand(categoryId).subscribe(result=>{
      this.brands=result.payload
  })
  }

  onSubmit(){
    console.log("inside submit")
    console.log("form value");
    console.log(this.addProductForm.value)
    
    const formdata=new FormData();
    for(var i=0;i<this.file.length;i++){
      formdata.append("image",this.file[i])
    }
    console.log(formdata)
    const blob=new Blob([JSON.stringify(this.addProductForm.value)],{type:'application/json'})
    // formdata.append("product",JSON.stringify(this.addProductForm.value))
    formdata.append("product",blob)
    console.log("after adding form value")
    console.log(formdata)

    this.adminscreenService.saveproduct(formdata).subscribe(response=>{
        console.log("successfully submitted")
    })
  }

  selectfile(event:any){
      for(var i=0;i<event.files.length;i++){
        this.file.push(event.files[i]);
        if(i<event.files.length-1){
          this.filenames+=this.file[i].name+", "
        }
        else{
          this.filenames+=this.file[i].name
        }
        
      }
      console.log("after selecting files")
      console.log(this.file)
      console.log(this.filenames)
      this.addProductForm.controls['file'].setValue(this.filenames)
  }
}
