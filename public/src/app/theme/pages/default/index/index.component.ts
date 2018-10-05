import { IndexService } from './index.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
selector: "app-index",
templateUrl: "./index.component.html",
encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit {
    usersList: Array<any>;

constructor(
   
    private indexService: IndexService,
    private toastService: ToastrService)  {

}

totalUser;
ngOnInit()  {
    this.getUserList();
}
getUserList(){
    this.indexService.getAllUsers().subscribe((response: any) => {
       this.usersList = response.response.count;
    
    });


}
}