import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PrivacyPolicyService } from './privacy-policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  usersList: Array<any>;
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
    // this.privacyPolicyService.getPrivacyPolicy().subscribe((data: any) => {
    //   this.privacyPolicyLists = data.privacyPolicyList.content;

    // })
  }

  ngOnInit() {
    this.buildPrivacyForm();

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
      console.log("get response",response)
      this.privacyPolicyService.setPrivacyPolicy(response.data);
    })
  }

  // getPrivacyPolicyList() {
  //   this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
  //     this.privacyPolicyLists = response.response.result.content;
  //     this.id = response.response.result._id;
  //   });
  // }


  addContent() {
    var addObj = {
      "content": this.privacyForm.controls['content'].value,
    }
    if (this.isAdd) {
      this.privacyPolicyService.addPrivacyPolicy(addObj).subscribe(
        data => {
          this.getAllPrivacyPolicy();
          this.activeModal.dismiss();
          this.toastService.success(data['message']);
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
      this.privacyPolicyLists = data.privacyPolicyList.content;
    })
  }

  ngOnInit() {
    this.buildprivacyPolicyForm();
    // this.getPrivacyPolicyList();
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
          this.toastService.success(data['response'].responseMessage);
        }
        // this.getAllPrivacyPolicy();
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

  // getAllPrivacyPolicy() {
  //   this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
  //     this.privacyPolicyService.setPrivacyPolicy(response.response.result);
  //   })
  // }

  // getPrivacyPolicyList() {
  //   this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
  //     this.privacyPolicyLists = response.response.result.content;
  //     this.id = response.response.result._id;
  //   });
  // }

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

  deletePrivacyPolicy(id) {
    this.privacyPolicyService.deletePrivacyPolicy(this.id).subscribe(
      data => {
        this.modalReference.close();
        this.toastService.success(data['response'].responseMessage);
        this.privacyPolicyService.getPrivacyPolicy().subscribe((response: any) => {
          this.privacyPolicyService.setPrivacyPolicy(response);
        })
      },
      error => {
        this.toastService.error(error.errors);
      });
  }
  delete(content) {
    this.modalReference = this.modalService.open(content);
  }

  cancelPrivacyPolicy() {
    this.editorConfig.editable = false;
    // this.getAllPrivacyPolicy();
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
