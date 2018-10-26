import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { FormBuilder,FormArray,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from './contact-us.service';
import { Component, OnInit,AfterContentInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2'
import { Location } from '@angular/common';


@Component({
  selector:'app-contact-us',
  template:`<div class="modal-header">
  <h4 class="modal-title">View User</h4>  
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form [formGroup]="contactUsForm" (ngSubmit)="addUsers()">
            <div class="form-group">
                <label for="name">User Name</label>
                <input type="text" formControlName="name" [(ngModel)]="name" class="form-control" disabled/>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" formControlName="email" [(ngModel)]="email" class="form-control" disabled/>
              
             </div>

            <div class="form-group">
              <label for="contactnumber">Contact Number</label>
              <input type="number" formControlName="contactnumber" [(ngModel)]="contactnumber" class="form-control" disabled/>
              </div>

       
        <div class="modal-footer">
            <div class="form-group" >
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
            </div>
         </div>
        </form>`,
  styleUrls:['./contact-us.component.css']
})


export class NgbdModalContent {

  contactList: Array<any>;
  contactUsForm: FormGroup;

  loading = false;
  submitted = false;
  isAdd: boolean;
  isView: boolean;

  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private ContactUsService: ContactUsService,
    private toastService: ToastrService) { }

  ngOnInit() {
    this.buildContactUsForm();
  }

  get f() {
    return this.contactUsForm.controls;
  }

  buildContactUsForm() {
    this.contactUsForm = this._formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      deviceId: [''],
   });
  }

  
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsList: Array<any>;
  isView: boolean = false;
  constructor(
      private _router: Router,
      private _formBuilder: FormBuilder,
      private _script: ScriptLoaderService,
      private contactUsService: ContactUsService,
      private toastService: ToastrService,
      private modalService: NgbModal,
      private location: Location) {
         this.contactUsService.getAllContactRequest().subscribe((response: any) => {
          this.contactUsList = response.data
      }) 
       }

  ngAfterViewInit() {
      this._script.loadScripts('app-contact-us',
          ['assets/vendors/custom/datatables/datatables.bundle.js',
              'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
  }

  ngOnInit() {
      this.getAllContactRequest()
 
  }
 

  getAllContactRequest() {
      this.contactUsService.getAllContactRequest().subscribe((response: any) => {
          this.contactUsList = response.data
          
          
      })
  }
  open(content) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.id = content ? content._id : "";
      modalRef.componentInstance.name = content ? content.name : "";
    
  }

  resolve(id) {
     this.contactUsService.resolveContact(id).subscribe((response: any) => {
          this.getAllContactRequest()
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
        err=>{
        this.toastService.error(err['message']);
      }
      )
  }

}
