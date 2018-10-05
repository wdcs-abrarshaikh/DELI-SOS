import { BannerService } from './banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-banner',
  template: `
  <div class="modal-header">
  <h4 class="modal-title">{{ isAdd ? 'Add' : 'Edit'}} Banner</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form  name="bannerForm" [formGroup]="bannerForm"  (ngSubmit)="addBanners()" >
<label>Name</label>
<div class="form-group"> <input class="form-control m-input" type="text" formControlName="name"  [(ngModel)]="name" [ngClass]="{ 'is-invalid': submitted && f.name.errors }"> 
<span *ngIf="bannerForm.controls.name.errors?.required" class="lbl-err">Name is required.</span>

</div><br>
<label>Image</label>
<div class="form-group"> <input class="form-control m-input" type="file" (change)="handleInputChange($event)" formControlName="image" [(ngModel)]="image" [ngClass]="{ 'is-invalid': submitted && f.image.errors }"> 
<span *ngIf="bannerForm.controls.image.errors?.required" class="lbl-err">Image is required.</span>

</div>
<div class="modal-footer">
<button type="submit" class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>
<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>

</div>
</form>
`,
  styleUrls: ['./banner.component.css']
})

export class NgbdModalContent {
  bannersList: Array<any>;
  bannerForm: FormGroup;
  @Input() id;
  @Input() name;
  @Input() image;
  loading = false;
  submitted = false;
 
  banner_id: number;
  isAdd: boolean;
  mypic: any;
  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private bannerService: BannerService,
    private toastService: ToastrService) { }
  ngOnInit() {
    this.buildBannerForm();
    
  }
  
  get f() {
    return this.bannerForm.controls;
  }
  buildBannerForm() {
    this.bannerForm = this._formBuilder.group({
     
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],


    });
  }
  addBanners() {
    if (this.isAdd) {
      var addObj = {
       
        "name": this.bannerForm.controls['name'].value,
        "image": this.bannersList,
        
      }
      this.bannerService.addBanner(addObj).subscribe(
        data => {
          this.getAllBanner();
          this.activeModal.dismiss();
          this.toastService.success(data['response'].responseMessage);
        },
        error => {
          console.log('error' + error);
        });
    } else {
      var editObj = {
        "name": this.bannerForm.controls['name'].value,
        "image": this.bannersList,
        
      }
      this.bannerService.editBanner(editObj,this.id).subscribe(
        data => {
          this.getAllBanner();
          this.activeModal.dismiss();
          this.toastService.success(data['response'].responseMessage);       
        },
        error => {
          
          this.toastService.error(error['response']);
        });
    }
  }
  getAllBanner() {
    this.bannerService.getAllBanner().subscribe((response: any) => {
      this.bannerService.setBanners(response);
    })
  }
  validateForm() {
    if (this.bannerForm.valid) {
      return false;
    } else {
      return true;
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.bannerForm.invalid) {
      return;
    }
    this.loading = true;
  }

  uploadBannerImage(image) {
    var data ={
      "file":image
    }
    this.bannerService.uploadPic(data).subscribe((response: any) => {
      this.bannersList = response.response.url;
    
    },error=>{
      console.log('error',error)
    });

  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    
    let reader = e.target;
    this.mypic = reader.result;
    var res = this.mypic.split(',')
    this.uploadBannerImage(res[1]);
  }
}


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  bannersDetail: any;

  
  @Input() id;
  @Input() name;
  @Input() image;
 
  modalReference: any;
  isAdd: boolean = false;
  bannersList: Array<any>;
  bannerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
  private bannerService:BannerService) {
    
    this.bannerService.getBanners().subscribe((data:any)=>{
      this.bannersList = data.bannersList.response.LIST
    });
   }

  open(content) {
    
    if (!content) {
      this.isAdd = true
    } else {
      this.isAdd = false
    }
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.image = content ? content.image : "";
    modalRef.componentInstance.isAdd = this.isAdd;
  }


  ngOnInit() {

    this.buildBannerForm();
    this.getBannerList();

  }
  getBannerList(){
    this.bannerService.getAllBanner().subscribe((response: any) => {
      this.bannersList = response.response.LIST;
    
    });
  }

  buildBannerForm() {
    this.bannerForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });

  }
  uploadBannerImage(image:any) {
    var data ={
      file:image
    }
    this.bannerService.uploadPic(data).subscribe((response: any) => {
    
    });
  }
  
  get f() {
    return this.bannerForm.controls;
  }
  onSubmit() {
     this.submitted = true;
    if (this.bannerForm.invalid) {
      return;
    }

    this.loading = true;
  }
  deleteBanner(banner) {
   
    this.bannerService.deleteBanner(banner).subscribe(
      data => {
        this.modalReference.close();
     

        this.toastService.success(data['response'].responseMessage);
        this.bannerService.getAllBanner().subscribe((response: any) => {
          this.bannerService.setBanners(response);
          // this.bannersList = response.LIST;
        })
      },
      error => {
      
        this.toastService.error(error.errors);
      });
  }

  resurrectBanner(banner) {
 
  this.bannerService.resurrectBanner(banner).subscribe(
    data => {
     
      var matchData =_.find(this.bannersList, function(o) { return o._id == banner; });
      matchData.isActive = data.status
      this.bannersList['isActive']=matchData.isActive;
      this.toastService.success('Activated');
      // this.bannerService.getAllBanner().subscribe((response: any) => {
      //   this.bannerService.setBanners(response);
        
      // })
    },
    error => {
      console.log('error' + error)
      this.toastService.error(error.errors);
    });
}
  delete(content) {
    this.modalReference = this.modalService.open(content);
  }
}














