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
  setContacts(data:any){
  this.contactList.next({contactList:data})

  }
  getContact():Observable<any>{
     return this.contactList.asObservable();
  }

  getAllContactRequest(){
    return this.http.get(URL+ 'admin/getAllPendingRestaurant',{ headers: this.getHeaderWithToken() })
    .pipe(
        map((res:Response)=>{ return res})
    )
}
resolveContact(R_id){
   return this.http.get(URL+'admin/approveRestaurantProposal/'+ R_id ,{ headers: this.getHeaderWithToken() })
    .pipe(
        map((res:Response)=>{
            return res
        })
    )

}

}
