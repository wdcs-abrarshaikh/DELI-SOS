import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CuisinService } from './cuisin.service';
import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditcuisinComponent } from './add-editcuisin/add-editcuisin.component';
import swal from 'sweetalert2'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'app-cuisin',
  templateUrl: './cuisin.component.html',

  styleUrls: ['./cuisin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CuisinComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  modalReference: any;
  isAdd: boolean = false;
  cuisinsList: Array<any>;
  cuisinForm: FormGroup;
  loading = false;
  image: Array<any>;
  submitted = false;
  isView: boolean = false;
  constructor(private modalService: NgbModal,
    private location: Location,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private cuisinService: CuisinService,
    private _script: ScriptLoaderService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.cuisinService.getCuisins().subscribe((data: any) => {
      this.cuisinsList = data.cuisinsList.data
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
    this._script.loadScripts('app-cuisin',
      scripts).then(function () {
        _window().isScriptLoadedUsermgmt = true;
        that._script.loadScripts('app-cuisin', ['assets/demo/default/custom/crud/datatables/basic/paginations.js']);
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
      processing: true,
      stateSave: true
    };
    this.getCuisinList();
  }

  open(content) {
    if (!content) {
      this.isAdd = true
    } else {
      this.isAdd = false

    }
    const modalRef = this.modalService.open(AddEditcuisinComponent);
    modalRef.componentInstance.id = content ? content._id : "";
    modalRef.componentInstance.name = content ? content.name : "";
    modalRef.componentInstance.image = content ? content.image : "";
    modalRef.componentInstance.isAdd = this.isAdd;

  }

  // All User Display Method
  getCuisinList() {
    this.spinnerService.show();
    this.cuisinService.getAllCuisins().subscribe((response: any) => {
      this.cuisinsList = response.data;
      this.dtTrigger.next();
      this.spinnerService.hide();
    });
  }

  viewCuisines(cuisin) {
    this.modalReference = this.modalService.open(cuisin);
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
        this.cuisinService.deleteCuisin(id).subscribe(
          data => {
            this.cuisinService.getAllCuisins().subscribe((response: any) => {
              this.cuisinsList = response.data;
              this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.destroy();
                this.dtTrigger.next();
                this.spinnerService.hide();
              })
            });

            if (data['code'] == 200) {
              swal(
                'Deleted!',
                data['message'],
                'success'
              )
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


  validateForm() {
    if (this.cuisinForm.valid) {
      return false;
    } else {
      return true;
    }
  }

}
