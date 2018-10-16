import { ProfileService } from './../../pages/default/angular/profile/profile.service';
import { Router } from '@angular/router';
import { LoginService } from './../../../login/login.service';
import { Helpers } from './../../../helpers';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';


// declare let mLayout: any;
@Component({
selector: "app-header-nav",
templateUrl: "./header-nav.component.html",
encapsulation: ViewEncapsulation.None,
styleUrls: ['./header-nav.css']
})


export class HeaderNavComponent implements OnInit, AfterViewInit {
    loginForm: FormGroup;
    name:string;
    email:string;
    profilesList:any;

constructor(private loginService:LoginService,
          private router:Router,
          private profileService:ProfileService)  {
           
            this.profileService.getProfile().subscribe((data: any) => {
              console.log("uuuuuuuuuuuuu",data)
            this.profilesList=data.response.data.imageUrl
          });

}
ngOnInit()  {
  this.name = JSON.parse(localStorage.getItem('userName'));
  this.email = JSON.parse(localStorage.getItem('emailId'));

}

  logout(){
    localStorage.removeItem('_token');
    localStorage.removeItem('_id');
    this.router.navigate(['/login']);


  }
ngAfterViewInit()  {


}

}