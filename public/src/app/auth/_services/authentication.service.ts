import { URL } from './../../app.service';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthenticationService {

	constructor(private http: Http) {
	}
	getHeaderWithToken() {
		let headers = new HttpHeaders()
		headers = headers.set('Content-Type', 'application/json')
	
		return headers;
	  }
	
	

	login() {
		
		return this.http.post(URL+'login', { headers: this.getHeaderWithToken() } )
			.map(response => {
				console.log('responsesss',response);
				// login successful if there's a jwt token in the response
				let user = response.json();
				if (user && user.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			});
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
	}
}