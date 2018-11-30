import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
    private toastService: ToastrService,
    private spinnerService: Ng4LoadingSpinnerService ) { }


  ngOnInit() {
    this.buildLoginForm();
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
   // stop here if form is invalid
    if (this.loginForm.invalid) {
          return;
    }
   this.spinnerService.show();
  }
  
  signIn() {
    this._loginService.post(this.loginForm.value).subscribe((response: any) => {
      this.spinnerService.hide();
      if (response['code'] == 200) {
       this.toastService.success(response.message);
       localStorage.setItem('_token', JSON.stringify(response.token))
        localStorage.setItem('_id', JSON.stringify(response.data._id));
        this._router.navigate(['/index']);
      }
      else{
        this.toastService.error(response.message);
        this.spinnerService.hide();
      }
    }, error => {
      this.spinnerService.hide();
      console.log('error' + error);
    });

  }

  buildLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required]]

    });
  }
}
