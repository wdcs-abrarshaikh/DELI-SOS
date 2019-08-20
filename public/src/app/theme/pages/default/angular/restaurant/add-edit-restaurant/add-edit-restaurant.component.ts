import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import * as $ from 'jquery';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'
import { MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ImageSliderComponent } from 'src/app/theme/pages/imageSlider/imageSlider.component';


function _window(): any {
  // return the global native browser window object
  return window;
}
@Component({
  selector: 'app-add-edit-restaurant',
  templateUrl: './add-edit-restaurant.component.html',
  styleUrls: ['./add-edit-restaurant.component.css']
})
export class AddEditRestaurantComponent implements OnInit, AfterViewInit {

  RestaurantList: Array<any>;
  RestaurantForm: FormGroup;
  menuImages: Array<any>;
  restaurantImages: Array<any>;
  CuisinList: Array<any> = [];
  cuisinExist: Array<any> = [];
  selectable = true;
  removable = true;
  filteredValues: Array<string[]> = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('valuesInput') valuesInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  mealOffers_arr: Array<any> = ["BREAKFAST", "LUNCH", "DINNER", "ALL"]

  @Input() name;
  @Input() description;
  @Input() latitude;
  @Input() longitude;
  @Input() photos;
  @Input() openTime;
  @Input() closeTime;
  @Input() contactNumber;
  @Input() website;
  @Input() perPersonCost;
  @Input() mealOffers;
  @Input() menu;
  @Input() cuisinOffered;

  loading = false;
  submitted = false;
  mypic: any = null;
  id: number;
  isAdd: boolean;
  selectOnBlur = true;
  newAttribute: any = {};
  constructor(public activeModal: NgbActiveModal,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _script: ScriptLoaderService,
    private modalService: NgbModal,
    private restaurantService: RestaurantService,
    private toastService: ToastrService,
    private spinnerService: Ng4LoadingSpinnerService) {
  }
  ngOnInit() {
    this.buildRestaurantForm();
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

  get f() {
    return this.RestaurantForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.RestaurantForm.invalid) {
      return;
    }
    this.loading = true;
  }

