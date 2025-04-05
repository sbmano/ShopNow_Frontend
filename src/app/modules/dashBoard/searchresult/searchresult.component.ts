import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  searchresults=[{
    image:'assets/images/homepageimages/mobiles/image1.webp',name:'Vivo T2 Pro'
  },
  {
    image:'assets/images/homepageimages/mobiles/image2.webp',name:'Vivo T2 Pro'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
