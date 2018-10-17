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
  name: any;
  email: any;
  display:boolean

  profileForm: FormGroup;

  constructor(private loginService: LoginService,
    private profileService: ProfileService,
    private _formBuilder: FormBuilder, ) {
    this.profileService.getProfile().subscribe((data: any) => {
     this.name = data.data.name
      this.email = data.data.email
      this.profilesList=data.data.profilePicture
      this.personalInfo = data.response.data
 });
  }

  ngOnInit() {
    this.buildProfileForm();
    this.getInfo();

  }
  buildProfileForm() {
    this.profileForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      profilePicture: [''],
     });
  }
  
  getInfo() {
   this.profileService.getProfile().subscribe((response: any) => {
   
    this.personalInfo = response.data;

    }, error => {
      console.log('error' + error);

    });



  }

  // uploadProfileImage(image) {

  //   var data = {
  //     "file": image
  //   }
  //   console.log("data",data)
  //   this.profileService.uploadPic(data).subscribe((response: any) => {

  //    console.log("rrrrrrrr",response)
    

  //   }, error => {
  //     console.log('error',error)
  //   });

  // }
  async uploadProfileImage(images) {
    console.log("fffffffffff",images)
       return new Promise((resolve,reject)=>{
         this.profileService.uploadPic(images).subscribe((data)=>{
           console.log("ooooooooo",data)
         resolve(data.data)
         });
      })
            
   }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;

    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    console.log("kkkkkk",file)
    this.uploadProfileImage(file);
    // reader.onload = this._handleReaderLoaded.bind(this);
    // reader.readAsDataURL(file);

  }
  // _handleReaderLoaded(e) {

  //   let reader = e.target;
  //   this.mypic = reader.result;
  //   var res = this.mypic.split(',')
  //   //  console.log("rrrr",res)
  //   this.uploadProfileImage(res[1]);
  // }

  editProfile() {
    var editObj = {
      "email": this.profileForm.controls['email'].value,
      "name": this.profileForm.controls['name'].value,
      // "gender": this.profileForm.controls['gender'].value,
      "profilePicture": this.profilesList,
   }
    
    this.profileService.editProfile(editObj).subscribe((response: any) => {
     


    })
  }


}

