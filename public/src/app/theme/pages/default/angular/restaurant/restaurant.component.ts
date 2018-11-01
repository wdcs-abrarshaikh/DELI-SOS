import { Component, OnInit, Output, EventEmitter, Input,AfterViewInit,ViewEncapsulation,ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import swal from 'sweetalert2'
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-restaurant',
  template: `
 
  <div class="modal-header">
  <h4 class="modal-title">{{ isAdd ? 'Add' : isView ? 'View' : 'Edit'}} Restaurant</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
   <form name="RestaurantForm" [formGroup]="RestaurantForm" >
      <div class="form-group"> 
      <label> Restaurant Name</label>
      <input class="form-control m-input" type="text" formControlName="name"  [(ngModel)]="name"> 
      <p *ngIf="RestaurantForm.controls.name.errors?.required && (RestaurantForm.controls.name.dirty || RestaurantForm.controls.name.touched)" class="lbl-err">Name is required.</p>
      </div><br>
    
     
      <div class="form-group"> 
      <label>Description</label>
      <input class="form-control m-input" type="text" formControlName="description"  [(ngModel)]="description"> 
      <p *ngIf="RestaurantForm.controls.description.errors?.required &&  (RestaurantForm.controls.description.dirty || RestaurantForm.controls.description.touched)" class="lbl-err">Description is required.</p>
      </div><br>


      <div class="form-group"> 
      <label>Latitude</label>
      <input class="form-control m-input" type="text" formControlName="latitude"  [(ngModel)]="latitude"> 
      <p *ngIf="RestaurantForm.controls.latitude.errors?.required &&  (RestaurantForm.controls.latitude.dirty || RestaurantForm.controls.latitude.touched)" class="lbl-err">Latitude is required.</p>
      </div><br>

       <div class="form-group"> 
       <label>Longitude</label>
       <input class="form-control m-input" type="text" formControlName="longitude"  [(ngModel)]="longitude"> 
       <p *ngIf="RestaurantForm.controls.longitude.errors?.required && (RestaurantForm.controls.longitude.dirty || RestaurantForm.controls.longitude.touched) " class="lbl-err">longitude is required.</p>
       </div><br>
       

      <div class="form-group"> 
      <label>openTime</label>
       <input class="form-control m-input" type="time" formControlName="openTime"  [(ngModel)]="openTime"> 
      <p *ngIf="RestaurantForm.controls.openTime.errors?.required && (RestaurantForm.controls.openTime.dirty || RestaurantForm.controls.openTime.touched)" class="lbl-err">openTime is required.</p>
      </div><br>
      
      <div class="form-group">
      <label for="time">Close Time</label>
      <input class="form-control m-input" type="time" formControlName="closeTime"  [(ngModel)]="closeTime"> 
      <p *ngIf="RestaurantForm.controls.closeTime.errors?.required && (RestaurantForm.controls.closeTime.dirty || RestaurantForm.controls.closeTime.touched)" class="lbl-err">closeTime is required.</p>
      </div><br>

      
    <div class="form-group">
    <label>mealOffers</label>
    <fieldset>     
    <div *ngFor="let category of RestaurantForm.controls['mealOffers'].controls; let i = index">
		<input type="checkbox" [formControl]="category">
    <label>{{ mealOffers_arr[i]}}</label>
      </div>
    <br>      
    </fieldset>      
    </div>
     
    <div class="form-group"> 
    <label>Contact Number</label>
     <input class="form-control m-input" type="tel" formControlName="contactNumber"  [(ngModel)]="contactNumber"> 
     <p *ngIf="RestaurantForm.controls.contactNumber.errors?.pattern && (RestaurantForm.controls.contactNumber.dirty || RestaurantForm.controls.contactNumber.touched)" class="lbl-err">Contact Number is required.</p>
     <p *ngIf="RestaurantForm.controls.contactNumber.errors?.required && (RestaurantForm.controls.contactNumber.dirty || RestaurantForm.controls.contactNumber.touched)" class="lbl-err">Contact Number is required.</p>
    </div>

    <div class="form-group">
    <label>Website</label>
    <input class="form-control m-input" type="text" formControlName="website"  [(ngModel)]="website"> 
    <p *ngIf="RestaurantForm.controls.website.errors?.required && (RestaurantForm.controls.website.dirty || RestaurantForm.controls.website.touched)" class="lbl-err">Website is required.</p>
     <p *ngIf="RestaurantForm.controls.website.errors?.pattern && (RestaurantForm.controls.website.dirty || RestaurantForm.controls.website.touched)" class="lbl-err">Invalid Website.</p>
     </div>
  

   <div class="form-group">
      <label>Upload Menu Images:</label><br/>
      <div  *ngFor="let url of menuImages ;let i=index"  >
      <img  [src]="url" class="rounded mb-3" width="50"  height="50">
     <button class="btn btn-danger btn-xs" *ngIf="!isView"  type="button" style="margin-left:10%"  (click)="deleteImage(i,'menu')" >Delete</button>
    </div>
      <label class="btn-bs-file btn btn-ls btn-info" style="margin-top:6px" text-align="center"*ngIf="!isView" >image
      <input type="file" formControlName="menuImages" accept="image/*" style="display: none" multiple (change)="imageUploading($event,'menu')">
     </label>     
    </div>

    <div class="form-group">
    <label >Per Person Cost</label>
    <input class="form-control m-input" type="Number" formControlName="perPersonCost"  [(ngModel)]="perPersonCost"> 
    <p *ngIf="RestaurantForm.controls.perPersonCost.errors?.required && (RestaurantForm.controls.perPersonCost.dirty || RestaurantForm.controls.perPersonCost.touched)" class="lbl-err">perPersonCost is required.</p>
    </div>
    

  <div class="form-group">
    <label>Photos:</label><br/>
    <div  *ngFor="let files of restaurantImages;let i=index"  >
    <img  [src]="files" class="rounded mb-3" width="50"  height="50">
   <button class="btn btn-danger btn-xs" *ngIf="!isView" type="button" style="margin-left:10%"  (click)="deleteImage(i,'restaurant')"  >Delete</button>
    </div>
    <label class="btn-bs-file btn btn-ls btn-info" *ngIf="!isView" style="margin-top:6px" text-align="center" >image
    <input type="file" formControlName="restaurantImages" accept="image/*" style="display: none" multiple (change)="imageUploading($event,'restaurant')">
    </label>
   </div>

   <div class="form-group">
   <mat-form-field class="example-chip-list">
  <mat-chip-list #chipList>
    <mat-chip
      *ngFor="let cuisinValue of cuisinExist,let i =index"
      [selectable]="selectable"
      [removable]="removable"
      (removed)="remove(cuisinValue)">
      {{cuisinValue}}
      <span *ngIf="cuisinValue && !isView" (click)='removeItem(i)' style='color:blue'>&nbsp;&nbsp;x</span>
    </mat-chip>
    <input
      placeholder="search cuisin"
      formControlName="cuisinOffered"
      [matAutocomplete]="auto"
      [matChipInputFor]="chipList"
      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
      (matChipInputTokenEnd)="add($event)"
      (keyup)='valueChange($event)'
      >
  </mat-chip-list>
  <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
    <mat-option *ngFor="let values of CuisinList " [value]="values">
      {{CuisinList}}
    </mat-option>
  </mat-autocomplete>
  
</mat-form-field>
<ul class="qz" [hidden]="CuisinList.length ==0">
<li *ngFor="let values of CuisinList" (click)='selectedValue(values)' style='margin-top:3px;'>
 {{values}}
  </li>
  </ul>
   </div>   
</form>
 
<div class="modal-footer" *ngIf="!isView">
<button type="submit" class="btn btn-outline-dark"  (click)="addRestaurant()">Save</button>&nbsp;&nbsp;
<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>

</div>
</div>


`,
  styleUrls: ['./restaurant.component.css'],
 
})
export class NgbdModalContent {
    RestaurantList: Array<any>;
    RestaurantForm: FormGroup;
    menuImages:Array<any>;
    restaurantImages:Array<any>;
    CuisinList:Array<any>=[];
    cuisinExist:Array<any>= [];
    selectable = true;
    // removable = true;
    filteredValues: Array<string[]>=[];
    separatorKeysCodes: number[] = [ENTER, COMMA];
    // @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;
    //   {
    //     name:'',
    //     image:''
    //   }
    // ];

