import { URL } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  post(obj:any) {
    return this.http.post(URL + 'admin/login', obj, { headers: this.getHeaderWithToken() })
      .map((res) => {
        return res
      });
  }

  // get(obj:any){
  //   return this.http.get(URL + 'user/login', obj)
  //     .map((res) =>  res);

  // }


}
