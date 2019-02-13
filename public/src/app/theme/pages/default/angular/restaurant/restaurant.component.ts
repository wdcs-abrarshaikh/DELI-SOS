import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';
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

function _window(): any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RestaurantComponent implements OnInit, AfterViewInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

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
    private spinnerService: Ng4LoadingSpinnerService) {
    this.restaurantService.getRestaurant().subscribe((data: any) => {
      this.RestaurantList = data.RestautantList.data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
        this.spinnerService.hide();
      })
    });
  }

  ngAfterViewInit() {
    let scripts = [];
    if (!_window().isScriptLoadedUsermgmt) {
      scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
    }
    let that = this;
    this._script.loadScripts('app-restaurant',
      scripts).then(function () {
        _window().isScriptLoadedUsermgmt = true;
        that._script.loadScripts('app-restaurant', ['assets/demo/default/custom/crud/datatables/basic/paginations.js']);
      });

  }


  ngOnInit() {
    _window().my = _window().my || {};
    _window().my.usermgmt = _window().my.usermgmt || {};
    if (typeof (_window().isScriptLoadedUsermgmt) == "undefined") {
      _window().isScriptLoadedUsermgmt = false;
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      stateSave: true
    };
    this.getRestaurantList();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getRestaurantList() {
    this.spinnerService.show();
    this.restaurantService.getAllRestaurant().subscribe((response: any) => {
      this.RestaurantList = response.data;
      this.dtTrigger.next();
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


  async convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return hours + ':' + minutes;
  }


  async open(content, type) {

    if (!content) {
      this.isAdd = true
    } else {
      this.isAdd = false
    }
    const modalRef = this.modalService.open(AddEditRestaurantComponent);
    let arr_value: any = [false, false, false, false];
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.description = content ? content.description : "";
    modalRef.componentInstance.latitude = content ? content.location.coordinates[1] : "";
    modalRef.componentInstance.longitude = content ? content.location.coordinates[0] : "";
    modalRef.componentInstance.openTime = content ? await this.convertTime12to24(content.openTime) : "";
    modalRef.componentInstance.closeTime = content ? await this.convertTime12to24(content.closeTime) : "";
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
  viewRestaurant(restaurant) {
    this.modalReference = this.modalService.open(restaurant)
  }

  delete(id) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#49a558',
      cancelButtonColor: '#a73a08',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.spinnerService.show();
        this.restaurantService.deleteRestaurant(id).subscribe(
          data => {
            if (data['code'] == 200) {
              swal(
                'Deleted!',
                data['message'],
                'success'
              )
              this.restaurantService.getAllRestaurant().subscribe((response: any) => {
                this.RestaurantList = response.data;
                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.destroy();
                  this.dtTrigger.next();
                  this.spinnerService.hide();
                })
              });
            } else {
              swal({
                type: 'error',
                text: data['message']
              })
            }
          }, error => {
            swal({
              type: 'error',
              text: error['message']
            })
          });
      }
    })

  }


}

