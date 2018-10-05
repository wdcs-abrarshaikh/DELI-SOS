import { URL } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }
  // getHeaderWithToken() {
  //   let headers = new HttpHeaders()
  //   headers = headers.set('Content-Type', 'application/json')

  //   return headers;
  // }
  post(obj) {
   
    return this.http.post(URL + 'admin/forgotPassword', obj)
      .map((res) => res);
  }

}
