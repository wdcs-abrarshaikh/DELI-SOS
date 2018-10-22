import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";

import {User} from "../_models/index";

@Injectable()
export class UserService {
	constructor(private http: Http) {
	}

   verify() {
		
		console.log("sdhgf")
		return this.http.get('/login', this.jwt()).map((response: Response) => response.json());
	}

	forgotPassword(email: string) {
		return this.http.post('/api/user/forgotPassword', JSON.stringify({email}), this.jwt()).map((response: Response) => response.json());
	}

	getAll() {
		return this.http.get('/api/getUsers', this.jwt()).map((response: Response) => response.json());
	}

	getById(id: number) {
		return this.http.get('/api/user/' + id, this.jwt()).map((response: Response) => response.json());
	}

	create(user: User) {
		return this.http.post('/api/user', user, this.jwt()).map((response: Response) => response.json());
	}

	update(user: User) {
		return this.http.put('/api/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
	}

	delete(id: number) {
		return this.http.delete('/api/user/' + id, this.jwt()).map((response: Response) => response.json());
	}

	// private helper methods

	private jwt() {
		// create authorization header with jwt token
		let currentUser = JSON.parse(localStorage.getItem('_token'));
		if (currentUser && currentUser.token) {
			console.log(currentUser)
			let headers = new Headers({'Authorization':JSON.parse(localStorage.getItem('_token')) });
			return new RequestOptions({headers: headers});
		}
	}
}