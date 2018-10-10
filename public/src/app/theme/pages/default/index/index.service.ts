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
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))
      
        return headers;
    }
   
    getAllUsers() {
        return this.http.get(URL + '/getUsers', { headers: this.getHeaderWithToken() })
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

   
   
   
  
   
}