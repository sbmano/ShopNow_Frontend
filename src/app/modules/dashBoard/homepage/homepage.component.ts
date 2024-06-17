import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  slideno:number=0
  imageurl:String="http://localhost:8080/api/getImagebyURL?idType=imageId&id="
  imagesUrl:any=['assets/images/homepageimages/image1.webp',
  'assets/images/homepageimages/image2.webp'
]
  topdealproducts=new Map();
  constructor(private dashboardservice:DashboardService) { }

  ngOnInit(): void {
    this.getProductbyid();
    this.getSpecialDealProducts()
  }


  sliderImages=[{
    image:'assets/images/homepageimages/image1.webp',
  },{
    image:'assets/images/homepageimages/image2.webp',
  },
  {
    image:'assets/images/homepageimages/image3.webp',
  }]

    topDealImages=[{
    image:'assets/images/homepageimages/mobiles/image1.webp',name:'Vivo T2 Pro'
  },{
    image:'assets/images/homepageimages/mobiles/image2.webp',name:'Poco m6 Pro'
  },
  {
    image:'assets/images/homepageimages/mobiles/image3.webp',name:'Moto G34 5G'
  }]

  topDealImages1:any
  getProductbyid(){
    this.dashboardservice.getProduct(1).subscribe(result=>{
      this.topDealImages1=result.payload
    })
  }

  getSpecialDealProducts(){
    this.dashboardservice.getSpecialDealProducts().subscribe(result=>{
      // result.payload.forEach()=>{
      //   this.topdealproducts.set(key,val);
      // })
      this.topdealproducts=result.payload
      console.log(this.topdealproducts)
    })
  }
getvalue(items:any,key:any){
  console.log("inside get value: "+key)
  console.log(Array.from(this.topdealproducts.get(key)))
  return Array.from(items.get(key))
}

enablehomepage(){
  this.dashboardservice.showhomepage.next(false);
}

}
