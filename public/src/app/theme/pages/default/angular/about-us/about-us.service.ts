import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { URL } from './../../../../../app.service';



@Injectable({
    providedIn: 'root'
})

export class AboutUsService {
    private aboutUsList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setAboutus(data: any) {
        this.aboutUsList.next({ aboutUsList: data });
    }
    getAboutus(): Observable<any> {
        return this.aboutUsList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('_token')))
        headers = headers.set('Content-Type', 'application/json')
        return headers;
    }

    addAboutus(about: any) {
     return this.http.post<any>(URL + 'admin/addAboutUs', about, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }
    
    getAllAboutus() {
        return this.http.get(URL + 'admin/aboutUsList', { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => {
                  return res
                })
            );
    }

    editAboutus(about: any, id: any) {
      return this.http.put<any>(URL + 'admin/updateAboutUs/' + id, about, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => {
                 return res
                }),
            );
    }
    deleteAboutus(id: any) {
       return this.http.put<any>(URL + 'admin/deleteAboutUs/' + id, {}, { headers: this.getHeaderWithToken() }).map((res: Response) => {
            return res
        });
    }
}