import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css']
})
export class AdminscreenComponent implements OnInit {

  public adminmenulist = [
    { link: "addproduct", name: "Add Items", icon: "fa fa-plus-square",onclick:"addproduct()" },
    { link: "viewallproducts", name: "View Items", icon: "fa fa-eye",onclick:"viewproduct()" },
    { link: "userdetails", name: "User Details", icon: "fa fa-users",onclick:"userdetails()" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addproduct(){
    console.log("inside addproduct")
  }
  viewproduct(){
    console.log("inside viewproduct")
  }
  userdetails(){
    console.log("inside userdetails")
  }

}
