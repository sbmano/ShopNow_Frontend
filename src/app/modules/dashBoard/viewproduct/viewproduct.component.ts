import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewproductComponent implements OnInit {

  imageGallary=['assets/images/homepageimages/mobiles/image2.webp',
    'assets/images/homepageimages/mobiles/image3.webp',
    'assets/images/homepageimages/mobiles/image4.webp']

    topDealImages=[{
      image:'assets/images/homepageimages/mobiles/image1.webp',name:'Vivo T2 Pro'
    },{
      image:'assets/images/homepageimages/mobiles/image2.webp',name:'Poco m6 Pro'
    },
    {
      image:'assets/images/homepageimages/mobiles/image3.webp',name:'Moto G34 5G'
    },
    {
      image:'assets/images/homepageimages/mobiles/image1.webp',name:'Vivo T2 Pro'
    },
    {
      image:'assets/images/homepageimages/mobiles/image2.webp',name:'Poco m6 Pro'
    },
    {
      image:'assets/images/homepageimages/mobiles/image3.webp',name:'Moto G34 5G'
    },
    {
      image:'assets/images/homepageimages/mobiles/image4.webp',name:'Samsung F21'
    },
    {
      image:'assets/images/homepageimages/mobiles/image4.webp',name:'Samsung F21'
    },
    {
      image:'assets/images/homepageimages/mobiles/image4.webp',name:'Samsung F21'
    }]

    productfeatures=[{
      description:"T3x 5G is equipped with the Snapdragon 6 Gen 1 - 4 nm 5G mobile platform and features a 8-core CPU"+
      "architecture. The next-gen 4 nm platform boasts a benchmark score of approximately 560K+, offering the"+
      "most powerful performance in its price range and providing ultra-smooth gaming and multitasking.",
      image:'assets/images/homepageimages/mobiles/image2.webp'
    },
    {
      description:"T3x 5G is equipped with the Snapdragon 6 Gen 1 - 4 nm 5G mobile platform and features a 8-core CPU"+
      "architecture. The next-gen 4 nm platform boasts a benchmark score of approximately 560K+, offering the"+
      "most powerful performance in its price range and providing ultra-smooth gaming and multitasking.",
      image:'assets/images/homepageimages/mobiles/image3.webp'
    },
    {
      description:"T3x 5G is equipped with the Snapdragon 6 Gen 1 - 4 nm 5G mobile platform and features a 8-core CPU"+
      "architecture. The next-gen 4 nm platform boasts a benchmark score of approximately 560K+, offering the"+
      "most powerful performance in its price range and providing ultra-smooth gaming and multitasking.",
      image:'assets/images/homepageimages/mobiles/image4.webp'
    }]

    currentImage:any=this.imageGallary[0]

    xtranslatevalue:number=0;
    scrollvalue:any="transform:translateX("+this.xtranslatevalue+"%);"
    public current={}
    public styletransform={obj:{
      '--translatevar':'translateX(0px)'
    }}

  constructor() { 
  //   var productimg=document.getElementById("productimg")
  //   var smallimg=document.getElementsByClassName("small-img");
	// smallimg[0].onclick=function()
	// 	{
  //     productimg.src=smallimg[0].src;
	// 	}
   }

  ngOnInit(): void {
    this.current=this.styletransform.obj
  }

  select(index:any){
    // console.log(index);
    this.currentImage=index
  }

  scrollleft(pxvalue:number){
    this.xtranslatevalue+=pxvalue;
    this.scrollvalue="transform:translateX("+this.xtranslatevalue+"%);"
    //console.log(this.scrollvalue)
  }

  scrollright(pxvalue:number){
    this.xtranslatevalue+=pxvalue;
    this.scrollvalue="transform:translateX("+this.xtranslatevalue+"%);"
    //console.log(this.scrollvalue)
    // var i=document.getElementById("similarproducts");
    // i.style.transform="translateX(300px)";
  }
 
  // getscrollpx():String{
  //   return 
  // }

}
