import { Subject } from 'rxjs/Subject';
 import { URL } from './../../../../app.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class IndexService {
    private usersList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setUsers(data: any) {
        this.usersList.next({ usersList: data });
    }
    getUsers(): Observable<any>{
        return this.usersList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json')
        let token = JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
      
        return headers;
    }
   
    getAllUsers() {
        return this.http.get(URL + 'getUsers', { headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        );
    }

    getAllRequest(){
        console.log("hhhhhhhhhh")
        return this.http.get(URL+ 'admin/getAllPendingRestaurant',{ headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        )
    }
    approveRestaurant(R_id){
        console.log(R_id)
        return this.http.get(URL+'admin/approveRestaurantProposal/'+ R_id ,{ headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{
                return res
            })
        )

    }

   
   
   
  
   
}