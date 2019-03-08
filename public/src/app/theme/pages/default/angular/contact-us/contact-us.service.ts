import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { URL } from './../../../../../app.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

 private contactList=new Subject<any>()
  constructor(private http:HttpClient) { }
   
  getHeaderWithToken() {
   let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    let token = JSON.parse(localStorage.getItem('_token'))
    headers = headers.set('Authorization', token)
    return headers;

  }
  getAllContactRequest(){
    return this.http.get(URL+ 'admin/getContactRequest',{ headers: this.getHeaderWithToken() })
    .pipe(
        map((res:Response)=>{ return res})
    )
   }

}
