import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AboutUsService } from './about-us.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
 
  selector: 'app-about-us',
  template: ` <div class="modal-header">
  <h4 class="modal-title"> Add Content</h4>  
   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form [formGroup]="aboutUsForm" (ngSubmit)="addContent()">
            <div class="form-group">
                <label for="name">Content</label>
                <textarea name="message" rows="10" cols="30" formControlName="content" [(ngModel)]="content" class="form-control"></textarea>
                <p *ngIf="aboutUsForm.controls.content.errors?.required && (aboutUsForm.controls.content.dirty || aboutUsForm.controls.content.touched)" class="lbl-err">Content is required.</p>
             </div>
         <div class="modal-footer">
            <div class="form-group">
           <button type="submit"  class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>&nbsp;&nbsp;
           <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
            </div>
         </div>
        </form>`,
  styleUrls: ['./about-us.component.css']
})

export class NgbdModalContent {
  usersList: Array<any>;
  aboutUsForm: FormGroup;
  @Input() id;
  @Input() content;
  loading = false;
  submitted = false;
  isAdd: boolean;
 constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private aboutUsService: AboutUsService,
    private toastService: ToastrService) { }

  ngOnInit() {
    this.buildAboutForm();
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
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
     this.aboutUsService.setAboutus(response.data);
    })
  }

  addContent(){
    var addObj = {
     "content": this.aboutUsForm.controls['content'].value,
    }
    if (this.isAdd) {
      console.log(addObj)
       this.aboutUsService.addAboutus(addObj).subscribe(
        data => {
          console.log(data)
          this.getAllAboutus();
          this.activeModal.dismiss();
          this.toastService.success(data['message']);
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
      console.log("gugugugu",data)
      this.aboutUsLists = data.aboutUsList.content
    })
  }

  ngOnInit() {
    this.buildAboutusForm();
    this.getAboutusList();
    this. getAllAboutus();

  }
  buildAboutusForm() {
    this.aboutUsForm = this._formBuilder.group({
      id:'',
      content: '',
    });
  }

  getAboutusList() {
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
     this.aboutUsList = response.data[0]
  
    });
  }
  getAllAboutus() {
    this.aboutUsService.getAllAboutus().subscribe((response: any) => {
        this.aboutUsService.setAboutus(response.data[0]);
    })
  }
  validateForm() {
    if (this.aboutUsForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  addAboutUs(id ) {
    console.log(id)
    console.log("edit obj",this.editorConfig.editable)
    if (this.editorConfig.editable)
      this.editorConfig.editable = false;
    else
      this.editorConfig.editable = true;

    var editObj = {
      "content": this.aboutUsForm.controls['content'].value,
    }
    console.log("....................",editObj)
    console.log("mmmmmmmmmm",this.id)
    this.aboutUsService.editAboutus(editObj,this.id).subscribe(
      data => {
        console.log("dara will be here",data)
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
          this.aboutUsService.setAboutus(response.data);
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
    // this.getAllAboutus();
  }
  add(content){
  
    if(!content){
      this.isAdd=true;
    }else{
      this.isAdd=false;
    }
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.content = content ? content.content : "";
    modalRef.componentInstance.isAdd = this.isAdd;
    console.log(content._id)
   }
}
