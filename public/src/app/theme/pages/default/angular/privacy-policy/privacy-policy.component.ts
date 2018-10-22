import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PrivacyPolicyService } from './privacy-policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



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
}
