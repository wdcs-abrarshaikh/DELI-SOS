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
        console.log("kkkkkkkkkkkkk")
        console.log(data)
        this.aboutUsList.next({ aboutUsList: data});
    }
    getAboutus(): Observable<any> {
        return this.aboutUsList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json')
        let token = JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
        return headers;
    }
    addAboutus(about: any) {
        console.log("lllll", about)
        return this.http.post<any>(URL + 'admin/addAboutUs', about, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }
    getAllAboutus() {
        return this.http.get(URL + 'admin/aboutUsList',{ headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => {
                    console.log("get",res)
                    return res })
            );
    }


    editAboutus(about: any, id: any) {
        console.log(id)
        var admin_id = JSON.parse(localStorage.getItem('_id'));
        return this.http.put<any>(URL + 'admin/updateAboutUs/' + id, about, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { 
                    console.log(">>>>>>>>>>>>>>>>>>>>",res)
                    return res }),
            );
    }
    deleteAboutus(id: any) {
        var admin_id = JSON.parse(localStorage.getItem('_id'));
        return this.http.put<any>(URL + 'admin/delAbout_Us' + admin_id, { headers: this.getHeaderWithToken() }).map((res: Response) => {
            return res
        });
    }
}