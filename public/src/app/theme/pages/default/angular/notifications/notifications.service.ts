import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

const URL: string = "http://66.70.179.133:4009/solow/v2/api/admin";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationList = new Subject<any>()
  constructor(private http: HttpClient) { }


  setNotifications(data: any) {
    this.notificationList.next({ notificationList: data });
  }
 
  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')))

    return headers;
  }
  
  getAllNotifications() {
    return this.http.get(URL + '/getNotificationModel', { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res })
      );
  }


  updateNotifications(user: any) {

    return this.http.put<any>(URL + '/updateNotificationModel', user, { headers: this.getHeaderWithToken() })
      .pipe(
        map((res: Response) => { return res }),
      );
  }
 
}
