
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ContactUsService } from './contact-us.service';
import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  contactUsList: Array<any>;
  isView: boolean = false;
  constructor(
    private _router: Router,
    private _script: ScriptLoaderService,
    private contactUsService: ContactUsService,
    private location: Location,
    private spinnerService: Ng4LoadingSpinnerService) {
     this.spinnerService.show();
    this.contactUsService.getAllContactRequest().subscribe((response: any) => {
      this.contactUsList = response.data
      this.spinnerService.hide();
    })
  }

  ngAfterViewInit() {

    
    //app-contact-us
    let scripts = [];
    if (!_window().isScriptLoadedUsermgmt) {
      scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
    }
    let that = this;
    this._script.loadScripts('app-contact-us',
        scripts).then(function(){
          _window().isScriptLoadedUsermgmt = true;
          that._script.loadScripts('app-contact-us', ['assets/demo/default/custom/crud/datatables/basic/paginations.js']);
        });

  }

  ngOnInit() {

    _window().my = _window().my || {};
    _window().my.usermgmt = _window().my.usermgmt || {};
    if (typeof (_window().isScriptLoadedUsermgmt) == "undefined"){
      _window().isScriptLoadedUsermgmt = false;
    }

    this.getAllContactRequest()
  }

  getAllContactRequest() {
    this.spinnerService.show();
    this.contactUsService.getAllContactRequest().subscribe((response: any) => {
      this.contactUsList = response.data
      this.spinnerService.hide();
    })
  }

}
