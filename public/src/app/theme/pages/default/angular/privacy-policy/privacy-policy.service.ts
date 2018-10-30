import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { URL } from './../../../../../app.service';



@Injectable({
  providedIn: 'root'
})

export class PrivacyPolicyService {
  private privacyPolicyLists = new Subject<any>()
  constructor(private http: HttpClient) { }

  setPrivacyPolicy(data: any) {
  this.privacyPolicyLists.next({ privacyPolicyLists: data });
  }

  getPrivacyPolicy(): Observable<any> {
   return this.privacyPolicyLists.asObservable(); 
  }

  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('_token')))
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  addPrivacyPolicy(about: any) {
   return this.http.post<any>(URL + 'admin/addPrivacyPolicy', about, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }

  getAllPrivacyPolicy() {
    return this.http.get(URL + 'admin/privacyPolicyList',{ headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res })
      );
  }

  editPrivacyPolicy(about: any, id: any) {
    return this.http.put<any>(URL + 'admin/updatePrivacyPolicy/' + id , about, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }

  deletePrivacyPolicy(id: any) {
    return this.http.put<any>(URL + 'admin/deletePrivacyPolicy/' + id , {}, { headers: this.getHeaderWithToken() })
      .map((res: Response) => {
        return res
      });
  }
}