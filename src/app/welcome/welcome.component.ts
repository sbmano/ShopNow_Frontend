import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public menuList = [
    { link: "/api/auth/login", name: "SignOut", icon: "logout" },
    { link: "/api/auth/login", name: "SignOut", icon: "logout" },
    { link: "/api/auth/login", name: "SignOut", icon: "logout" },
  ];
  
  constructor(private route:Router,private authservice:AuthService) { }
  name:String=this.authservice.getname()
  ngOnInit(): void {
  }

  tologout(){
    localStorage.removeItem('token');
    this.route.navigate(['/api/auth/login']);
  }
   
}
