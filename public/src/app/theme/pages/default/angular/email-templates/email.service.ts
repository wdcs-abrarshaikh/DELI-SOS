// import { URL } from './../../../../../app.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { Subject } from 'rxjs/Subject';

const URL: string = "http://localhost:4009/solow/v2/api/admin/";
const URLS: string = "http://66.70.179.133:4009/solow/v2/api/admin/";


@Injectable({
    providedIn: 'root'
})

export class EmailService {
    emailList = new Subject<any>()
    constructor(private http: HttpClient) {

    }
    setEmails(data: any) {
        this.emailList.next({ emailList: data });
    }
    getEmails(): Observable<any>{
        return this.emailList.asObservable();

    }
    getHeaderWithToken() {
        let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json')
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))
        return headers;
    }
    addEmail(email: any){
        var admin_id=JSON.parse(localStorage.getItem('currentUser'));
        return this.http.post<any>(URL + 'createEmailTemplate/'+admin_id, email, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    
    }
    getAllEmails() {
        return this.http.get(URL + 'getEmailTemplates/', { headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        );
    }

   
    editEmails(email:any,email_id: any) {
        return this.http.put<any>(URL + 'editEmailTemplate/' + email_id, email,{ headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => { return res }),
            );
    }
    deleteEmails(email_id:any){
     
        return this.http.put<any>(URL + 'deleteEmailTemplate/' + email_id,{}, { headers: this.getHeaderWithToken() })
            .pipe(
                map((res: Response) => {
                    return res }),
            );

    }
    getAvailableEmailTemplate(){
        
        return this.http.get(URLS + 'availableEmailTemplates', { headers: this.getHeaderWithToken() })
        .pipe(
            map((res:Response)=>{ return res})
        );

    }
  
   
}