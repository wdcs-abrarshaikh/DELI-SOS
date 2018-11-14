import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PrivacyPolicyService } from '../privacy-policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'

@Component({
  selector: 'app-add-privacy-policy',
  templateUrl: './add-privacy-policy.component.html',
  styleUrls: ['./add-privacy-policy.component.css']
})
export class AddPrivacyPolicyComponent implements OnInit {

  privacyPolicyLists: Array<any>;
  privacyForm: FormGroup;
  @Input() id;
  @Input() content;
  loading = false;
  submitted = false;
  isAdd: boolean;
  editorConfig = {
    editable: true,
    spellcheck: true,
    height: '5rem',
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
    public activeModal: NgbActiveModal, ) {

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
          if (data['code'] == 201) {
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
          this.activeModal.dismiss();
          this.getAllPrivacyPolicy();
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
