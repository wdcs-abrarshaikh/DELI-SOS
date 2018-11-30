import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';
import swal from 'sweetalert2'
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
              private forgotPasswordService:ForgotPasswordService,
              private spinnerService: Ng4LoadingSpinnerService) { }

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
      this.spinnerService.show();
     }

      get f(){
        return this.forgotPasswordForm.controls;
      }

   forgotPassword() {
     this.forgotPasswordService.post(this.forgotPasswordForm.value).subscribe((response: any) => {
       console.log(response)
       if (response['code'] == 200) {
        swal({
          position: 'center',
          type: 'success',
          title: response['message'],
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/forgotemail']);
        this.spinnerService.hide();
     } else {
        swal({
          type: 'error',
          text: response['message']
        })
      }
    },
      error => {
      console.log('error',JSON.stringify(error));
    });
         
  }

}
