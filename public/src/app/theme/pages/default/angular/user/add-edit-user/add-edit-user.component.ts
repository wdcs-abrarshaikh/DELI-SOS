import { Message, Password } from 'primeng/primeng';
import { UserService } from '../user.service';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import swal from 'sweetalert2'

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  usersList: Array<any>;


  userForm: FormGroup;

  @Input() id;
  @Input() name;
  @Input() email;
  @Input() password;
  @Input() deviceId;
  @Input() deviceType;
  @Input() fcmToken;
  loading = false;
  submitted = false;
  isAdd: boolean;
  isView: boolean;

  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private userService: UserService,
    private toastService: ToastrService) { }

  ngOnInit() {
    this.buildUserForm();
  }

  get f() {
    return this.userForm.controls;
  }
  buildUserForm() {
    this.userForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required]],
      deviceId: ['', Validators.required],
      deviceType: ['', Validators.required],
      fcmToken: ['', Validators.required]
    });
    console.log(this.userForm)
  }

  addUsers() {
    var addObj = {
      "name": this.userForm.controls['name'].value,
      "email": this.userForm.controls['email'].value,
      "password": this.userForm.controls['password'].value,
      "deviceId": this.userForm.controls['deviceId'].value,
      "deviceType": this.userForm.controls['deviceType'].value,
      "fcmToken": this.userForm.controls['fcmToken'].value,
    }
    if (this.isAdd) {
      this.userService.addUser(addObj).subscribe(
        data => {
          this.getAllUser();
          if (data['code'] == 201) {
            swal({
              position: 'center',
              type: 'success',
              title: data['message'],
              showConfirmButton: false,
              timer: 1500
            })
            this.activeModal.dismiss();
          } else {
            swal({
              type: 'error',
              text: data['message']
            })
          }
        },
        error => {
          this.toastService.error(error['message']);
        });
    } else {
      console.log(addObj)
      this.userService.editUser(addObj, this.id).subscribe(
        data => {
          this.getAllUser();
          this.activeModal.dismiss();
          if (data['code'] == 200) {
            swal({
              position: 'center',
              type: 'success',
              title: data['message'],
              showConfirmButton: false,
              timer: 1500
            })
            this.activeModal.dismiss();
          } else {
            swal({
              type: 'error',
              text: data['message']
            })
          }
        },
        error => {
          this.toastService.error(error['message']);
        });
    }
  }

  getAllUser() {
   
    this.userService.getAllUsers().subscribe((response: any) => {
      this.userService.setUsers(response);
    })
  }

  validateForm() {

    if (this.userForm.valid) {
      return false;
    } else {
      return true;
    }
  }



}
