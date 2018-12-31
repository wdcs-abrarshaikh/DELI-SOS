(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-privacy-policy-privacy-policy-module"],{

/***/ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl-err{\n    color: red;\n}\n.btn-delete{\n    color:white;\n    width:80px;\n    background: #a73a08;\n    opacity: 1.5;\n    border-radius: 25%;\n}\n.btn-save{\n    color:white;\n    width:80px;\n    background: #49a558;\n     border-radius: 25%;\n    opacity: 1.5;\n}\n.btn:disabled {\n    opacity: .65;\n}\n:host app-ngx-editor .fa {\n    color:#000 !important;\n }\n.ngx-editor-button i.fa, .ngx-editor-button i.fas, .ngx-editor-button i.fa, .ngx-editor-button i.far {\n    color: inherit;\n    font-size: 18px;\n    width:32px;\n}"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\"> Add Content</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"privacyForm\" (ngSubmit)=\"addContent()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Content</label>\n      <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" formControlName=\"content\" [(ngModel)]=\"content\"\n        [config]=\"editorConfig\"></app-ngx-editor>\n          <div *ngIf=\"privacyForm.controls['content'].errors?.required &&  (privacyForm.controls['content'].dirty || privacyForm.controls['content'].touched)\"  class=\"lbl-err\">\n          Content is required.\n        </div>\n     </div>\n    <div class=\"modal-footer\">\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-save\" [disabled]=\"validateForm()\">Save</button>&nbsp;&nbsp;\n        <button type=\"button\" class=\"btn btn-delete\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n      </div>\n    </div>\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddPrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrivacyPolicyComponent", function() { return AddPrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _privacy_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privacy-policy.service */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPrivacyPolicyComponent = /** @class */ (function () {
    function AddPrivacyPolicyComponent(modalService, toastService, _formBuilder, privacyPolicyService, activeModal) {
        this.modalService = modalService;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.privacyPolicyService = privacyPolicyService;
        this.activeModal = activeModal;
        this.loading = false;
        this.submitted = false;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '30rem',
            minHeight: '5rem',
            templateOptions: {
                required: true,
                minLength: 5
            },
        };
    }
    AddPrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.buildPrivacyForm();
    };
    Object.defineProperty(AddPrivacyPolicyComponent.prototype, "f", {
        get: function () {
            return this.privacyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddPrivacyPolicyComponent.prototype.buildPrivacyForm = function () {
        this.privacyForm = this._formBuilder.group({
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddPrivacyPolicyComponent.prototype.getAllPrivacyPolicy = function () {
        var _this = this;
        this.privacyPolicyService.getAllPrivacyPolicy().subscribe(function (response) {
            _this.privacyPolicyService.setPrivacyPolicy(response.data);
        });
    };
    AddPrivacyPolicyComponent.prototype.addContent = function () {
        var _this = this;
        var addObj = {
            "content": this.privacyForm.controls['content'].value,
        };
        if (this.isAdd) {
            this.privacyPolicyService.addPrivacyPolicy(addObj).subscribe(function (data) {
                if (data['code'] == 201) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                        position: 'center',
                        type: 'success',
                        title: data['message'],
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                        type: 'error',
                        text: data['message']
                    });
                }
                _this.activeModal.dismiss();
                _this.getAllPrivacyPolicy();
            }, function (error) {
                _this.toastService.error(error['message']);
            });
        }
    };
    AddPrivacyPolicyComponent.prototype.validateForm = function () {
        if (this.privacyForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddPrivacyPolicyComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddPrivacyPolicyComponent.prototype, "content", void 0);
    AddPrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-privacy-policy',
            template: __webpack_require__(/*! ./add-privacy-policy.component.html */ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./add-privacy-policy.component.css */ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _privacy_policy_service__WEBPACK_IMPORTED_MODULE_1__["PrivacyPolicyService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], AddPrivacyPolicyComponent);
    return AddPrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add {\n    border-radius: 1.1rem;\n    padding: 1.0rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: .6;\n    color: white;\n    border-color: #e95e37;\n    margin-left: 88%;\n    margin-bottom: 16px;\n    background: linear-gradient(to right, #fc4a1a, #f7b733);\n}\n.header{\n    font-size: 3.15rem;\n   padding: 1.30rem 4.65rem;\n    text-align: center;\n}\n.btn-edit{\n    color:white;\n    width:80px;\n    background: #2e85a0;\n    border-radius: 25%;\n    opacity: 1;\n}\n.btn-edit:hover{opacity: 1;}\n.btn-edit:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n.btn-delete{\n    color:white;\n    width:80px;\n    background: #a73a08;\n    opacity: 1;\n    border-radius: 25%;\n}\n.btn-delete:hover{opacity: 1;}\n.btn-save{\n    color:white;\n    width:80px;\n    background: #49a558;\n     border-radius: 25%;\n    opacity: 1;\n}\n.btn-save:hover{opacity: 1;}\n.btn-save:active {\n  background-color: #509952;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n.ngx-editor {   \n    height: auto !important;\n    min-height: 250px !important;\n}\n.lbl-err {\n    color: red;\n }\n.banner-image {\n    /* height: 85px; */\n    width: 130px;\n    margin-left: 122px;\n }\n.btn-del{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    margin-right:45px;\n    background: #a73a08;\n\n }\n:host app-ngx-editor /deep/ .ngx-editor-textarea {\n    height:500px !important;\n }\n#commonCms{\n    padding-top: 5%; \n    padding-right: 7%;\n    padding-left: 7%;\n }\n#customBtns{\n     float: right;\n     margin-right:10%;\n     padding: 5px;\n }\n.mrgRight5{\n     margin-right: 8px;\n }\n.ngx-editor-textarea1 {\n    height:300px !important;\n \n }"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">Privacy Policy</h2>\n<button class=\"btn-add\" (click)=\"open()\" *ngIf=\"!initialprivacyPolicyLists\">Add</button>\n<form name=\"privacyPolicyForm\" [formGroup]=\"privacyPolicyForm\" (ngSubmit)=\"onSubmit()\">\n  <div *ngIf=\"initialprivacyPolicyLists\">\n    <div id='commonCms'>\n      <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" formControlName=\"content\" [(ngModel)]=\"privacyPolicyLists\"\n        [config]=\"editorConfig\"></app-ngx-editor>\n        <div *ngIf=\"privacyPolicyForm.controls['content'].errors?.required &&  (privacyPolicyForm.controls['content'].dirty || privacyPolicyForm.controls['content'].touched)\"  class=\"lbl-err\">\n            Content is required.\n          </div>\n    </div>\n\n    <div id='customBtns'>\n      <div *ngIf=\"editorConfig.editable;else save;\">\n        <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark mrgRight5 btn-save\" (click)=\"addPrivacyPolicy()\">Save</button>\n        <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark btn-delete\" (click)=\"cancelPrivacyPolicy()\">Cancel</button>\n\n      </div>\n    </div>\n    <ng-template #save>\n      <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark mrgRight5 btn-edit\" (click)=\"addPrivacyPolicy()\">Edit</button>\n      <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark btn-delete\" (click)=\"delete()\">Delete</button>\n\n    </ng-template>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _privacy_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy-policy.service */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_privacy_policy_add_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-privacy-policy/add-privacy-policy.component */ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(modalService, toastService, _formBuilder, privacyPolicyService, spinnerService) {
        var _this = this;
        this.modalService = modalService;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.privacyPolicyService = privacyPolicyService;
        this.spinnerService = spinnerService;
        this.isAdd = false;
        this.loading = false;
        this.submitted = false;
        this.editorConfig = {
            editable: false,
            spellcheck: true,
            height: '10rem',
            minHeight: '5rem',
            templateOptions: {
                required: true,
                minLength: 5
            },
        };
        this.privacyPolicyService.getPrivacyPolicy().subscribe(function (data) {
            if (data.privacyPolicyLists !== null) {
                _this.privacyPolicyLists = data.privacyPolicyLists.content;
                _this.initialprivacyPolicyLists = _this.privacyPolicyLists;
                _this.id = data.privacyPolicyLists._id;
            }
            else {
                _this.privacyPolicyLists = data.privacyPolicyLists;
                _this.initialprivacyPolicyLists = _this.privacyPolicyLists;
            }
        });
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.buildprivacyPolicyForm();
        this.getPrivacyPolicyList();
    };
    PrivacyPolicyComponent.prototype.buildprivacyPolicyForm = function () {
        this.privacyPolicyForm = this._formBuilder.group({
            id: '',
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    PrivacyPolicyComponent.prototype.addPrivacyPolicy = function () {
        var _this = this;
        if (this.editorConfig.editable) {
            this.editorConfig.editable = false;
            var editObj = {
                "content": this.privacyPolicyForm.controls['content'].value,
            };
            this.privacyPolicyService.editPrivacyPolicy(editObj, this.id).subscribe(function (data) {
                _this.getPrivacyPolicyList();
                if (!_this.editorConfig.editable) {
                    if (data['code'] == 200) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                            position: 'center',
                            type: 'success',
                            title: data['message'],
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                            type: 'error',
                            text: data['message']
                        });
                    }
                }
            }, function (error) {
                _this.toastService.error(error['error'].message);
            });
        }
        else {
            this.editorConfig.editable = true;
        }
    };
    PrivacyPolicyComponent.prototype.validateForm = function () {
        if (this.privacyPolicyForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    PrivacyPolicyComponent.prototype.getAllPrivacyPolicy = function () {
        var _this = this;
        this.spinnerService.show();
        this.privacyPolicyService.getAllPrivacyPolicy().subscribe(function (response) {
            _this.spinnerService.hide();
            _this.privacyPolicyService.setPrivacyPolicy(response.data);
        });
    };
    PrivacyPolicyComponent.prototype.getPrivacyPolicyList = function () {
        var _this = this;
        this.spinnerService.show();
        this.privacyPolicyService.getAllPrivacyPolicy().subscribe(function (response) {
            _this.spinnerService.hide();
            if (response.data !== null) {
                _this.privacyPolicyLists = response.data.content;
                _this.initialprivacyPolicyLists = _this.privacyPolicyLists;
                _this.id = response.data._id;
            }
            else {
                _this.initialprivacyPolicyLists = response.data;
            }
        });
    };
    Object.defineProperty(PrivacyPolicyComponent.prototype, "f", {
        get: function () {
            return this.privacyPolicyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PrivacyPolicyComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.privacyPolicyForm.invalid) {
            return;
        }
        this.loading = true;
    };
    PrivacyPolicyComponent.prototype.delete = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.privacyPolicyService.deletePrivacyPolicy(_this.id).subscribe(function (data) {
                    _this.getPrivacyPolicyList();
                    if (data['code'] == 200) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', data['message'], 'success');
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('error!', data['message'], 'success');
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('error!', error['message'], 'success');
                });
            }
        });
    };
    PrivacyPolicyComponent.prototype.cancelPrivacyPolicy = function () {
        this.editorConfig.editable = false;
        this.getAllPrivacyPolicy();
    };
    PrivacyPolicyComponent.prototype.open = function (content) {
        if (!content) {
            this.isAdd = true;
        }
        else {
            this.isAdd = false;
        }
        var modalRef = this.modalService.open(_add_privacy_policy_add_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["AddPrivacyPolicyComponent"]);
        modalRef.componentInstance.id = content ? content._id : "";
        modalRef.componentInstance.content = content ? content.content : "";
        modalRef.componentInstance.isAdd = this.isAdd;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PrivacyPolicyComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PrivacyPolicyComponent.prototype, "content", void 0);
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _privacy_policy_service__WEBPACK_IMPORTED_MODULE_2__["PrivacyPolicyService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_0__["Ng4LoadingSpinnerService"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PrivacyPolicyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function() { return PrivacyPolicyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy-policy.component */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _privacy_policy_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy-policy.routing */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.routing.ts");
/* harmony import */ var _privacy_policy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privacy-policy.service */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.service.ts");
/* harmony import */ var _add_privacy_policy_add_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-privacy-policy/add-privacy-policy.component */ "./src/app/theme/pages/default/angular/privacy-policy/add-privacy-policy/add-privacy-policy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        children: [{
                path: "",
                component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"]
            }]
    }];
var PrivacyPolicyModule = /** @class */ (function () {
    function PrivacyPolicyModule() {
    }
    PrivacyPolicyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _privacy_policy_routing__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyRoutingModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"], _add_privacy_policy_add_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__["AddPrivacyPolicyComponent"]],
            declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"], _add_privacy_policy_add_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__["AddPrivacyPolicyComponent"]],
            providers: [_privacy_policy_service__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyService"]],
            entryComponents: [_add_privacy_policy_add_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__["AddPrivacyPolicyComponent"]]
        })
    ], PrivacyPolicyModule);
    return PrivacyPolicyModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.routing.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.routing.ts ***!
  \**************************************************************************************/
