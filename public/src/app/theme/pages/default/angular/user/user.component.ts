
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserService } from './user.service';
import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,  FormGroup, } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import swal from 'sweetalert2'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';


function _window(): any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit, AfterViewInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

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
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router) {
    this.userService.getUsers().subscribe((data: any) => {
      this.usersList = data.usersList.data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
        this.spinnerService.hide();
     })
   
    });
  }

  ngAfterViewInit() {
    let scripts = [];
    if (!_window().isScriptLoadedUsermgmt) {
      scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
    }
    let that = this;
    this._script.loadScripts('app-user',
      scripts).then(function () {
        _window().isScriptLoadedUsermgmt = true;
        that._script.loadScripts('app-user', ['assets/demo/default/custom/crud/datatables/basic/paginations.js']);
      });
  }

  ngOnInit() {
    _window().my = _window().my || {};
    _window().my.notimgmt = _window().my.notimgmt || {};
    if (typeof (_window().isScriptLoadedUsermgmt) == "undefined") {
      _window().isScriptLoadedUsermgmt = false;
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      stateSave: true
    };
    this.getUserList();
   
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
      this.usersList = response.data;
      this.dtTrigger.next();
      this.spinnerService.hide();
    }
    )
  }

  viewUser(user) {
    this.modalReference = this.modalService.open(user)
  }

  delete(id) {
   swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#49a558',
      cancelButtonColor: '#a73a08',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.spinnerService.show();
        this.userService.deleteUser(id).subscribe(
          data => {
            this.userService.getAllUsers().subscribe((response: any) => {
              this.usersList = response.data;
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.destroy();
                this.dtTrigger.next();
                this.spinnerService.hide();
              })
            }
            )
            if (data['code'] == 200) {
              swal(
                'Deleted!',
                data['message'],
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


















