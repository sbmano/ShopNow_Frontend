import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminscreenService {

  constructor(private authservice:AuthService,private httpclient:HttpClient ) { }
  
   
  getcategory():Observable<any>{
    return this.httpclient.get(this.authservice.baseurl+"/getCategory");
  }
  getBrand(categoryid:number):Observable<any>{
    const params={
      categoryid
    }
    return this.httpclient.get(this.authservice.baseurl+"/getBrand",{params});
  }
   

  saveproduct(data:FormData):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'multipart/form-data'
    });
    return this.httpclient.post(this.authservice.baseurl+"/saveProduct",data);
  }
}
