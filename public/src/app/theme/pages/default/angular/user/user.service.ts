import { URL } from './../../../../../app.service';
import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { error } from '@angular/compiler/src/util';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private usersList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setUsers(data: any) {
        this.usersList.next({ usersList: data });
    }

    getUsers(): Observable<any> {
        return this.usersList.asObservable();
  }
  
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json')
        let token = JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
        return headers;
    }
    addUser(user: any) {
       return this.http.post<any>(URL + 'admin/addUser', user, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );

    }
    getAllUsers() {
        return this.http.get(URL + 'admin/getUserList', { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res })
            )
    }

    editUser(user: any, id: any) {
        return this.http.put<any>(URL + 'admin/updateUser/' + id, user, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }

    deleteUser(id: any) {
        return this.http.put<any>(URL + 'admin/deleteUser/' + id, {}, { headers: this.getHeaderWithToken() })
            .map((res: Response) => {
                return res
            });

    }



}