import { IndexService } from './index.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

@Component({
    selector: 'app-index',
    template: `
   
    <div class="modal-header">
    <h4 class="modal-title">View Restaurant</h4>
     <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
   </div>
    <div class="modal-body">
     <form name="RestaurantForm" [formGroup]="RestaurantForm"  >
        <div class="form-group"> 
        <label> Restaurant Name</label>
        <input class="form-control m-input" type="text" formControlName="name"  [(ngModel)]="name"> 
        </div><br>
      
       
        <div class="form-group"> 
        <label>Description</label>
        <input class="form-control m-input" type="text" formControlName="description"  [(ngModel)]="description"> 
        </div><br>
  
  
        <div class="form-group"> 
        <label>Latitude</label>
        <input class="form-control m-input" type="text" formControlName="latitude"  [(ngModel)]="latitude"> 
       </div><br>
  
         <div class="form-group"> 
         <label>Longitude</label>
         <input class="form-control m-input" type="text" formControlName="longitude"  [(ngModel)]="longitude"> 
        </div><br>
         
  
        <div class="form-group"> 
        <label>openTime</label>
         <input class="form-control m-input" type="time" formControlName="openTime"  [(ngModel)]="openTime"> 
         </div><br>
        
        <div class="form-group">
        <label for="time">Close Time</label>
        <input class="form-control m-input" type="time" formControlName="closeTime"  [(ngModel)]="closeTime"> 
        </div><br>
  
        
      <div class="form-group">
      <label>mealOffers</label>
      <fieldset>      
      <input type="checkbox" name="mealOffers" value="BREAKFAST" />BREAKFAST<br>      
      <input type="checkbox" name="mealOffers" value="LUNCH">LUNCH<br>      
      <input type="checkbox" name="mealOffers" value="DINNER">DINNER<br>    
      <input type="checkbox" name="mealOffers" value="ALL" checked>ALL<br>       
      <br>      
      </fieldset>      
      </div>
       
      <div class="form-group"> 
      <label>Contact Number</label>
       <input class="form-control m-input" type="tel" formControlName="contactNumber"  [(ngModel)]="contactNumber"> 
       </div>
  
      <div class="form-group">
      <label>Website</label>
      <input class="form-control m-input" type="text" formControlName="website"  [(ngModel)]="website"> 
      </div>
    
  
     <div class="form-group">
        <label>Upload Menu Images:</label><br/>
        <div  *ngFor="let url of menuImages ;let i=index"  >
        <img  [src]="url" class="rounded mb-3" width="50">
        <button class="btn btn-danger btn-xs" type="button" style="margin-left:10%"  (click)="deleteImage(i,'menu')" >Delete</button>
        </div>
        <label class="btn-bs-file btn btn-ls btn-info" style="margin-top:6px" text-align="center" >image
        <input type="file" formControlName="menu" accept="image/*" style="display: none" multiple (change)="imageUploading($event,'menu')">
         </label>     
      </div>
  
      <div class="form-group">
      <label >Per Person Cost</label>
      <input class="form-control m-input" type="Number" formControlName="perPersonCost"  [(ngModel)]="perPersonCost"> 
      </div>
      
  
    <div class="form-group">
      <label>Photos:</label><br/>
      <div  *ngFor="let files of restaurantImages;let i=index"  >
      <img  [src]="files" class="rounded mb-3" width="50">
      <button class="btn btn-danger btn-xs" type="button" style="margin-left:10%"  (click)="deleteImage(i,'restaurant')"  >Delete</button>
      </div>
      <label class="btn-bs-file btn btn-ls btn-info" style="margin-top:6px" text-align="center" >image
      <input type="file" formControlName="photos" accept="image/*" style="display: none" multiple (change)="imageUploading($event,'restaurant')">
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
       <th>Action</th>
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
        <img  [src]="cuisinSubset.image" class="rounded mb-3" width="50">
        </div>
        <label class="btn-bs-file btn btn-ls btn-info" style="margin-top:6px" text-align="center" >image
        <input type="file" accept="image/*" style="display: none" (change)="imageUploading($event,'cuisin',true,i)">
        </label>   
       <div class="help-block"></div>
       </div>
       </td>
       <td >
       <button *ngIf='cuisinSubset.image' class="btn btn-danger btn-xs" type="button" (click)="deleteImage(i,'cuisin')" style="margin-right:10px" >Delete</button>
        </td>
       </tr>
       </tbody>
       </table>
       </div>
       </div>
       <button class="btn btn-secondary btn-lg1" type="button"  (click)="addCuisin()" style="margin-right:10px" >Add More</button>
     
      </div>
      </div>
   
  </div>
  
  
  `,
    styleUrls: ['./index.component.css']
  })
  export class NgbdModalContent {
    constructor(
        private modalService: NgbModal){}
   
  }

@Component({
selector: "app-index",
templateUrl: "./index.component.html",
encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {
    usersList: Array<any>;
    isView: boolean = false;
constructor(
    private _script:ScriptLoaderService,
    private indexService: IndexService,
    private toastService: ToastrService,
    private modalService: NgbModal)  {

}
ngAfterViewInit() {
    this._script.loadScripts('app-index',
      ['assets/vendors/custom/datatables/datatables.bundle.js',
        'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
  }

totalUser;
ngOnInit()  {
    this.getAllRequest()
    // this.getUserList();
}
getUserList(){
    this.indexService.getAllUsers().subscribe((response: any) => {
        console.log(response)
       this.usersList = response.response.count;
    });
}
RestList:Array<any>=[];

getAllRequest(){
    console.log("lllllllll")
    this.indexService.getAllRequest().subscribe((response:any)=>{
        console.log("kkkkk")
        console.log(response)
        this.RestList=response.data
    })
}
open(content) {
  
     const modalRef = this.modalService.open(NgbdModalContent);
     modalRef.componentInstance.id = content ? content._id : "";
     modalRef.componentInstance.name = content ? content.name : "";
     modalRef.componentInstance.description = content ? content.description : "";
     modalRef.componentInstance.latitude = content ? content.location.coordinates[0]: "";
     modalRef.componentInstance.longitude = content ? content.location.coordinates[1] : "";
     modalRef.componentInstance.mealOffers = content ? content.mealOffers : "";
     modalRef.componentInstance.openTime = content ? content.openTime : "";
     modalRef.componentInstance.closeTime = content ? content.closeTime : "";
     modalRef.componentInstance.contactNumber = content ? content.contactNumber : "";
     modalRef.componentInstance.website = content ? content.website : "";
     modalRef.componentInstance.perPersonCost = content ? content.perPersonCost : "";
     modalRef.componentInstance.menuImages = content ? content.menu: "";
     modalRef.componentInstance.restaurantImages = content ? content.photos : "";
     modalRef.componentInstance.cuisinImagesObject = content ? content.cuisin: "";
     modalRef.componentInstance.isView = this.isView;
     console.log(modalRef)
   }

}