import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { Message, Password } from 'primeng/primeng';
import { UserService } from './user.service';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import swal from 'sweetalert2'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit, AfterViewInit {
  // usersDetail: any;

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
    private _script: ScriptLoaderService,
    private spinnerService: Ng4LoadingSpinnerService) {
      this.spinnerService.show();
    this.userService.getUsers().subscribe((data: any) => {
      this.usersList = data.usersList.data
      this.spinnerService.hide();
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
      if (type == 'view') {
        this.isView = true
        this.isAdd = false
      } else {
        this.isAdd = false
        this.isView = false
      }
    }
    const modalRef = this.modalService.open(AddEditUserComponent);
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
    this.spinnerService.show();
   this.userService.getAllUsers().subscribe((response: any) => {
    
      // console.log("all data here display")
      this.usersList = response.data;
      this.spinnerService.hide();
    });
  }

  viewUser(user) {
    this.modalReference = this.modalService.open(user)
  }

  delete(id) {
  
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUser(id).subscribe(
          data => {
            this.getUserList();
            if (data['code'] == 200) {
              swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else {
              swal({
                type: 'error',
                text: data['message']
              })
            }
          }, error => {
            swal({
              type: 'error',
              text: error['message']
            })
          });


      }
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


















