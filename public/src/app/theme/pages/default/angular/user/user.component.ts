// import { OnInit } from '@angular/core';
import { Message, Password } from 'primeng/primeng';
import { UserService } from './user.service';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';




@Component({
  selector: 'app-user',
  template: ` <div class="modal-header">
  <h4 class="modal-title">{{ isAdd ? 'Add' : isView ? 'View' : 'Edit'}} User</h4>  
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form [formGroup]="userForm" (ngSubmit)="addUsers()">
            <div class="form-group">
                <label for="name">User Name</label>
                <input type="text" formControlName="name" [(ngModel)]="name" class="form-control"/>
                <p *ngIf="userForm.controls.name.errors?.required && (userForm.controls.name.dirty || userForm.controls.name.touched)" class="lbl-err">Name is required.</p>
             </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" formControlName="email" [(ngModel)]="email" class="form-control" />
                <p *ngIf="userForm.controls.email.errors?.required  && (userForm.controls.email.dirty || userForm.controls.email.touched)" class="lbl-err">email Id is required.</p>
                <p *ngIf="userForm.controls.email.errors?.pattern  && (userForm.controls.email.dirty || userForm.controls.email.touched)" class="lbl-err">Enter Valid Email.</p>
             </div>

            <div class="form-group">
              <label for="deviceId">DeviceId</label>
              <input type="text" formControlName="deviceId" [(ngModel)]="deviceId" class="form-control" />
              <p *ngIf="userForm.controls.deviceId.errors?.required  && (userForm.controls.deviceId.dirty || userForm.controls.deviceId.touched)" class="lbl-err">Device Id is required.</p>
            </div>

            <div class="form-group">
              <label for="deviceType">Device Type</label>
              <input type="text" formControlName="deviceType" [(ngModel)]="deviceType" class="form-control" />
              <p *ngIf="userForm.controls.deviceType.errors?.required  && (userForm.controls.deviceType.dirty || userForm.controls.deviceType.touched)" class="lbl-err">Device Type  is required.</p>
            </div>

            <div class="form-group">
              <label for="fcmToken">fcm Token</label>
              <input type="text" formControlName="fcmToken" [(ngModel)]="fcmToken" class="form-control" />
              <p *ngIf="userForm.controls.fcmToken.errors?.required  && (userForm.controls.fcmToken.dirty || userForm.controls.fcmToken.touched)" class="lbl-err">fcmToken is required.</p>
            </div>

            <div [hidden]="!isAdd">
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" formControlName="password"  [(ngModel)]="password" class="form-control"/>
                <p *ngIf="userForm.controls.password.errors?.required  && (userForm.controls.password.dirty || userForm.controls.password.touched)" class="lbl-err">password is required.</p>
                <p *ngIf="userForm.controls.password.errors?.pattern  && (userForm.controls.password.dirty || userForm.controls.password.touched)" class="lbl-err">Enter Valid Password.</p>
           </div>
           </div>
        <div class="modal-footer">
            <div class="form-group" *ngIf="!isView">
           <button type="submit"  class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>
           <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
            </div>
         </div>
        </form>`,
  styleUrls: ['./user.component.css']
})

export class NgbdModalContent {
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
          this.activeModal.dismiss();
          this.toastService.success(data['message']);
        },
        error => {
          this.toastService.error(error['message']);
        });
    } else {
    
      this.userService.editUser(addObj, this.id).subscribe(
        data => {
          this.getAllUser();
          this.activeModal.dismiss();
          this.toastService.success(data['message']);
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
    console.log(this.userForm)
    if (this.userForm.valid) {
      return false;
    } else {
      return true;
    }
  }


}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, AfterViewInit {
  usersDetail: any;

  modalReference: any;
  isAdd: boolean = false;
  usersList: Array<any>;
  userForm: FormGroup;
  loading = false;
  submitted = false;
  isView: boolean = false;
  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private _script: ScriptLoaderService) {

    this.userService.getUsers().subscribe((data: any) => {
      this.usersList = data.usersList.data
    });
  }
  ngAfterViewInit() {
    this._script.loadScripts('app-user',
      ['assets/vendors/custom/datatables/datatables.bundle.js',
        'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
  }

  ngOnInit() {
   this.getUserList();
  }
  open(content, type) {
    if (!content) {
      this.isAdd = true
    } else {
      console.log('content....', content)
      console.log('type....', type)
      if (type == 'view') {
        this.isView = true
        this.isAdd = false
      } else {
        this.isAdd = false
        this.isView = false
      }
    }
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.password = content ? content.password : "";
    modalRef.componentInstance.email = content ? content.email : "";
    modalRef.componentInstance.deviceId = content ? content.deviceId : "";
    modalRef.componentInstance.deviceType = content ? content.deviceType : "";
    modalRef.componentInstance.fcmToken = content ? content.fcmToken : "";
    modalRef.componentInstance.isAdd = this.isAdd;
    modalRef.componentInstance.isView = this.isView;
  }

  // All User Display Method
  getUserList() {
    this.userService.getAllUsers().subscribe((response: any) => {
      // console.log("all data here display")
      console.log(response)
      this.usersList = response.data;
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(
      data => {
        this.modalReference.close();
        this.getUserList();
        this.toastService.success(data['message']);
      },
      error => {
        this.toastService.error(error['message']);
      });
  }

  delete(content) {
    this.modalReference = this.modalService.open(content);
  }

  validateForm() {
    if (this.userForm.valid) {
      return false;
    } else {
      return true;
    }
  }



}


















