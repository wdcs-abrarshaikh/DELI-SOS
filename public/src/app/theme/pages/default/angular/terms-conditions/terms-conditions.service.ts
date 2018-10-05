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
export class TermsConditionsService {

  private termConditionList = new Subject<any>()
  constructor(private http: HttpClient) { }

  setTermCondition(data: any) {
    this.termConditionList.next({ termConditionList: data });
  }

  getTermCondition(): Observable<any> {
    return this.termConditionList.asObservable();
  }

  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  addTermCondition(about: any) {
    var id = localStorage.getItem('currentUser')
    var admin_id = JSON.parse(id)
    return this.http.post<any>(URL + 'createTermCondition/' + admin_id, about, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }

  getAllTermCondition() {
    return this.http.get(URLS + 'termsConditions')
      .pipe(
        map((res: Response) => { return res })
      );
  }

  editTermCondition(about: any, id: any) {
    var admin_id = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.put<any>(URL + 'editTermCondition/' + id + '/' + admin_id, about, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }

  deleteTermCondition(id: any) {
    var admin_id = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.put<any>(URL + 'deleteTermCondition/' + id + '/' + admin_id, {}, { headers: this.getHeaderWithToken() })
      .map((res: Response) => {
        return res
      });
  }
}
