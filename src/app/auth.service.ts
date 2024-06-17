import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService{

  
  username:any
  //header:any
  token:any
  baseurl:String="http://localhost:8080/api"
  constructor(private httpclient: HttpClient) { }
  //let auth_token="abc"
  // setheader():any{
  //   const headers = new HttpHeaders({
  //     'Authorization':`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5vQGdtYWlsLmNvbSIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTY4OTEwMjA2MCwiZXhwIjoxNjg5MTIwMDYwfQ.c0y6MknPErRlc5K0SoGsmENPwTF1ccYLS6D4oyoyXUc`
  //   });
  //   const request={headers:headers}
  //   return request
  // }
 
   //this.token=this.gettoken();
  //  header(){
  //   console.log("inside header")
  //     this.token={
  //       headers:new HttpHeaders().setHeaders:{'Authorization',`Bearer ${this.gettoken()}`}
  //     }
  //  }
  //{headers:new HttpHeaders().set('Access-Control-Allow-Origin',`*`).set('Authorization','Bearer abc')}
  login(data:any):Observable<any>{
    return this.httpclient.post("http://localhost:8080/api/auth/login",data);
  }

  signup(data:any):Observable<any>{
    return this.httpclient.post("http://localhost:8080/api/auth/signup",data);
  }

  getalluser(): Observable<any> {
    //console.log(new window.Response().headers);
    //this.header()
    //console.log(this.setheader());
    return this.httpclient.get<any>("http://localhost:8080/api/users/list")
  }

  getuserbyid(id:any): Observable<any> {
    console.log(new window.Response().headers);
    return this.httpclient.get<any>("http://localhost:8080/api/auth/user"+id);
  }

  settoken(key: any, value: any, name: any) {
        const item = {
          value: value,
          name: name
        }
        localStorage.setItem(key, JSON.stringify(item))
      }
      getname() {
        const itemStr = localStorage.getItem('token')
        if (!itemStr) {
          return null
        }
        const item = JSON.parse(itemStr)
        return item.name;
      }
      gettoken(): string | null {
      const itemStr = localStorage.getItem('token')
        if (!itemStr) {
          return null
        }
        const item = JSON.parse(itemStr)
        return item.value;
  }
}
