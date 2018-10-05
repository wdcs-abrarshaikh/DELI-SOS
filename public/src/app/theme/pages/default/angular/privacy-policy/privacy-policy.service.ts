import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

const URL: string = "http://66.70.179.133:4009/solow/v2/api/admin/";
const URLS: string = "http://66.70.179.133:4009/solow/v2/api/user/";

@Injectable({
  providedIn: 'root'
})

export class PrivacyPolicyService {
  private privacyPolicyList = new Subject<any>()
  constructor(private http: HttpClient) { }

  setPrivacyPolicy(data: any) {
    this.privacyPolicyList.next({ privacyPolicyList: data });
  }

  getPrivacyPolicy(): Observable<any> {
    return this.privacyPolicyList.asObservable(); 
  }

  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  addPrivacyPolicy(about: any) {
    var id = localStorage.getItem('currentUser')
    var admin_id = JSON.parse(id)
    return this.http.post<any>(URL + 'createPrivacyPolicy/' + admin_id, about, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }

  getAllPrivacyPolicy() {
    return this.http.get(URLS + 'privacyPolicy')
      .pipe(
        map((res: Response) => { return res })
      );
  }

  editPrivacyPolicy(about: any, id: any) {
    var user_id = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.put<any>(URL + 'editPrivacyPolicy/' + id + '/' + user_id, about, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }

  deletePrivacyPolicy(id: any) {
    var user_id = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.put<any>(URL + 'deletePrivacyPolicy/' + id + '/' + user_id, {}, { headers: this.getHeaderWithToken() })
      .map((res: Response) => {
        return res
      });
  }
}