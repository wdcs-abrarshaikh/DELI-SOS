import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AboutUsService } from './about-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AddAboutUsComponent } from './add-about-us/add-about-us.component'


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})


export class AboutUsComponent implements OnInit {
  @Input() id;
  @Input() content;
  modalReference: any;
  isAdd: boolean = false;
  aboutUsList: Array<any>;
  initialaboutusList: Array<any>;
  aboutUsForm: FormGroup;
  loading = false;
  submitted = false;
  editorConfig = {
    editable: false,
    spellcheck: true,
    height: '12rem',
    minHeight: '10rem',
    placeholder: 'Type something. Test the Editor... ヽ(^。^)丿'
  };

  private _modalContent: any

  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private aboutUsService: AboutUsService,
    private spinnerService: Ng4LoadingSpinnerService) {
      this.spinnerService.show();
    this.aboutUsService.getAboutus().subscribe((data: any) => {
      this.spinnerService.hide();
      if (data.aboutUsList == null) {
        this.aboutUsList = data.aboutUsList
        this.initialaboutusList = this.aboutUsList;
      } else {
        this.aboutUsList = data.aboutUsList.content
        this.id = data.aboutUsList._id;
        this.initialaboutusList = this.aboutUsList;
      }

    })
  }

  ngOnInit() {
    this.buildAboutusForm();
    this.getAboutusList();
    this.getAllAboutus();

  }
  buildAboutusForm() {
    this.aboutUsForm = this._formBuilder.group({
      id: '',
      content: ['',Validators.required],
    });
  }

  getAboutusList() {
    this.spinnerService.show();
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
      this.spinnerService.hide();
      if (response.data == null) {
        this.initialaboutusList = response.data;
      } else {
        this.aboutUsList = response.data.content
        this.initialaboutusList = this.aboutUsList;
        this.id = response.data._id
      }
    });
  }
  getAllAboutus() {
    this.spinnerService.show();
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
     this.aboutUsService.setAboutus(response.data);
      this.spinnerService.hide();
    })
  }
  validateForm() {
    if (this.aboutUsForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  addAboutUs() {
    if (this.editorConfig.editable) {
      this.editorConfig.editable = false;
      var editObj = {
        "content": this.aboutUsForm.controls['content'].value,
      }
      this.aboutUsService.editAboutus(editObj, this.id).subscribe(
        data => {
          this.getAllAboutus();
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

  get f() {
    return this.aboutUsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.aboutUsForm.invalid) {
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
        this.aboutUsService.deleteAboutus(this.id).subscribe(
          data => {
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
            this.getAboutusList();
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


  cancelAboutUs() {
    this.editorConfig.editable = false;
    this.getAllAboutus();
  }
  add(content) {
    if (!content) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
    const modalRef = this.modalService.open(AddAboutUsComponent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.content = content ? content.content : "";
    modalRef.componentInstance.isAdd = this.isAdd;
  }
}
