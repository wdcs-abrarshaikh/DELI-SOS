import { Response } from '@angular/http';
import { EmailService } from './email.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-templates',
  template: `
  <div class="modal-header">
  <h4 class="modal-title">{{ isAdd ? 'Add' :'Edit'}} Email Templates</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form  name="emailForm" [formGroup]="emailForm" (ngSubmit)="addEmails()" >


<label>Content</label>
<div class="form-group"><app-ngx-editor [placeholder]="'Enter text here...'" [spellcheck]="true" formControlName="content" [(ngModel)]="content"></app-ngx-editor>

</div>


<div class="modal-footer">
<button type="submit" class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>
<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>

</div>
</form>
`,
  styleUrls: ['./email-templates.component.css']
})

export class NgbdModalContent {
  availableEmailTemplates: any[] = [];
  emailList: Array<any>;
  @Output() emailsList = new EventEmitter<any>();
  emailForm: FormGroup;
  @Input() name;
  @Input() content;
  @Input() id;
  loading = false;
  submitted = false;


  isAdd: boolean;

  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private emailService: EmailService,
    private toastService: ToastrService) { }
  ngOnInit() {
    this.buildEmailForm();
  }

  get f() {
    return this.emailForm.controls;
  }
  buildEmailForm() {
    this.emailForm = this._formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      content: '',
    });
  }
  getAvailableEmailTemplates(){

    this.emailService.getAvailableEmailTemplate().subscribe((data)=>{
      this.availableEmailTemplates=data['response'];
    },
    (err) => {
      console.log(err);
    });
    

  }
  addEmails() {

    if (this.isAdd) {
      var addObj = {
        "id": this.emailForm.controls['id'].value,
        "name": this.emailForm.controls['name'].value,
        "content": this.emailForm.controls['content'].value,

      }
      this.getAvailableEmailTemplates();

      this.emailService.addEmail(addObj).subscribe(
        data => {
          this.getAllEmail();
          this.getAvailableEmailTemplates();
          this.activeModal.dismiss();
          this.toastService.success(data['response'].responseMessage);
        },
        error => {
          console.log('error' + error);
          this.toastService.error(error['response'].responseMessage);
        });
    } else {
      var editObj = {
        "id": this.emailForm.controls['id'].value,
        "name": this.emailForm.controls['name'].value,
        "content": this.emailForm.controls['content'].value,

      }
      console.log('id', this.id)
      this.emailService.editEmails(editObj, this.id).subscribe(
        data => {
          this.getAvailableEmailTemplates();
          this.getAllEmail();
          this.activeModal.dismiss();
          this.toastService.success(data['response'].responseMessage);
        },
        error => {
          console.log('error' + error)
          this.toastService.error(error['response'].responseMessage);
        });
    }
  }
  // <label>Name</label>
  // <div class="form-group"> <input class="form-control m-input" type="text" formControlName="name"  [(ngModel)]="name"> 
  // <span *ngIf="emailForm.controls.name.errors?.required" class="lbl-err">Name is required.</span>

  // </div><br>

  getAllEmail() {
    this.emailService.getAllEmails().subscribe((response: any) => {
      this.emailService.setEmails(response);
    })
  }
  validateForm() {
    if (this.emailForm.valid) {
      return true;
    } else {
      return false;
    }
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }

    this.loading = true;
  }





}
@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.css']
})
export class EmailTemplatesComponent implements OnInit {
  emailsDetail: any;
  emailsList: any;
  @Input() name;
  @Input() content;
  @Input() id;

  modalReference: any;
  isAdd: boolean = false;
  isView:boolean=false;
  isEdit:boolean=false;
  emailList: Array<any>;
  emailForm: FormGroup;
  loading = false;
  submitted = false;
  editorConfig = {
    editable: false,
    spellcheck: true,
    height: '30rem',
    minHeight: '10rem',
    placeholder: 'Type something. Test the Editor... ヽ(^。^)丿'
  };
  private _modalContent: any;
  constructor(
    private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private emailService: EmailService) {
    this.emailService.getEmails().subscribe((data: any) => {
      console.log('dataaaaa', data)
      this.emailsList = data.emailList.response.LIST
    })
  }

  ngOnInit() {
    this.buildEmailForm();
    this.getEmailTemplatesList();
  
  }
  buildEmailForm() {
    this.emailForm = this._formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      content: '',



    });

  }

  getEmailTemplatesList() {
    this.emailService.getAllEmails().subscribe((response: any) => {
      this.emailsList = response.response.LIST;
      console.log("Email List detail", this.emailsList)

    });
  }
  get f() {
    return this.emailForm.controls;
  }
  onSubmit() {
    this.submitted = true;


    if (this.emailForm.invalid) {
      return;
    }

    this.loading = true;
  }

  open(contents) {

    console.log('content', contents)
    if (!contents) {
      this.isAdd = true
    } else {
      this.isEdit = false
    }
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = contents ? contents._id : "";
    modalRef.componentInstance.name = contents ? contents.name : "";
    modalRef.componentInstance.content = contents ? contents.content : "";
    modalRef.componentInstance.isAdd = this.isAdd;
  }
  view(emailContents) {
    if (!emailContents) {
      this.isView = true
    } else {
      return false
    }
    const modalRef = this.modalService.open(NgbdModalContent);
    // modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.id = emailContents ? emailContents._id : "";
    modalRef.componentInstance.name = emailContents ? emailContents.name : "";
    modalRef.componentInstance.content = emailContents ? emailContents.content : "";
    modalRef.componentInstance.isAdd = this.isAdd;
  }
  deleteEmail(id) {

    this.emailService.deleteEmails(id).subscribe(
      data => {
        this.modalReference.close();
        console.log('datas..', data);
        this.toastService.success(data['response'].responseMessage);
        // this.toastService.success(data);
        this.emailService.getAllEmails().subscribe((response: any) => {
          this.emailService.setEmails(response);
         
        })
      },
      error => {
        console.log('error' + error)
        this.toastService.error(error.errors);
      });
  }
  delete(content) {
    this.modalReference = this.modalService.open(content);
  }
  viewContent(content){
    this.modalReference=this.modalService.open(content);
  }
  validateForm() {
    if (this.emailForm.valid) {
      return true;
    } else {
      return false;
    }
  }


}
