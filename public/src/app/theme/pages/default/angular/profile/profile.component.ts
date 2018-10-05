import { ProfileService } from './profile.service';
import { LoginService } from './../../../../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mypic: any;
  profilesList: any;
  personalInfo: Array<any>;
  userName: any;
  userEmail: any;

  profileForm: FormGroup;

  constructor(private loginService: LoginService,
    private profileService: ProfileService,
    private _formBuilder: FormBuilder, ) {
    this.profileService.getProfile().subscribe((data: any) => {
    

      this.userName = data.response.data.fullName
      this.userEmail = data.response.data.emailId
      this.profilesList=data.response.data.imageUrl
      this.personalInfo = data.response.data


    });
  }

  ngOnInit() {
    this.buildProfileForm();
    this.getInfo();

  }
  buildProfileForm() {
    this.profileForm = this._formBuilder.group({
      emailId: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      imageUrl: [''],
      gender: '',


    });
  }
  getInfo() {

    this.profileService.getProfile().subscribe((response: any) => {
     
      this.personalInfo = response.response.data;

    }, error => {
      console.log('error' + error);

    });



  }
  uploadProfileImage(image) {

    var data = {
      "file": image
    }
    this.profileService.uploadPic(data).subscribe((response: any) => {

      this.profilesList = response.response.url;
    

    }, error => {
      console.log('error',error)
    });

  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e) {

    let reader = e.target;
    this.mypic = reader.result;
    var res = this.mypic.split(',')

    this.uploadProfileImage(res[1]);
  }

  editProfile() {
    var editObj = {
      "emailId": this.profileForm.controls['emailId'].value,
      "fullName": this.profileForm.controls['fullName'].value,
      "gender": this.profileForm.controls['gender'].value,
      "imageUrl": this.profilesList,
     


    }
    
    this.profileService.editProfile(editObj).subscribe((response: any) => {
     


    })
  }


}

