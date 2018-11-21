import { Subject } from 'rxjs/Subject';
import { URL } from './../../../../../app.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ProfileService {
    private profilesList = new Subject<any>()
    private name = new Subject<any>()
    private imageSource = new BehaviorSubject('');
    private nameSource = new BehaviorSubject('');
    currentImage = this.imageSource.asObservable();
    currentName = this.nameSource.asObservable();


    changeImage(image: string) {
        this.imageSource.next(image)
    }
    changeName(name: string) {
        this.nameSource.next(name)
    }
   
    constructor(private http: HttpClient) {

    }

    getHeaderWithToken() {
        let headers = new HttpHeaders()
        let token = JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }


    getProfile() {
        
        var admin_id = JSON.parse(localStorage.getItem('_id'));
        return this.http.get(URL + 'admin/getUserDetail/' + admin_id, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res })
            );
    }


    editProfile(profile: any) {
        var admin_id = JSON.parse(localStorage.getItem('_id'));

        return this.http.put<any>(URL + 'admin/updateUser/' + admin_id, profile, { headers: this.getHeaderWithToken() }).map((res: Response) => { return res })

    }

    uploadPic(pic: any) {
        let formData = new FormData();
        formData.append('img', pic[0]);
        return this.http.post<any>(URL + 'admin/uploadPhoto', formData);

    }



}