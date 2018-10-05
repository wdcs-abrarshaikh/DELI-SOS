import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AboutUsService } from './about-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsList: any;


  @Input() id;
  @Input() content;

  modalReference: any;
  isAdd: boolean = false;
  aboutUsLists: Array<any>;
  aboutUsForm: FormGroup;
  loading = false;
  submitted = false;
  editorConfig = {
    editable: false,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Type something. Test the Editor... ヽ(^。^)丿'
  };

  private _modalContent: any

  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private aboutUsService: AboutUsService) {
    this.aboutUsService.getAboutus().subscribe((data: any) => {
      this.aboutUsLists = data.aboutUsList.content
    })
  }

  ngOnInit() {
    this.buildAboutusForm();
    this.getAboutusList();
  }
  buildAboutusForm() {
    this.aboutUsForm = this._formBuilder.group({
      id: '',
      content: '',
    });
  }

  getAboutusList() {
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
      this.aboutUsLists = response.response.result.content;
      this.id = response.response.result._id;

    });
  }
  getAllAboutus() {
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
      this.aboutUsService.setAboutus(response.response.result);
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
    if (this.editorConfig.editable)
      this.editorConfig.editable = false;
    else
      this.editorConfig.editable = true;

    var editObj = {
      "content": this.aboutUsForm.controls['content'].value,
    }
    this.aboutUsService.editAboutus(editObj, this.id).subscribe(
      data => {
        if (!this.editorConfig.editable) {
          this.toastService.success(data['response'].responseMessage);
        }
        this.getAllAboutus();
      },
      error => {
        this.toastService.error(error['error'].message);
      });
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

  deleteAboutus(id) {
    this.aboutUsService.deleteAboutus(this.id).subscribe(
      data => {
        this.modalReference.close();
        this.toastService.success(data['response'].responseMessage);
        this.aboutUsService.getAllAboutus().subscribe((response: any) => {
          this.aboutUsService.setAboutus(response.response.result);
        })
      },
      error => {
        this.toastService.error(error.errors);
      });
  }

  delete(content) {
    this.modalReference = this.modalService.open(content);
  }

  cancelAboutUs() {
    this.editorConfig.editable = false;
    this.getAllAboutus();
  }
}
