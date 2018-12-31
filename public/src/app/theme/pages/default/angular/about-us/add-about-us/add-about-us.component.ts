import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AboutUsService } from '../about-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-add-about-us',
  templateUrl: './add-about-us.component.html',
  styleUrls: ['./add-about-us.component.css']
})
export class AddAboutUsComponent implements OnInit {

  usersList: Array<any>;
  aboutUsForm: FormGroup;
  @Input() id;
  @Input() content;
  loading = false;
  submitted = false;
  isAdd: boolean;
  editorConfig = {
    editable: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '30rem',
    templateOptions: {
      required: true,
      minLength: 5
    },
  };
  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private aboutUsService: AboutUsService,
    private toastService: ToastrService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.buildAboutForm();
    this.getAllAboutus();
  }

  get f() {
    return this.aboutUsForm.controls;
  }

  buildAboutForm() {
    this.aboutUsForm = this._formBuilder.group({
      content: ['', [Validators.required]],
    });
  }

  getAllAboutus() {
    this.spinnerService.show();
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
      this.spinnerService.hide();
      this.aboutUsService.setAboutus(response.data);
    })
  }

  addContent() {
    var addObj = {
      "content": this.aboutUsForm.controls['content'].value,
    }
    if (this.isAdd) {
      this.aboutUsService.addAboutus(addObj).subscribe(
        data => {

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
          this.getAllAboutus();
        },
        error => {
          this.toastService.error(error['message']);
        });
    }
  }

  validateForm() {
    if (this.aboutUsForm.valid) {
      return false;
    } else {
      return true;
    }
  }


}
