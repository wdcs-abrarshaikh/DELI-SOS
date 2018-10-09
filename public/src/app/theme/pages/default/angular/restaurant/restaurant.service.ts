import { Subject } from 'rxjs/Subject';
 import { URL } from './../../../../../app.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class RestaurantService {
    private RestautantList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setRestaurant(data: any) {
        console.log("set data")
        this.RestautantList.next({ RestautantList: data });
    }
   
    getRestaurant(): Observable<any>{
        return this.RestautantList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        let token= JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }

    addRestaurant(data: any){
       var admin_id=JSON.parse(localStorage.getItem('_id'));
       
        return this.http.post<any>(URL + 'admin/addRestaurant', data, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    
    }

    getAllRestaurant() {
        console.log("re list here")
        return this.http.get(URL + 'admin/getRestaurantList', { headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        );
    }

   
    editRestaurant(data:any,id) {
   
      return this.http.put<any>(URL + 'admin/updateRestaurant/' +id, data,{ headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }

    deleteRestaurant(R_id:any){
        return this.http.get (URL + 'admin/deleteRestaurant/' + R_id , { headers: this.getHeaderWithToken() })
        .pipe(
            map((res: Response) => { return res }),
        );

    }
    // resurrectCategory(id:any){
    //     var admin_id=JSON.parse(localStorage.getItem('currentUser'));
       

    //     return this.http.put<any>(URL + 'resurrectCatregory/' + id +'/'+ admin_id,{}, { headers: this.getHeaderWithToken() }).map((res: Response) => {
       
    //         return res });

    // }
    uploadPic(pic:any){
        console.log(pic)
        let formData =  new FormData();
        pic.map(async(res)=>{
            formData.append('img',res);

        })
        console.log(formData)
    //    return new Promise((resolve,reject)=>{
        return this.http.post<any>(URL + 'admin/uploadPhoto',formData);
        
    //    })
       

    }
   
   
}