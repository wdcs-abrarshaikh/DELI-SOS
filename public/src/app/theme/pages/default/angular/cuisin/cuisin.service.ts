import { URL } from './../../../../../app.service';
import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CuisinService {
    private cuisinsList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setCuisins(data: any) {
        this.cuisinsList.next({ cuisinsList: data });
    }
    getCuisins(): Observable<any> {
        return this.cuisinsList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        let token = JSON.parse(localStorage.getItem('_token'))
         headers = headers.set('Authorization', token)
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }
    addCuisin(data: any) {
      return this.http.post<any>(URL + 'admin/addCuisin', data, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );

    }
    
    getAllCuisins() {
        return this.http.get(URL + 'admin/getCuisinList', { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res })
            );
    }

    editCuisin(data: any, id: any) {
       return this.http.put<any>(URL + 'admin/updateCuisin/' + id, data, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }

    deleteCuisin(id: any) {
      
        return this.http.put<any>(URL + 'admin/deleteCuisin/' + id,{}, { headers: this.getHeaderWithToken() })
            .map((res: Response) => {
                console.log(res)
                return res
            });

    }
    uploadPic(pic: any) {
      let formData = new FormData();
      formData.append('img', pic[0]);
      return this.http.post<any>(URL + 'admin/uploadPhoto', formData);

  }



}