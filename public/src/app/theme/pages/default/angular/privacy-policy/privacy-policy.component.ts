import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PrivacyPolicyService } from './privacy-policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'

@Component({

  selector: 'app-privacy-policy',
  template: ` <div class="modal-header">
  <h4 class="modal-title"> Add Content</h4>  
   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form [formGroup]="privacyForm" (ngSubmit)="addContent()">
            <div class="form-group">
                <label for="name">Content</label>
                <textarea name="message" rows="10" cols="30" formControlName="content" [(ngModel)]="content" class="form-control"></textarea>
                <p *ngIf="privacyForm.controls.content.errors?.required && (privacyForm.controls.content.dirty || privacyForm.controls.content.touched)" class="lbl-err">Content is required.</p>
             </div>
         <div class="modal-footer">
            <div class="form-group">
           <button type="submit"  class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>&nbsp;&nbsp;
           <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
            </div>
         </div>
        </form>`,
  styleUrls: ['./privacy-policy.component.css']
})

export class NgbdModalContent {
  privacyPolicyLists: Array<any>;
  privacyForm: FormGroup;
  @Input() id;
  @Input() content;
  loading = false;
  submitted = false;
  isAdd: boolean;
  constructor(private modalService: NgbModal,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private privacyPolicyService: PrivacyPolicyService,
    public activeModal: NgbActiveModal, ) {

  }

  ngOnInit() {
    this.buildPrivacyForm();
    this.getAllPrivacyPolicy();
  }

  get f() {
    return this.privacyForm.controls;
  }
  buildPrivacyForm() {
    this.privacyForm = this._formBuilder.group({
      content: ['', [Validators.required]]
    });
  }

  getAllPrivacyPolicy() {
    this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
      this.privacyPolicyService.setPrivacyPolicy(response.data);
    })
  }


  addContent() {
    var addObj = {
      "content": this.privacyForm.controls['content'].value,
    }
    if (this.isAdd) {
      this.privacyPolicyService.addPrivacyPolicy(addObj).subscribe(
        data => {
          this.getAllPrivacyPolicy();
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
            this.activeModal.dismiss();
          }
        },
        error => {
          this.toastService.error(error['message']);
        });
    }
  }

  validateForm() {
    if (this.privacyForm.valid) {
      return false;
    } else {
      return true;
    }
  }


}

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicyList: any;

  @Input() id;
  @Input() content;

  modalReference: any;
  isAdd: boolean = false;
  privacyPolicyLists: Array<any>;
  privacyPolicyForm: FormGroup;
  loading = false;
  submitted = false;
  editorConfig = {
    editable: false,
  };

  constructor(private modalService: NgbModal,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private privacyPolicyService: PrivacyPolicyService) {
    this.privacyPolicyService.getPrivacyPolicy().subscribe((data: any) => {
     if (data.privacyPolicyLists == null) {
         this.privacyPolicyLists = data.privacyPolicyLists
         return;
      } else {
         this.privacyPolicyLists = data.privacyPolicyLists.content;
      }

    })
  }

  ngOnInit() {
    this.buildprivacyPolicyForm();
    this.getPrivacyPolicyList();
    this.getAllPrivacyPolicy()
  }

  buildprivacyPolicyForm() {
    this.privacyPolicyForm = this._formBuilder.group({
      id: '',
      content: '',
    });
  }

  addPrivacyPolicy() {
    if (this.editorConfig.editable)
      this.editorConfig.editable = false;
    else
      this.editorConfig.editable = true;
    var editObj = {
      "content": this.privacyPolicyForm.controls['content'].value,
    }
  
    this.privacyPolicyService.editPrivacyPolicy(editObj, this.id).subscribe(
      data => {
        if (!this.editorConfig.editable) {
          this.getPrivacyPolicyList();
          if (data['code'] == 200) {
            swal({
              position: 'center',
              type: 'success',
              title: data['message'],
              showConfirmButton: false,
              timer: 1500
            })

          } else {
            swal({
              type: 'error',
              text: data['message']
            })
          }
        }

      },
      error => {
        this.toastService.error(error['error'].message);
      });
    }


  validateForm() {
    if (this.privacyPolicyForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  getAllPrivacyPolicy() {
    this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
      this.privacyPolicyService.setPrivacyPolicy(response.data);
    })
  }

  getPrivacyPolicyList() {
    this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
      if (response.data == null) {
        this.privacyPolicyLists = response.data;
      } else {
        this.privacyPolicyLists = response.data.content;
        this.id = response.data._id;
      }
    })
  }

  get f() {
    return this.privacyPolicyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.privacyPolicyForm.invalid) {
      return;
    }
    this.loading = true;
  }

  delete() {
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
        this.privacyPolicyService.deletePrivacyPolicy(this.id).subscribe(
          data => {
               this.getAllPrivacyPolicy();
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          },
          error => {
            swal(
              'error!',
              'Your file has been deleted.',
              'success'
            )
          });

      }
    })

  }

  cancelPrivacyPolicy() {
    this.editorConfig.editable = false;
    this.getAllPrivacyPolicy();
  }

  add(content) {
    if (!content) {
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.content = content ? content.content : "";
    modalRef.componentInstance.isAdd = this.isAdd;
  }
}
