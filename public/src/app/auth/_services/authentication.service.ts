import { URL } from './../../app.service';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";


@Injectable()
export class AuthenticationService {

	constructor(private https: Http,private http: HttpClient) {
	}
	getHeaderWithToken() {
		let headers = new HttpHeaders()
        headers = headers.set('Content-Type', 'application/json')
        let token = JSON.parse(localStorage.getItem('_token'))
        headers = headers.set('Authorization', token)
        return headers;
	  }
	
	

	login() {
		
		return this.http.post(URL+'login', { headers: this.getHeaderWithToken() } )
			.map(response => {
				console.log('responsesss',response);
				// login successful if there's a jwt token in the response
				// let user = response.json();
				// if (user && user.token) {
				// 	// store user details and jwt token in local storage to keep user logged in between page refreshes
				// 	localStorage.setItem('currentUser', JSON.stringify(user));
				// }
			});
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
	}
	
	verify() {
        return this.http.get(URL + 'admin/verifyToken', { headers: this.getHeaderWithToken() })
            .pipe(
				map((res: Response) => {
					return res })
				
			);
			
    }

}