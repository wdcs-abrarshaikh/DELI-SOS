import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import swal from 'sweetalert2'
import { AddEditRestaurantComponent } from './add-edit-restaurant/add-edit-restaurant.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RestaurantComponent implements OnInit, AfterViewInit {

  modalReference: any;
  isAdd: boolean = false;
  RestaurantList: Array<any>;
  isView: boolean = false;
  submitted = false;
  i;

  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private _script: ScriptLoaderService,
    private spinnerService:Ng4LoadingSpinnerService) {

    this.restaurantService.getRestaurant().subscribe((data: any) => {
      this.RestaurantList = data.RestautantList.data
    });
  }
  
  ngAfterViewInit() {
    this._script.loadScripts('app-restaurant',
      ['assets/vendors/custom/datatables/datatables.bundle.js',
        'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
  }


  ngOnInit() {
    this.getRestaurantList();
  }
  getRestaurantList() {
    this.spinnerService.show();
    this.restaurantService.getAllRestaurant().subscribe((response: any) => {
      this.RestaurantList = response.data;
      this.spinnerService.hide();
    });
  }


  mealOffers_arr: Array<any> = ["BREAKFAST", "LUNCH", "DINNER", "ALL"]
  async checkValue(arr) {
    var array_val: Array<any> = [false, false, false, false];
    let res = await this.mealOffers_arr.map(async (response, idx) => {
      arr.map(async (arr_res, idnx) => {
        if (arr_res == response) {
          if (idx == 3) {
            array_val = [true, true, true, true]
          }
          array_val[idx] = true;
        }
      })
    });
    return array_val;
  }
  async open(content, type) {

    if (!content) {
      this.isAdd = true
    } else {
       this.isAdd = false
   }
   console.log(content.menu)
    const modalRef = this.modalService.open(AddEditRestaurantComponent);
    let arr_value: any = [false, false, false, false];
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.description = content ? content.description : "";
    modalRef.componentInstance.latitude = content ? content.location.coordinates[1] : "";
    modalRef.componentInstance.longitude = content ? content.location.coordinates[0] : "";
    modalRef.componentInstance.openTime = content ? content.openTime : "";
    modalRef.componentInstance.closeTime = content ? content.closeTime : "";
    modalRef.componentInstance.contactNumber = content ? content.contactNumber : "";
    modalRef.componentInstance.website = content ? content.website : "";
    modalRef.componentInstance.perPersonCost = content ? content.perPersonCost : "";
    modalRef.componentInstance.menuImages = content ? content.menu : "";
    modalRef.componentInstance.restaurantImages = content ? content.photos : "";
    modalRef.componentInstance.cuisinExist = content ? content.cuisinOffered : "";
    modalRef.componentInstance.isAdd = this.isAdd;
    modalRef.componentInstance.isView = this.isView;
    modalRef.componentInstance.mealOffers = (content) ? await this.checkValue(content.mealOffers) : arr_value;

  }
  viewRestaurant(restaurant){
    this.modalReference=this.modalService.open(restaurant)
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
        this.restaurantService.deleteRestaurant(id).subscribe(
          data => {
            this.getRestaurantList();
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


}