/*! exports provided: PrivacyPolicyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyRoutingModule", function() { return PrivacyPolicyRoutingModule; });
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.component */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_1__["DefaultComponent"],
        children: [{
                path: '',
                component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__["PrivacyPolicyComponent"],
            }]
    }];
var PrivacyPolicyRoutingModule = /** @class */ (function () {
    function PrivacyPolicyRoutingModule() {
    }
    PrivacyPolicyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [],
            providers: []
        })
    ], PrivacyPolicyRoutingModule);
    return PrivacyPolicyRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.service.ts ***!
  \**************************************************************************************/
/*! exports provided: PrivacyPolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyService", function() { return PrivacyPolicyService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivacyPolicyService = /** @class */ (function () {
    function PrivacyPolicyService(http) {
        this.http = http;
        this.privacyPolicyLists = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    PrivacyPolicyService.prototype.setPrivacyPolicy = function (data) {
        this.privacyPolicyLists.next({ privacyPolicyLists: data });
    };
    PrivacyPolicyService.prototype.getPrivacyPolicy = function () {
        return this.privacyPolicyLists.asObservable();
    };
    PrivacyPolicyService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('_token')));
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    PrivacyPolicyService.prototype.addPrivacyPolicy = function (about) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'admin/addPrivacyPolicy', about, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PrivacyPolicyService.prototype.getAllPrivacyPolicy = function () {
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'admin/privacyPolicyList', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PrivacyPolicyService.prototype.editPrivacyPolicy = function (about, id) {
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'admin/updatePrivacyPolicy/' + id, about, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PrivacyPolicyService.prototype.deletePrivacyPolicy = function (id) {
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'admin/deletePrivacyPolicy/' + id, {}, { headers: this.getHeaderWithToken() })
            .map(function (res) {
            return res;
        });
    };
    PrivacyPolicyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PrivacyPolicyService);
    return PrivacyPolicyService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-privacy-policy-privacy-policy-module.js.map