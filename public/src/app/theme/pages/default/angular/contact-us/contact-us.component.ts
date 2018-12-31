
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ContactUsService } from './contact-us.service';
import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
    this._script.loadScripts('app-contact-us',
      ['assets/vendors/custom/datatables/datatables.bundle.js',
        'assets/demo/default/custom/crud/datatables/basic/paginations.js']);
  }

  ngOnInit() {
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
