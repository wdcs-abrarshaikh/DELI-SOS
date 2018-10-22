import { Component, OnInit } from '@angular/core';

import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
               private router: Router,
              private forgotPasswordService:ForgotPasswordService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
      
  });
  }

  onSubmit(){
    this.submitted=true;
   //if invalid form return
   if( this.forgotPasswordForm.invalid){
     return ;
      }
  }
      get f(){
        return this.forgotPasswordForm.controls;
      }

   forgotPassword() {
     this.forgotPasswordService.post(this.forgotPasswordForm.value).subscribe((response: any) => {
      if(response.code==200){
       this.router.navigate(['/forgotemail']);
       this.loading = false;
      }
     
    }, error => {
      console.log('error',JSON.stringify(error));
      
    });
    
      // this._router.navigate(['./theme/pages/default/index']);
        
  }

}
