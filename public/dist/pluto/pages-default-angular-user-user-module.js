(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-user-user-module"],{

/***/ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ isAdd ? 'Add' : 'Edit'}} User</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"addUsers()\">\n    <div class=\"form-group\">\n      <label for=\"name\">User Name</label>\n      <input type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\" class=\"form-control\" />\n      <p *ngIf=\"userForm.controls.name.errors?.required && (userForm.controls.name.dirty || userForm.controls.name.touched)\"\n        class=\"lbl-err\">Name is required.</p>\n      <p *ngIf=\"userForm.controls.name.errors?.pattern && (userForm.controls.name.dirty || userForm.controls.name.touched)\"\n        class=\"lbl-err\">Enter Valid Name.</p>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" formControlName=\"email\" [(ngModel)]=\"email\" class=\"form-control\" />\n      <p *ngIf=\"userForm.controls.email.errors?.required  && (userForm.controls.email.dirty || userForm.controls.email.touched)\"\n        class=\"lbl-err\">email Id is required.</p>\n      <p *ngIf=\"userForm.controls.email.errors?.pattern  && (userForm.controls.email.dirty || userForm.controls.email.touched)\"\n        class=\"lbl-err\">Enter Valid Email.</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"deviceId\">Device Id</label>\n      <input type=\"text\" formControlName=\"deviceId\" [(ngModel)]=\"deviceId\" class=\"form-control\" />\n      <p *ngIf=\"userForm.controls.deviceId.errors?.required  && (userForm.controls.deviceId.dirty || userForm.controls.deviceId.touched)\"\n        class=\"lbl-err\">Device Id is required.</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"deviceType\">Device Type</label>\n      <input type=\"text\" formControlName=\"deviceType\" [(ngModel)]=\"deviceType\" class=\"form-control\" />\n      <p *ngIf=\"userForm.controls.deviceType.errors?.required  && (userForm.controls.deviceType.dirty || userForm.controls.deviceType.touched)\"\n        class=\"lbl-err\">Device Type is required.</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"fcmToken\">Fcm Token</label>\n      <input type=\"text\" formControlName=\"fcmToken\" [(ngModel)]=\"fcmToken\" class=\"form-control\" />\n      <p *ngIf=\"userForm.controls.fcmToken.errors?.required  && (userForm.controls.fcmToken.dirty || userForm.controls.fcmToken.touched)\"\n        class=\"lbl-err\">FcmToken is required.</p>\n    </div>\n\n    <div [hidden]=\"!isAdd\">\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\" class=\"form-control\" />\n      </div>\n    </div>\n\n    <div class=\"modal-footer\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-save\" [disabled]=\"validateForm()\">Save</button>&nbsp;&nbsp;\n        <button type=\"button\" class=\"btn btn-delete\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserComponent", function() { return AddEditUserComponent; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.service */ "./src/app/theme/pages/default/angular/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEditUserComponent = /** @class */ (function () {
    function AddEditUserComponent(activeModal, _router, _formBuilder, modalService, userService, toastService) {
        this.activeModal = activeModal;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.userService = userService;
        this.toastService = toastService;
        this.loading = false;
        this.submitted = false;
    }
    AddEditUserComponent.prototype.ngOnInit = function () {
        this.buildUserForm();
    };
    Object.defineProperty(AddEditUserComponent.prototype, "f", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddEditUserComponent.prototype.buildUserForm = function () {
        this.userForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=.{1,40}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
            password: [''],
            deviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            deviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fcmToken: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AddEditUserComponent.prototype.addUsers = function () {
        var _this = this;
        var addObj = {
            "name": this.userForm.controls['name'].value,
            "email": this.userForm.controls['email'].value,
            "password": this.userForm.controls['password'].value,
            "deviceId": this.userForm.controls['deviceId'].value,
            "deviceType": this.userForm.controls['deviceType'].value,
            "fcmToken": this.userForm.controls['fcmToken'].value,
        };
        if (this.isAdd) {
            this.userService.addUser(addObj).subscribe(function (data) {
                _this.getAllUser();
                if (data['code'] == 201) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        position: 'center',
                        type: 'success',
                        title: data['message'],
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.activeModal.dismiss();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        type: 'error',
                        text: data['message']
                    });
                }
            }, function (error) {
                _this.toastService.error(error['message']);
            });
        }
        else {
            this.userService.editUser(addObj, this.id).subscribe(function (data) {
                _this.getAllUser();
                _this.activeModal.dismiss();
                if (data['code'] == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        position: 'center',
                        type: 'success',
                        title: 'Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.activeModal.dismiss();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        type: 'error',
                        text: data['message']
                    });
                }
            }, function (error) {
                _this.toastService.error(error['message']);
            });
        }
    };
    AddEditUserComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (response) {
            _this.userService.setUsers(response);
        });
    };
    AddEditUserComponent.prototype.validateForm = function () {
        if (this.userForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "password", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "deviceId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditUserComponent.prototype, "fcmToken", void 0);
    AddEditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-user',
            template: __webpack_require__(/*! ./add-edit-user.component.html */ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-user.component.css */ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AddEditUserComponent);
    return AddEditUserComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/user.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/user.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.btn-add {\n    border-radius: 1.1rem;\n    padding: 1.0rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: .6;\n    color: white;\n    border-color: #e95e37;\n    margin-left: 88%;\n    margin-bottom: 16px;\n    background: linear-gradient(to right, #fc4a1a, #f7b733);\n}\n.lbl-err {\n    color: red;\n    /* position: inherit;\n    font-size: 14px;\n    bottom: -18px; */\n }\n.header{\n    font-size: 3.15rem;\n    padding: 1.25rem 4.65rem;\n    text-align: center;\n   }\n.btn-edit{\n         border:none;\n        color:gray;\n        background-color: transparent;\n      }\n.btn-delete{\n       border:none;\n        color:gray;\n        background-color: transparent;\n    }\n.btn-view{\n        border:none;\n        color:gray;\n        background-color: transparent;\n       \n    }\n.banner-image {\n        /* height: 85px; */\n        width: 130px;\n        margin-left: 122px;\n}\n.btn-del{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    margin-right:45px;\n background-color: transparent;\n background: #a73a08;\n    border-color: #a73a08;\n}\ntable.dataTable thead th.sorting,\n   table.dataTable thead th.sorting_asc,\n   table.dataTable thead th.sorting_desc {\n   background: none;\n   padding: 7px 8px;\n   }\n.dataTables_wrapper .pagination .page-item.active>.page-link {\n    background: linear-gradient(45deg, #fc4a1a, #f7b733) !important;\n    color: #fff;\n }\n.dataTables_wrapper .pagination .page-item:hover>.page-link {\n    background: linear-gradient(45deg, #fc4a1a, #f7b733) !important;\n    color: #fff;\n }\n.btn.m-btn--hover-brand:hover{\n    background: linear-gradient(45deg, #fc4a1a, #f7b733) !important;\n    border: none;\n }\n.btn.m-btn--hover-brand:not(.btn-secondary):not(.btn-outline-light) i {\n    background: linear-gradient(45deg, #fc4a1a, #f7b733) !important;\n }\n.dataTables_wrapper .dataTables_paginate .paginate_button:hover {\n    color: white !important;\n    border: 1px solid #f1d7a2;\n    background-color:#f1d7a2;\n    background:#f1d7a2\n}\n.container-fluid {\n    width: 85%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.btn.m-btn--hover-brand:hover, .btn.m-btn--hover-brand:focus, .btn.m-btn--hover-brand:active{\n    background: linear-gradient(45deg, #fc4a1a, #f7b733) !important;\n    border: none;\n }\n.m-badge {\n    background:linear-gradient(45deg, #fc4a1a, #f7b733) !important;\n    color:white;\n    font-weight: bold !important;\n   }\n.fa-eye:before {\n    content: \"\\f06e\";\n    color: dimgrey;\n}\n.fa-edit:before, .fa-pencil-square-o:before {\n    content: \"\\f044\";\n    color: dimgrey;\n}\n.fa-trash-alt:before {\n    content: \"\\f2ed\";\n    color: dimgrey;\n}\n.btn-save {\n    color: white;\n    width: 80px;\n    background: #49a558;\n    border-radius: 25%;\n    opacity: 1.5;\n}\n.btn-delete{\n    color: white;\n    width: 80px;\n    background: #a73a08;\n    opacity: 1.5;\n    border-radius: 25%;\n}\n.form-control:focus {\n    border-color: lightslategrey;\n    color: #575962;\n    box-shadow: none;\n    border-radius: 0%\n}"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">Users</h2>\n<button class=\"btn-add\" (click)=\"open()\">Add</button>\n\n\n<table *ngIf=\"usersList\" datatable class=\"table-bordered table-hover\">\n  <thead>\n    <tr>\n      <td style=\"font-weight: bold; width: 10%;\">Sr.</td>\n      <td style=\"font-weight: bold; width: 20%\">UserName</td>\n      <td style=\"font-weight: bold; width: 30%;\">Email</td>\n      <th style=\"width:20%\"> &nbsp;&nbsp;&nbsp;Status</th>\n      <th style=\" width:20%\"> &nbsp;Action</th>\n    </tr>\n  </thead>\n  <tbody>\n\n    <tr *ngFor=\"let user of usersList ; let i=index\">\n      <td>{{i+1}}</td>\n      <td>{{user.name}}</td>\n      <td>{{user.email}}</td>\n      <td><span class=\"m-badge  m-badge--wide\">{{user.status}}</span></td>\n      <td>\n\n        <button type=\"button\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill\"\n          data-toggle=\"m-tooltip\"   data-placement=\"top\" title=\"View\"  (click)=\"viewUser(User)\">\n          <i class=\"fas fa-eye\"></i>\n        </button>\n        <ng-template #User let-d=\"dismiss\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">View User</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"form-group\">\n              <label for=\"name\">User Name</label>\n              <input type=\"text\" [(ngModel)]=\"user.name\" class=\"form-control\" disabled />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" [(ngModel)]=\"user.email\" class=\"form-control\" disabled />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"deviceId\">DeviceId</label>\n              <input type=\"text\" [(ngModel)]=\"user.deviceId\" class=\"form-control\" disabled />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"deviceType\">Device Type</label>\n              <input type=\"text\" [(ngModel)]=\"user.deviceType\" class=\"form-control\" disabled />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"fcmToken\">fcm Token</label>\n              <textarea [(ngModel)]=\"user.fcmToken\" class=\"form-control\" rows=\"4\" disabled></textarea>\n            </div>\n\n          </div>\n\n        </ng-template>\n        &nbsp;&nbsp;\n        <button type=\"button\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill\"\n          data-toggle=\"m-tooltip\" title=\"Edit\" (click)=\"open(user,'edit')\">\n          <i class=\"fas fa-edit\"></i>\n        </button> &nbsp;&nbsp;\n        <button type=\"button\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill\"\n          data-toggle=\"m-tooltip\" data-placement=\"top\" title=\"Delete\" (click)=\"delete(user._id)\">\n          <i class=\"fas fa-trash-alt\"></i>\n        </button>\n\n\n      </td>\n    </tr>\n  </tbody>\n</table>\n<script>\n    $(document).ready(function(){\n        $('[data-toggle=\"m-tooltip\"]').tooltip();   \n    });\n    </script>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/user.component.ts ***!
  \********************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/theme/pages/default/angular/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











function _window() {
    // return the global native browser window object
    return window;
}
var UserComponent = /** @class */ (function () {
    function UserComponent(modalService, location, toastService, _formBuilder, userService, _script, spinnerService, router) {
        var _this = this;
        this.modalService = modalService;
        this.location = location;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this._script = _script;
        this.spinnerService = spinnerService;
        this.router = router;
        this.isAdd = false;
        this.loading = false;
        this.submitted = false;
        this.isView = false;
        this.userService.getUsers().subscribe(function (data) {
            _this.usersList = data.usersList.data;
        });
    }
    UserComponent.prototype.ngAfterViewInit = function () {
        var scripts = [];
        if (!_window().isScriptLoadedUsermgmt) {
            scripts = ['assets/vendors/custom/datatables/datatables.bundle.js'];
        }
        var that = this;
        this._script.loadScripts('app-user', scripts).then(function () {
            _window().isScriptLoadedUsermgmt = true;
            that._script.loadScripts('app-user', ['assets/demo/default/custom/crud/datatables/basic/paginations.js']);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        _window().my = _window().my || {};
        _window().my.usermgmt = _window().my.usermgmt || {};
        if (typeof (_window().isScriptLoadedUsermgmt) == "undefined") {
            _window().isScriptLoadedUsermgmt = false;
        }
        this.getUserList();
    };
    UserComponent.prototype.open = function (content, type) {
        if (!content) {
            this.isAdd = true;
        }
        else {
            if (type == 'view') {
                this.isView = true;
                this.isAdd = false;
            }
            else {
                this.isAdd = false;
                this.isView = false;
            }
        }
        var modalRef = this.modalService.open(_add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_0__["AddEditUserComponent"]);
        modalRef.componentInstance.id = content ? content._id : "";
        modalRef.componentInstance.name = content ? content.name : "";
        modalRef.componentInstance.password = content ? content.password : "";
        modalRef.componentInstance.email = content ? content.email : "";
        modalRef.componentInstance.deviceId = content ? content.deviceId : "";
        modalRef.componentInstance.deviceType = content ? content.deviceType : "";
        modalRef.componentInstance.fcmToken = content ? content.fcmToken : "";
        modalRef.componentInstance.isAdd = this.isAdd;
        modalRef.componentInstance.isView = this.isView;
    };
    // All User Display Method
    UserComponent.prototype.getUserList = function () {
        var _this = this;
        this.spinnerService.show();
        this.userService.getAllUsers().subscribe(function (response) {
            _this.usersList = response.data;
            _this.spinnerService.hide();
        }, function (error) {
            console.log(error);
            // this.spinnerService.show();
            // if (error.status == 0) {
            //   this.spinnerService.hide();
            //   swal({
            //     type: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            //     showConfirmButton: false,
            //     timer: 1500
            //   })
            // }
        });
    };
    UserComponent.prototype.viewUser = function (user) {
        this.modalReference = this.modalService.open(user);
    };
    UserComponent.prototype.delete = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#49a558',
            cancelButtonColor: '#a73a08',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.userService.deleteUser(id).subscribe(function (data) {
                    _this.getUserList();
                    if (data['code'] == 200) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Deleted!', 'Your file has been deleted.', 'success');
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                            type: 'error',
                            text: data['message']
                        });
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                        type: 'error',
                        text: error['message']
                    });
                });
            }
        });
    };
    UserComponent.prototype.validateForm = function () {
        if (this.userForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/theme/pages/default/angular/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/theme/pages/default/angular/user/user.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_8__["ScriptLoaderService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/user.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/user.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/theme/pages/default/angular/user/user.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/theme/pages/default/angular/user/user.service.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.routing */ "./src/app/theme/pages/default/angular/user/user.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/theme/pages/default/angular/user/add-edit-user/add-edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
        children: [
            {
                path: "",
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
            }
        ]
    },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _user_routing__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
            ],
            exports: [_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"], _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["AddEditUserComponent"]],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"], _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["AddEditUserComponent"]],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],],
            entryComponents: [_add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["AddEditUserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/user.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/user.routing.ts ***!
  \******************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/theme/pages/default/angular/user/user.component.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_1__["DefaultComponent"],
        children: [
            {
                path: '',
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
            },
        ]
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [],
            providers: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/user/user.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/user/user.service.ts ***!
  \******************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserService.prototype.setUsers = function (data) {
        this.usersList.next({ usersList: data });
    };
    UserService.prototype.getUsers = function () {
        return this.usersList.asObservable();
    };
    UserService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        var token = JSON.parse(localStorage.getItem('_token'));
        headers = headers.set('Authorization', token);
        return headers;
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/addUser', user, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/getUserList', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    UserService.prototype.editUser = function (user, id) {
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/updateUser/' + id, user, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/deleteUser/' + id, {}, { headers: this.getHeaderWithToken() })
            .map(function (res) {
            return res;
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-user-user-module.js.map