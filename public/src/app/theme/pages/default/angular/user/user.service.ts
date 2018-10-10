import { URL } from './../../../../../app.service';
import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    private usersList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setUsers(data: any) {
        console.log("set user data",data)
        // console.log(this.usersList.next({ usersList:data}))
        this.usersList.next({ usersList:data});
    }
    getUsers(): Observable<any> {
        return this.usersList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json')
          let token= JSON.parse(localStorage.getItem('currentuser'))
          headers = headers.set('Authorization', token)
        return headers;
    }
    addUser(user: any) {
      // var id=JSON.parse(localStorage.getItem('currentUser'));
       console.log("add data here ")
        return this.http.post<any>(URL + 'admin/addUser', user, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );

    }
    getAllUsers() {
         return this.http.get(URL + 'admin/getUserList', { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res })
            );
    }
       
    // getUserDetail(id:any){
    //     return this.http.get(URL + 'admin/ getUserDetail/' + id, { headers: this.getHeaderWithToken() })
    //         .pipe(
    //             map((res: Response) => { return res }),
    //         );
    // }

    editUser(user: any, id: any) {
        console.log("edit user here")

        return this.http.put<any>(URL + 'admin/updateUser/' + id, user, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }

    deleteUser(id: any) {
        console.log(id)
        console.log("feletvcxbhhh")
          return this.http.put<any>(URL + 'admin/deleteUser/' + id , {}, { headers: this.getHeaderWithToken() })
          .map((res: Response) => {
            return res
        });
      
    }



}