import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
  declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    styleUrls: ['./aside-nav.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {


    constructor(private spinnerService: Ng4LoadingSpinnerService,
        private _router: Router) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initAside();

    }

    moveToIndex(){
        this.spinnerService.show();
        this._router.navigate(['/index']);
    }

    moveToRestaurant(){
        this.spinnerService.show();
        this._router.navigate(['/admin/restaurant']);
    }
    moveToCuisin(){
        this.spinnerService.show();
        this._router.navigate(['/admin/cuisines']);
    }
    moveToUser(){
        this.spinnerService.show();
        this._router.navigate(['/admin/getUserList']);
    }
    moveToAboutus(){
        this.spinnerService.show();
        this._router.navigate(['/admin/about-us']);
    }

    moveToContactus(){
        this.spinnerService.show();
        this._router.navigate(['/admin/contact-us']);
    }

    moveToPrivacy(){
        this.spinnerService.show();
        this._router.navigate(['/admin/privacy-policy']);
    }
}