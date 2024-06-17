import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private authservice:AuthService,private httpclient:HttpClient) { }

  showhomepage:Subject<any> =new Subject<any>();

  getname() {
    const itemStr = localStorage.getItem('token')
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    return item.name;
  }

  getProduct(product:number):Observable<any>{
    const params={
      productid:product
    }
    return this.httpclient.get(this.authservice.baseurl+"/getImagesbyProductId",{params});
  }
  
  getSpecialDealProducts():Observable<any>{
    return this.httpclient.get(this.authservice.baseurl+"/getSpecialDealProducts");
  }
}