    mealOffers_arr:Array<any> = ["BREAKFAST","LUNCH","DINNER","ALL"]

    @Input() name;
    @Input() description;
    @Input() latitude;
    @Input() longitude;
    @Input() photos;
    @Input() openTime;
    @Input () closeTime;
    @Input () contactNumber;
    @Input () website;
    @Input () perPersonCost;
    @Input () mealOffers;
    @Input () menu;
    @Input () cuisinOffered;
    loading = false;
    submitted = false;
    mypic:any = null; 
    id: number;
    isAdd: boolean;
   
    newAttribute: any = {};
    constructor(public activeModal: NgbActiveModal,
      private _router: Router,
      private _formBuilder: FormBuilder,
      private modalService: NgbModal,
      private restaurantService: RestaurantService,
      private toastService: ToastrService) {
                                                }
       ngOnInit() {
          this.buildRestaurantForm();
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
    public arr_value:any = [false,false,false,false]
    
    buildRestaurantForm() {
       if(this.mealOffers.length>0){
        this.arr_value = this.mealOffers 
      }
      this.RestaurantForm = this._formBuilder.group({
       name: ['', [Validators.required]],
       description: ['', [Validators.required]],
       latitude:['',Validators.required],
       longitude:['',Validators.required],
       openTime:['',Validators.required],
       closeTime:['',Validators.required],
       restaurantImages:[''],
       contactNumber:['',Validators.required],
       website:[''],
       menuImages: [''],
       mealOffers: this._formBuilder.array(this.arr_value),
       perPersonCost:['',Validators.required],
       cuisinOffered:['']
        });
  
    }

  
    add(event: MatChipInputEvent): void {
      if (!this.matAutocomplete.isOpen) {
        const input = event.input;
        const value = event.value;
       if ((value || '').trim()) {
          if(this.cuisinExist.indexOf(value)== -1)
          this.cuisinExist.push(value.trim());
       }
  
    
        if (input) {
          input.value = '';
        }
    
      }
    }

    selectedValue(event) {
     if(this.cuisinExist.indexOf(event)==-1)
        this.cuisinExist.push(event);
   
    }

    focusOutFn(event){
    this.CuisinList=[]
    }

    removeItem(item){
 
      this.cuisinExist.splice(item,1)
    }
    valueChange(value){
      this.CuisinList=[]
      this.cuisinExist= this.cuisinExist ? this.cuisinExist : [];
       
        if(value.key == 'Enter' || value.key == ','){
      if(value.target.value && this.cuisinExist.indexOf(this.RestaurantForm.controls.cuisinOffered.value)<0){
            this.cuisinExist.push(value.target.value);
         
            }
         
        }else if(this.RestaurantForm.controls.cuisinOffered.value !=""){
       
          this.restaurantService.serachCuisin(value.target.value).subscribe(async (data)=>{
            if(data['code'] ==200){
               data['data'].map(async (values)=>{
                
                 if(this.CuisinList.indexOf(values.name)==-1){
                  this.CuisinList.push(values.name)
                 }
                 
               })
            }
            
          }),err=>{
            console.log(err)
          }
        }
        
      // }
      
    }

  

   

selectSelector(flag:string,arr){

  switch(flag){ 
    case 'menu':
          this.menuImages = arr;
          break;
    case 'restaurant':
          this.restaurantImages  = arr;
          break; 
  };
 
}


async imageUploading(event,flag,section,idx){
    let queryArray = [];
    let files = event.target.files ; 
  
    let allFiles= []   
    if (files.length<=5) {
      var counter =0;
      for(let i in files){
        if(counter < files.length){
          allFiles.push(files[i]);
          counter++;
        }
      }
      let obj;
         obj = await this.uploadImage(allFiles);
            queryArray = [...queryArray,...obj]
         this.selectSelector(flag,queryArray);
    }else{
      this.toastService.error("please select only five images");
      return;
    }
}


async uploadImage(images) {
 return new Promise((resolve,reject)=>{
      this.restaurantService.uploadPic(images).subscribe((data)=>{
       resolve(data.data)
       });
    })
          
 }


  deleteImage(i:number,flag){
    switch(flag){
      case 'menu':
          this.menuImages.splice(i,1);
          break;
      case 'restaurant':
          this.restaurantImages.splice(i,1);
          break; 
    
    }
}

  async mealOffer_result(value){
    var arr =[];
    var result = value.map(async (res,idx)=>{
      if(res.value){
        arr.push(this.mealOffers_arr[idx])
      }
    })
    return arr;
  }



 async addRestaurant() {
    
     this.submitted = true;
    if (this.RestaurantForm.invalid) {
      return;
    }
   this.loading = true;
      var addObj = {
        "name": this.RestaurantForm.controls['name'].value,
        "description": this.RestaurantForm.controls['description'].value,
        "latitude": this.RestaurantForm.controls['latitude'].value,
        "longitude": this.RestaurantForm.controls['longitude'].value,
        "openTime": this.RestaurantForm.controls['openTime'].value,
        "closeTime": this.RestaurantForm.controls['closeTime'].value,
        "mealOffers":await this.mealOffer_result(this.RestaurantForm.controls['mealOffers']['controls']),
        "contactNumber": this.RestaurantForm.controls['contactNumber'].value,
        "website": this.RestaurantForm.controls['website'].value,
        "perPersonCost": this.RestaurantForm.controls['perPersonCost'].value,
        "menu":this.menuImages,
        "photos":this.restaurantImages,
        "cuisinOffered":this.cuisinExist,
        };

      
    if (this.isAdd) {
      await this.restaurantService.addRestaurant(addObj).subscribe(
        data => {
           this.activeModal.dismiss();
            this.getAllRestaurant();
            if (data['code'] ==201 ) {
              swal({
                position: 'center',
                type: 'success',
                title: data['message'],
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
      addObj.latitude = JSON.stringify(addObj.latitude);
      addObj.longitude = JSON.stringify(addObj.longitude);
      this.restaurantService.editRestaurant(addObj,this.id).subscribe(
        data => {
          this.getAllRestaurant();
          this.activeModal.dismiss();
          if (data['code'] ==200 ) {
            swal({
              position: 'center',
              type: 'success',
              title: data['message'],
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
 

}
 





@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RestaurantComponent implements OnInit,AfterViewInit {

  modalReference: any;
  isAdd: boolean = false;
  RestaurantList: Array<any>;
  isView:boolean=false;
  submitted = false;
  i;

  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
     private restaurantService:RestaurantService,
     private _script:ScriptLoaderService) {

    this.restaurantService.getRestaurant().subscribe((data:any)=>{
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
  getRestaurantList(){
      this.restaurantService.getAllRestaurant().subscribe((response: any) => {
      this.RestaurantList = response.data;
   
    });
  }


  mealOffers_arr:Array<any> = ["BREAKFAST","LUNCH","DINNER","ALL"]
  async checkValue(arr){
   var array_val:Array<any> = [false,false,false,false];
    let res = await this.mealOffers_arr.map(async (response,idx)=>{
        arr.map(async (arr_res,idnx)=>{
            if(arr_res == response){
             array_val[idx] = true;
            }
        })
    });
    return array_val;
  }
  async open(content,type) {

   var i:number;
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
    let  arr_value:any = [false,false,false,false];
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.description = content ? content.description : "";
    modalRef.componentInstance.latitude = content ? content.location.coordinates[0]: "";
    modalRef.componentInstance.longitude = content ? content.location.coordinates[1] : "";
    modalRef.componentInstance.openTime = content ? content.openTime : "";
    modalRef.componentInstance.closeTime = content ? content.closeTime : "";
    modalRef.componentInstance.contactNumber = content ? content.contactNumber : "";
    modalRef.componentInstance.website = content ? content.website : "";
    modalRef.componentInstance.perPersonCost = content ? content.perPersonCost : "";
    modalRef.componentInstance.menuImages = content ? content.menu: "";
    modalRef.componentInstance.restaurantImages = content ? content.photos : "";
    modalRef.componentInstance.cuisinExist = content ? content.cuisinOffered: "";
    modalRef.componentInstance.isAdd = this.isAdd;
    modalRef.componentInstance.isView=this.isView;
   modalRef.componentInstance.mealOffers = (content) ? await this.checkValue(content.mealOffers) : arr_value;
 
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
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          },
          error => {
            swal(
              'error!',
              'Your file has been deleted.',
              'success'
            )
          });
      
      }
    })
  
  }
  

}

