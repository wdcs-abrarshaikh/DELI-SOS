import { URL } from './../app.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  post(obj) {
   
    return this.http.post(URL + 'admin/forgotPassword', obj)
      .map((res) => res);
  }

}
