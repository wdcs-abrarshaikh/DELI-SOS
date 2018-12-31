import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PrivacyPolicyService } from './privacy-policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'
import { AddPrivacyPolicyComponent } from './add-privacy-policy/add-privacy-policy.component';



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
  initialprivacyPolicyLists: Array<any>
  privacyPolicyLists: Array<any>;
  privacyPolicyForm: FormGroup;
  loading = false;
  submitted = false;
  editorConfig = {
    editable: false,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    templateOptions: {
      required: true,
      minLength: 5
    },
  };

  constructor(private modalService: NgbModal,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private privacyPolicyService: PrivacyPolicyService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.privacyPolicyService.getPrivacyPolicy().subscribe((data: any) => {
      if (data.privacyPolicyLists !== null) {
        this.privacyPolicyLists = data.privacyPolicyLists.content;
        this.initialprivacyPolicyLists = this.privacyPolicyLists;
        this.id = data.privacyPolicyLists._id;
      } else {
        this.privacyPolicyLists = data.privacyPolicyLists;
        this.initialprivacyPolicyLists = this.privacyPolicyLists;
      }
    })
  }

  ngOnInit() {
    this.buildprivacyPolicyForm();
    this.getPrivacyPolicyList();

  }

  buildprivacyPolicyForm() {
    this.privacyPolicyForm = this._formBuilder.group({
      id: '',
      content: ['',Validators.required]
    });
  }

  addPrivacyPolicy() {
    if (this.editorConfig.editable) {
      this.editorConfig.editable = false;
      var editObj = {
        "content": this.privacyPolicyForm.controls['content'].value,
      }
      this.privacyPolicyService.editPrivacyPolicy(editObj, this.id).subscribe(
        data => {
          this.getPrivacyPolicyList();
          if (!this.editorConfig.editable) {
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
    else {
      this.editorConfig.editable = true;
    }
  }

  validateForm() {
    if (this.privacyPolicyForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  getAllPrivacyPolicy() {
    this.spinnerService.show();
    this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
      this.spinnerService.hide();
      this.privacyPolicyService.setPrivacyPolicy(response.data);
    })
  }

  getPrivacyPolicyList() {
    this.spinnerService.show();
    this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
      this.spinnerService.hide();
      if (response.data !== null) {
        this.privacyPolicyLists = response.data.content;
        this.initialprivacyPolicyLists = this.privacyPolicyLists;
        this.id = response.data._id;
      } else {
        this.initialprivacyPolicyLists = response.data;
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
            this.getPrivacyPolicyList();
            if (data['code'] == 200) {
              swal(
                'Deleted!',
                data['message'],
                'success'
              )
            } else {
              swal(
                'error!',
                data['message'],
                'success',

              )
            }
          },
          error => {
            swal(
              'error!',
              error['message'],
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

  open(content) {

    if (!content) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
    const modalRef = this.modalService.open(AddPrivacyPolicyComponent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.content = content ? content.content : "";
    modalRef.componentInstance.isAdd = this.isAdd;
  }
}
