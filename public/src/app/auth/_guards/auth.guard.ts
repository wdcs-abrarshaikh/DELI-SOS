import { AuthenticationService } from './../_services/authentication.service';
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../_services/user.service";
import {Observable} from "rxjs/Rx";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private _router: Router, private _userService: UserService,private _authService:AuthenticationService,private toastService: ToastrService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		
		let currentUser = JSON.parse(localStorage.getItem('_token'));
		if(currentUser){
		  this._authService.verify().subscribe(data=>{
				 if(data['code']==400){
					this._router.navigate(['/login'])
					this.toastService.success(data['message']);

				 }
			 })
		    return true;
		}else{
			this._router.navigate(['/login'])
			return false;
		}
	
	
      	   
	}

}