  public arr_value: any = [false, false, false, false]
  buildRestaurantForm() {
    if (this.mealOffers.length > 0) {
      this.arr_value = this.mealOffers
    }
    this.RestaurantForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      description: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
      latitude: ['', [Validators.required, Validators.pattern(/^[+,-]?[0-9]{1,2}(?:\.[0-9]{1,30})?$/)]],
      longitude: ['', [Validators.required, Validators.pattern(/^[+,-]?[0-9]{1,3}(?:\.[0-9]{1,30})?$/)]],
      openTime: [, Validators.required],
      closeTime: ['', Validators.required],
      restaurantImages: [''],
      contactNumber: ['', [Validators.pattern(/^[+]*([(]{0,1}[0-9]{1,4}[)]{0,1})?[-\s\./0-9]{8,14}[0-9]$/)]],
      website: ['', Validators.pattern(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/)],
      menuImages: [''],
      mealOffers: this._formBuilder.array(this.arr_value),
      perPersonCost: ['', [Validators.pattern(/^([1-9][0-9]*)$/)]],
      cuisinOffered: ['', Validators.required]
    });

  }


  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        if (this.cuisinExist.indexOf(value) == -1)
          this.cuisinExist.push(value.trim());
      }
      if (input) {
        input.value = '';
      }

    }
  }

  remove(cuisin) {
    this.cuisinExist.pop()
  }

  selectedValue(event) {
    if (this.cuisinExist.indexOf(event) == -1)
      this.cuisinExist.push(event);
    this.valuesInput.nativeElement.value = '';
    $('ul.qz li').hide();
    $('ul.qz').hide();
  }

  focusOutFn(event) {
    this.CuisinList = []
  }

  removeItem(item) {
    this.cuisinExist.splice(item, 1)
  }
  valueChange(value) {
    $('ul.qz li').show();
    $('ul.qz').show();
    this.CuisinList = []
    this.cuisinExist = this.cuisinExist ? this.cuisinExist : [];
    if (value.key == 'Enter' || value.key == ',') {
      if (value.target.value && this.cuisinExist.indexOf(this.RestaurantForm.controls.cuisinOffered.value) < 0) {
        this.cuisinExist.push(value.target.value);
      }
    } else if (this.RestaurantForm.controls.cuisinOffered.value != "") {
      this.restaurantService.serachCuisin(value.target.value).subscribe(async (data) => {
        if (data['code'] == 200) {
          data['data'].map(async (values) => {
            if (this.CuisinList.indexOf(values.name) == -1) {
              this.CuisinList.push(values.name)
            }
          })
        }
      }), err => {
        console.log(err)
      }
    }
  }


  selectSelector(flag: string, arr) {
    switch (flag) {
      case 'menu':
        if (this.menuImages.length > 0) {
          this.menuImages = this.menuImages.concat(arr)
        } else {
          this.menuImages = arr;
        }
        break;
      case 'restaurant':
        if (this.restaurantImages.length > 0) {
          this.restaurantImages = this.restaurantImages.concat(arr)
        } else {
          this.restaurantImages = arr;
        }
        break;
    };

  }

  async imageUploading(event, flag, section, idx) {
    let queryArray = [];
    let files = event.target.files;
    let allFiles = []

    if (files.length <= 5) {
      var counter = 0;
      for (let i in files) {
        if (counter < files.length) {
          allFiles.push(files[i]);
          counter++;
        }
      }
      let obj;
      obj = await this.uploadImage(allFiles);
      queryArray = [...queryArray, ...obj]
      this.selectSelector(flag, queryArray);
    } else {
      this.toastService.error("please select only five images");
      return;
    }
  }

  async uploadImage(images) {
    return new Promise((resolve, reject) => {
      this.restaurantService.uploadPic(images).subscribe((data) => {
        resolve(data.data)
      });
    })

  }


  deleteImage(i: number, flag) {
    switch (flag) {
      case 'menu':
        this.menuImages.splice(i, 1);
        break;
      case 'restaurant':
        this.restaurantImages.splice(i, 1);
        break;
    }
  }

  async mealOffer_result(value) {
    var arr = [];
    var result = value.map(async (res, idx) => {
      if (res.value) {
        arr.push(this.mealOffers_arr[idx])
      }
    })
    if (arr.length == value.length) {
      arr = ['ALL']
    }
    return arr;
  }

  meal = [];
  mealoffer(event, x) {
    if (x == 0 || x == 1 || x == 2) {
      if (event.target.checked == true) {
        this.meal.push(event.target.checked)
        if (this.meal.length == 3) {
          this.RestaurantForm.patchValue({
            mealOffers: [true, true, true, true]
          });
          return;
        } else {
          return;
        }
      }
      else if (event.target.checked == false) {
        if (x == 0) {
          this.RestaurantForm.patchValue({
            mealOffers: [false, , , false]
          });
          this.meal.splice(x, 1)
        } else if (x == 1) {
          this.RestaurantForm.patchValue({
            mealOffers: [, false, , false]
          });
          this.meal.splice(x, 1)
        } else if (x == 2) {
          this.RestaurantForm.patchValue({
            mealOffers: [, , false, false]
          });
          this.meal.splice(x, 1)
        }
      } else {
        return;
      }
    } else {
      if (x == 3) {
        if (event.target.checked == true) {
          this.RestaurantForm.patchValue({
            mealOffers: [true, true, true, true]
          });
        }
        else if (event.target.checked == false) {
          this.RestaurantForm.patchValue({
            mealOffers: [false, false, false, false]
          });
          this.meal = []
        } else {
          return;
        }
      }
    }
  }


  async addRestaurant() {
    this.submitted = true;
    this.loading = true;
    var addObj = {
      "name": this.RestaurantForm.controls['name'].value,
      "description": this.RestaurantForm.controls['description'].value,
      "latitude": this.RestaurantForm.controls['latitude'].value,
      "longitude": this.RestaurantForm.controls['longitude'].value,
      "openTime": this.RestaurantForm.controls['openTime'].value,
      "closeTime": this.RestaurantForm.controls['closeTime'].value,
      "mealOffers": await this.mealOffer_result(this.RestaurantForm.controls['mealOffers']['controls']),
      "contactNumber": this.RestaurantForm.controls['contactNumber'].value,
      "website": this.RestaurantForm.controls['website'].value,
      "perPersonCost": this.RestaurantForm.controls['perPersonCost'].value,
      "menu": this.menuImages,
      "photos": this.restaurantImages,
      "cuisinOffered": this.cuisinExist,
    };
    if (this.isAdd) {
      if (this.RestaurantForm.invalid) {
        return;
      }
      this.spinnerService.show();
      await this.restaurantService.addRestaurant(addObj).subscribe(
        data => {
          this.activeModal.dismiss();
          this.getAllRestaurant();
          if (data['code'] == 201) {
            swal({
              position: 'center',
              type: 'success',
              title: 'Added Successfully',
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
    } else {
      this.spinnerService.show();
      this.restaurantService.editRestaurant(addObj, this.id).subscribe(
        data => {
          this.getAllRestaurant();
          this.activeModal.dismiss();
          if (data['code'] == 200) {
            swal({
              position: 'center',
              type: 'success',
              title: 'Updated Successfully',
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

  getAllRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe((response: any) => {
      this.restaurantService.setRestaurant(response);

    })
  }

  validateForm() {
    if (this.RestaurantForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  imagePreview(images) {
    let imagesOnly = images.filter((img) => {
      var extension = img.split('.').pop();
      if (extension != 'pdf') {
        return img;
      }
    })
    const modalRef = this.modalService.open(ImageSliderComponent, {
      size: 'lg',
      windowClass: 'imgPreview'
    });
    modalRef.componentInstance.images = imagesOnly;
  }


}




