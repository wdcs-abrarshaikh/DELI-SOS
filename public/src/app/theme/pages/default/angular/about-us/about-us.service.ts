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
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))
        headers = headers.set('Content-Type', 'application/json')
        return headers;
    }
    addAboutus(about: any) {
        var id = localStorage.getItem('currentUser')
        var id1 = JSON.parse(id)
        return this.http.post<any>(URL + 'createAboutUs/' + id1, about, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }
    getAllAboutus() {
        return this.http.get(URL + 'aboutUs')
            .pipe(
                map((res: Response) => { return res })
            );
    }


    editAboutus(about: any, id: any) {
        var user_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put<any>(URL + 'editAboutUs/' + id + '/' + user_id, about, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }
    deleteAboutus(id: any) {
        var user_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put<any>(URL + 'deleteAboutUs/' + id + '/' + user_id, {}, { headers: this.getHeaderWithToken() }).map((res: Response) => {

            return res
        });
    }
}