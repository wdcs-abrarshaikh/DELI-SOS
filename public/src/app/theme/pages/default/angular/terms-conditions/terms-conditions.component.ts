import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TermsConditionsService } from './terms-conditions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  termsConditionList: any;
  html: any;
  text: any;
  @Input() id;
  @Input() content;

  modalReference: any;
  isAdd: boolean = false;
  termsConditionLists: Array<any>;
  termConditionForm: FormGroup;
  loading = false;
  submitted = false;
  editorConfig = {
    editable: false,
  };


  constructor(private modalService: NgbModal,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private termConditionService: TermsConditionsService) {

    this.termConditionService.getTermCondition().subscribe((data: any) => {
      this.termsConditionLists = data.termConditionList.content
    })
  }

  ngOnInit() {
    this.buildTermConditionForm();
    this.getTermsConditionList();
  }

  buildTermConditionForm() {
    this.termConditionForm = this._formBuilder.group({
      id: '',
      content: '',
    });
  }
  addTermCondition() {
    if (this.editorConfig.editable)
      this.editorConfig.editable = false;
    else
      this.editorConfig.editable = true;

    var editObj = {
      "content": this.termConditionForm.controls['content'].value,
    }
    this.termConditionService.editTermCondition(editObj, this.id).subscribe(
      data => {
        if (!this.editorConfig.editable) {
          this.toastService.success(data['response'].responseMessage);
        }
        this.getAllTermsConditions();
      },
      error => {
        this.toastService.error(error['error'].message);
      });

  }
  cancelTermCondition() {
    this.editorConfig.editable = false;
    this.getAllTermsConditions();
  }
  getTermsConditionList() {
    this.termConditionService.getAllTermCondition().subscribe((response: any) => {
      this.termsConditionLists = response.response.result.content;
      this.id = response.response.result._id;

    });
  }

  get f() {
    return this.termConditionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.termConditionForm.invalid) {
      return;
    }
    this.loading = true;
  }

  deleteTermsConditions(id) {
    this.termConditionService.deleteTermCondition(this.id).subscribe(
      data => {
        this.modalReference.close();
        this.toastService.success(data['response'].responseMessage);
        this.termConditionService.getAllTermCondition().subscribe((response: any) => {
          this.termConditionService.setTermCondition(response.response.result);
        })
      },
      error => {
        this.toastService.error(error.errors);
      });
  }
  delete(content) {
    this.modalReference = this.modalService.open(content);
  }

  getAllTermsConditions() {
    this.termConditionService.getAllTermCondition().subscribe((response: any) => {
      this.termConditionService.setTermCondition(response.response.result);
    })
  }
  validateForm() {
    if (this.termConditionForm.valid) {
      return false;
    } else {
      return true;
    }
  }

}
