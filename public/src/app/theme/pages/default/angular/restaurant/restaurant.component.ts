import { Component, OnInit, Output, EventEmitter, Input,AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
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

   
</form>
<div class="box box-solid box-primary">
   <div>
   <label>cuisin</label>
   <div class="row" >
    <div >	
     <table class="table table-bordered">		
     <tbody>
     <tr>
     <th>Name</th>
     <th>Image</th>
     <th *ngIf="!isView" >Action</th>
    </tr>
    <tr *ngFor="let cuisinSubset of cuisinImagesObject; let i=index" >
     <td>
     <div class="form-group ">
     <input  [(ngModel)]='cuisinSubset.name' placeholder="name" (change)='changeCuisinName(i,cuisinSubset.name)' style="width:150px"  required="required"/>
      <div class="help-block"></div>
     </div>
     </td>
     <td >
     <div class="form-group required"> 
     <label>Image:</label><br/>
      <div>
      <img  [src]="cuisinSubset.image" class="rounded mb-3"  width="50"  height=auto>
      </div>
      <label class="btn-bs-file btn btn-ls btn-info"*ngIf="!isView" style="margin-top:6px" text-align="center" >image
      <input type="file" accept="image/*" style="display: none" (change)="imageUploading($event,'cuisin',true,i)">
      </label>   
     <div class="help-block"></div>
     </div>
     </td>
     <td >
   <button *ngIf='cuisinSubset && !isView' class="btn btn-danger btn-xs" type="button" (click)="deleteImage(i,'cuisin')" style="margin-right:10px" >Delete</button>
      </td>
     </tr>
     </tbody>
     </table>
     </div>
     </div>
     <div *ngIf="!isView">
     <button class="btn btn-secondary btn-lg1" type="button"  (click)="addCuisin()" style="margin-right:10px" >Add More</button>
   </div>
    </div>
    </div>
  
    
<div class="modal-footer" *ngIf="!isView">
<button type="submit" class="btn btn-outline-dark"  (click)="addRestaurant()">Save</button>
<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>

</div>
</div>


`,
  styleUrls: ['./restaurant.component.css']
})
export class NgbdModalContent {
    RestaurantList: Array<any>;
    RestaurantForm: FormGroup;
    menuImages:Array<any>;
    restaurantImages:Array<any>;
    cuisinImagesObject:Array<any>=[
      {
        name:'',
        image:''
      }
    ];

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
    @Input () cuisin;
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
      private toastService: ToastrService) { }
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
       perPersonCost:['',Validators.required]
        });
  
    }
    createItem(){
      return {
        name: '',
        image:''
       };
    }
  
  changeCuisinName(index,value){
   this.cuisinImagesObject[index].name = value;
  }

  async addCuisin(){
    let isValid = await this.checkCuisinValid();
    if(!isValid){
      this.toastService.error("Please fill the All cuisin items.");
    }else{
      this.cuisinImagesObject.push(this.createItem())
    } 
  }


  async checkCuisinValid(){
   
    let result = await this.cuisinImagesObject.filter((res)=>{
      if(!res.name || !res.image){
        return res;
      }
    });
    return (result.length>0)? false : true;
  }


selectSelector(flag:string,arr){

  switch(flag){ 
    case 'menu':
          this.menuImages = arr;
          break;
    case 'restaurant':
          this.restaurantImages  = arr;
          break; 
    case 'cuisin':
          let flag=false;
          this.cuisinImagesObject.map(async (result,idx)=>{
          if(result.name == arr[0].name){
             this.cuisinImagesObject[idx]=arr[0];
              flag = true;
            }
             if(idx == this.cuisinImagesObject.length-1){
              if(!flag){
                 this.cuisinImagesObject.push(arr[0])
              }
            }
          })
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
      if(section){
            obj= {
                name:(this.cuisinImagesObject[idx].name)?(this.cuisinImagesObject[idx].name):'',
                image: await this.uploadImage(allFiles)
               }
              obj.image = obj.image[0];
              queryArray.push(obj); 
            }else{  
              obj = await this.uploadImage(allFiles);
              queryArray = [...queryArray,...obj]
             }  
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
      case 'cuisin':
          this.cuisinImagesObject.splice(i,1);
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
    let isValid = await this.checkCuisinValid();
     if(!isValid){
      return this.toastService.error("Please fill the All cuisin items.");
     }
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
        "cuisin":this.cuisinImagesObject
        };

      
    if (this.isAdd) {

      await this.restaurantService.addRestaurant(addObj).subscribe(
        data => {
          if(data['code'] !=201){
            this.toastService.error("Please check all the fields and try again.");
          }else{
            this.activeModal.dismiss();
            this.getAllRestaurant();
            this.toastService.success(data['message']);
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
          this.toastService.success(data['message']);       
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
  async uploadImageCuisin(obj){
    let res= await obj.map(async (result)=>{
        let response = await this.uploadImage([result.image]);
        result.name =result.cuisinName;
        result.image= response;
        delete result.cuisinName;
        return result;
    })
    return res;
  }


}
 





@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit,AfterViewInit {
  // bannersDetail: any;
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
    modalRef.componentInstance.cuisinImagesObject = content ? content.cuisin: [{name:'',image:''}];
    modalRef.componentInstance.isAdd = this.isAdd;
    modalRef.componentInstance.isView=this.isView;
   modalRef.componentInstance.mealOffers = (content) ? await this.checkValue(content.mealOffers) : arr_value;
 
  }


  deleteRestaurant(Rid) {
   this.restaurantService.deleteRestaurant(Rid).subscribe(
      data => {
       this.modalReference.close();
       this.toastService.success(data['message']);
       this. getRestaurantList()
       },
      error => {
        this.toastService.error(error.errors);
      });
  }
  delete(content) {
    this.modalReference = this.modalService.open(content);
  }

}

