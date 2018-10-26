import { ProfileService } from './profile.service';
import { LoginService } from './../../../../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any
  mypic: any;
  profilesList: any;
  personalInfo: Array<any>;
  name: any;
  email: any;
  display: boolean


  profileForm: FormGroup;

  constructor(private loginService: LoginService,
    private profileService: ProfileService,
    private _formBuilder: FormBuilder,
    private toastService: ToastrService) {
    this.profileService.getProfile().subscribe((data: any) => {
      this.id = data.data._id
      this.name = data.data.name
      this.email = data.data.email
      this.profilesList = data.data.profilePicture

    });
  }

  ngOnInit() {
    this.buildProfileForm();
  
  }
  buildProfileForm() {
    this.profileForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      profilePicture: [''],
    });
  }


  async uploadImage(images) {
    let files = images.target.files;
    return new Promise((resolve, reject) => {
      this.profileService.uploadPic(files).subscribe((data) => {
        this.profilesList = data.data[0]
        resolve(data.data)
      });
    })

  }

  editProfile() {
    this.profileService.changeImage(this.profilesList)
    this.profileService.changeName(this.name)

    var editObj = {
      "name": this.profileForm.controls['name'].value,
      "profilePicture": this.profilesList
    }

    this.profileService.editProfile(editObj).subscribe((response: any) => {
      this.personalInfo = response.data;
     if (response['code'] ==200 ) {
        swal({
          position: 'center',
          type: 'success',
          title: response['message'],
          showConfirmButton: false,
          timer: 1500
        })
     
      } else {
        swal({
          type: 'error',
          text: response['message']
        })
      }
    },
    (err) => {
       this.toastService.error(err['message']);
      })
  }


}

