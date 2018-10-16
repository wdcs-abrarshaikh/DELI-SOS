import { Subject } from 'rxjs/Subject';
import { URL } from './../../../../../app.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

// const URL: string = "http://66.70.179.133:4009/solow/v2/api/admin/";
// const URLS: string = "http://66.70.179.133:4009/solow/v2/api/";
// const URLS: string = "http://192.168.0.136:8080/";


@Injectable({
    providedIn: 'root'
})

export class ProfileService {
    // private categoriesList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
   
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        let token= JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
        headers = headers.set('Content-Type', 'application/json')
        return headers;
    }
  
    getProfile() {
        var admin_id=JSON.parse(localStorage.getItem('_id'));
        console.log("admin id",admin_id)
        return this.http.get(URL + 'admin/getUserDetail/' + admin_id, { headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        );
    }

   
    editProfile(profile:any) {
        
        var admin_id=JSON.parse(localStorage.getItem('currentUser'));
      
        return this.http.put<any>(URL + 'editAdminProfile/' + admin_id, profile,{ headers: this.getHeaderWithToken() }).map((res: Response) => { return res })
           
    }
 
    uploadPic(pic:any){
        console.log(pic)
    
        return this.http.post<any>(URL + 'admin/uploadPhoto',pic, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => {
              
                    return res }),
            );

    }
   
   
}