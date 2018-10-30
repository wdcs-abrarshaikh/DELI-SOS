import { ProfileService } from './../../pages/default/angular/profile/profile.service';
import { Router } from '@angular/router';
import { LoginService } from './../../../login/login.service';
import { Helpers } from './../../../helpers';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
          
            // this.profileService.getProfile().subscribe((data: any) => {
            //    this.profilesList=data.data.profilePicture
            //    this.name=data.data.name
          // });

}
ngOnInit()  {
  this.profileService.currentImage.subscribe(image => {
   this.profilesList = image;
  })
  this.profileService.currentName.subscribe(name=>{
    this.name=name;
  })
  this.profileService.getProfile().subscribe((data: any) => {
  
    if(data.data == undefined){
        this.profilesList='dummy.jpg';
    }else{
        this.profilesList=data.data.profilePicture
        this.name=data.data.name
    }
   
});
}

  logout(){
    localStorage.removeItem('_token');
    localStorage.removeItem('_id');
    this.router.navigate(['/login']);


  }
ngAfterViewInit()  {


}

}