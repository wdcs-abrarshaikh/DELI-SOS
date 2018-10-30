import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { Message, Password } from 'primeng/primeng';
import { CuisinService } from './cuisin.service';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit ,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'




@Component({
  selector: 'cuisin-us',
  template: `<div class="modal-header">
  <h4 class="modal-title">{{ isAdd ? 'Add' : isView ? 'View' : 'Edit'}} User</h4>  
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
<form [formGroup]="cuisinForm" (ngSubmit)="addCuisins()">
            <div class="form-group">
                <label for="name">Cuisin Name</label>
                <input type="text" formControlName="name"  class="form-control" [(ngModel)]="name" [ngClass]="{'is-invalid':submitted && f.name.errors}"/>
               <div *ngIf="submitted && f.name.errors" class="lbl-err">
               <div *ngIf="f.name.errors.required">Name is required</div>
               </div>
             </div>

             <div class="form-group">
             <label>Cuisin Images:</label><br>
             <img  [src]="image" class="rounded mb-3" width="50%" height=auto/> &nbsp;&nbsp;<br>
             <label class="btn-bs-file btn btn-ls btn-info" style="margin-top:6px" text-align="center" *ngIf="!isView" >image
             <input type="file" formControlName="image" style="display: none" (change)="uploadImage($event)" [ngClass]="{'is-invalid':submitted && f.image.errors}"/> </label>     
             <div *ngIf="submitted && f.image.errors" class="lbl-err">
                <div *ngIf="f.image.errors.required">image is required</div>
               </div>
           
           </div>
           
        <div class="modal-footer">
            <div class="form-group" *ngIf="!isView">
           <button type="submit"  class="btn btn-outline-dark" >Save</button>&nbsp;&nbsp;
           <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
            </div>
         </div>
        </form>`,
  styleUrls: ['./cuisin.component.css'],
 
})


export class NgbdModalContent {

  cuisinsList: Array<any>;
  cuisinForm: FormGroup;
  
  @Input() id;
  @Input() name;
  @Input() image;
  loading = false;
  submitted = false;
  isAdd: boolean;
  isView: boolean;

  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private cuisinService: CuisinService,
    private toastService: ToastrService) { }

  ngOnInit() {
    this.buildCuisinForm();
  }

  get f() {
    return this.cuisinForm.controls;
  }

  buildCuisinForm() {

    if(this.isAdd){
      this.cuisinForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        image:['',[Validators.required]]
      });
    }else{
      this.cuisinForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        image:['']
      });
    }
 
  }

  async uploadImage(images) {
    let files = images.target.files;
    return new Promise((resolve, reject) => {
      this.cuisinService.uploadPic(files).subscribe((data) => {
       this.image= data.data[0]
     resolve(data.data)
      });
    })

  }


  addCuisins() {
    this.submitted=true;
    if(this.cuisinForm.invalid){
    return;
     }
    var addObj = {
      "name": this.cuisinForm.controls['name'].value,
     "image":this.image
     
    }
    if (this.isAdd) {
    this.cuisinService.addCuisin(addObj).subscribe(
        data => {
         this.getAllCuisin();
         if (data['code'] == 200 ) {
            swal({
              position: 'center',
              type: 'success',
              title: data['msg'],
              showConfirmButton: false,
              timer: 1500
            })
            this.activeModal.dismiss();
          } else {
            swal({
              type: 'error',
              text: data['msg']
            })
          }
        },
       error => {
        this.toastService.error(error['message']);
       });
    }
   else {
   
     this.cuisinService.editCuisin(addObj, this.id).subscribe(
        data => {
          this.getAllCuisin();
          this.activeModal.dismiss();
          if (data['code'] ==200 ) {
            swal({
              position: 'center',
              type: 'success',
              title:'updated successfully',
              showConfirmButton: false,
              timer: 1500
            })
            this.activeModal.dismiss();
          } else {
            swal({
              type: 'error',
              text: data['message']
            })
          }
        },
        error => {
          this.toastService.error(error['message']);
        });
    }
  }

  getAllCuisin() {
    this.cuisinService.getAllCuisins().subscribe((response: any) => {
      this.cuisinService.setCuisins(response);
    })
  }

 


}
@Component({
  selector: 'app-cuisin',
  templateUrl: './cuisin.component.html',
  styleUrls: ['./cuisin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CuisinComponent implements OnInit {
  modalReference: any;
  isAdd: boolean = false;
  cuisinsList: Array<any>;
  cuisinForm: FormGroup;
  loading = false;
  image:Array<any>;
  submitted = false;
  isView: boolean = false;
  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private cuisinService: CuisinService,
    private _script: ScriptLoaderService) {

    this.cuisinService.getCuisins().subscribe((data: any) => {
       this.cuisinsList = data.cuisinsList.data
    });
  }
  ngAfterViewInit() {
    this._script.loadScripts('app-cuisin',
      ['assets/vendors/custom/datatables/datatables.bundle.js',
        'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
  }

  ngOnInit() {
    this.getCuisinList();
  }
  open(content, type) {
    if (!content) {
      this.isAdd = true
    } else {
      if (type == 'view') {
        this.isView = true
        this.isAdd = false
      } else {
        this.isAdd = false
        this.isView = false
      }
    }
  
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.image=content ? content.image:"";
    modalRef.componentInstance.isAdd = this.isAdd;
    modalRef.componentInstance.isView = this.isView;
  }

  // All User Display Method
  getCuisinList() {
    this.cuisinService.getAllCuisins().subscribe((response: any) => {
    this.cuisinsList = response.data;
    });
  }

  delete(id) {
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
       this.cuisinService.deleteCuisin(id).subscribe(
          data => {
         this.getCuisinList();
          if(data['code']==200){
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }else{
            swal({
              type: 'error',
              text: data['message']
            })
          }},error=>{
            swal({
              type: 'error',
              text: error['message']
            })
          });
    
      }
    })
  
  }

 
  validateForm() {
    if (this.cuisinForm.valid) {
      return false;
    } else {
      return true;
    }
  }

}
