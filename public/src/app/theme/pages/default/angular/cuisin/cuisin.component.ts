import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { Message, Password } from 'primeng/primeng';
import { CuisinService } from './cuisin.service';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit ,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditcuisinComponent } from './add-editcuisin/add-editcuisin.component';
import swal from 'sweetalert2'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


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
    private _script: ScriptLoaderService,
    private spinnerService:Ng4LoadingSpinnerService) {
      this.spinnerService.show();
      this.cuisinService.getCuisins().subscribe((data: any) => {
       this.cuisinsList = data.cuisinsList.data
       this.spinnerService.hide();
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
  open(content) {
   if (!content) {
      this.isAdd = true
    } else {
      this.isAdd = false
    
      }
   const modalRef = this.modalService.open(AddEditcuisinComponent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.image=content ? content.image:"";
    modalRef.componentInstance.isAdd = this.isAdd;
    // modalRef.componentInstance.isView = this.isView;
  }

  // All User Display Method
  getCuisinList() {
    this.spinnerService.show();
    this.cuisinService.getAllCuisins().subscribe((response: any) => {
    this.cuisinsList = response.data;
    this.spinnerService.hide();
    });
  }

  viewCuisines(cuisin){
   this.modalReference = this.modalService.open(cuisin);
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
