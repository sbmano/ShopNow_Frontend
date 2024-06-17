import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //adminScreen:String="Adminstration"
  searchText = '';
  displaysearchresult:boolean=false;
  showhomepage:boolean=false;

  public menuList = [
    { link: "myaccount", name: "MyAccount", icon: "fa fa-user" },
    { link: "myorders", name: "Orders", icon: "fa fa-cube" },
    { link: "mycart", name: "Cart", icon: "fa fa-shopping-cart" },
    { link: "adminscreens", name: "Administration", icon: "fa fa-lock" },
    { link: "/api/auth/login", name: "SignOut", icon: "fa fa-sign-out" },
  ];

  public adminmenuList = [
    { link: "adminscreens/addproduct", name: "Add Items", icon: "fa fa-plus-square" },
    { link: "adminscreens/userdetails", name: "User Details", icon: "fa fa-users" },
    { link: "adminscreens/viewallproducts", name: "View Items", icon: "fa fa-eye" },
  ];
  
  public searchboxfilters = [
    { itemname: "mobiles"},{ itemname: "laptops"},{ itemname: "TVs"},{ itemname: "shoes"},
  ];

  constructor(private route:Router,private dashboardservice:DashboardService) { }
  name:String=this.dashboardservice.getname()
  ngOnInit(): void {
    
    if(!this.route.url.includes('dashboard/')) this.showhomepage=true;
      this.dashboardservice.showhomepage.subscribe(result=>{
        this.showhomepage=result;
      })
  }

  tologout(){
    localStorage.removeItem('token');
    this.route.navigate(['/api/auth/login']);
  }

  openSearch(){
    this.displaysearchresult=true;
    console.log("displaysearchresult input : "+ this.displaysearchresult)
  }

  enablehomepage(value:boolean){
    this.showhomepage=value;
  }
  // @HostListener('document:click', ['$event']) 
  //   clickout() {
  //     console.log("displaysearchresult : "+ this.displaysearchresult)
  //    this.displaysearchresult = false;
    
  //   }

  //   clickit(){
  //     this.displaysearchresult = !this.displaysearchresult;
  //     }
    
}
