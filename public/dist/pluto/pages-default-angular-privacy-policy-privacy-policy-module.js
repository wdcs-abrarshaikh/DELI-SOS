(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-privacy-policy-privacy-policy-module"],{

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    background-color: transparent;\n    background: linear-gradient(to right, #fc4a1a, #f7b733);\n    margin-left: 95%;\n    margin-top:2%;\n}\n\n\n.header{\n    font-size: 3.15rem;\n   \n    padding: 1.25rem 4.65rem;\n    text-align: center;\n}\n\n\n.btn-edit{\n    color:white;\n    width:80px;\n    background: #2e85a0;\n       border-radius: 25%;\n    opacity: 0.6;\n}\n\n\n.btn-edit:hover{opacity: 1;}\n\n\n.btn-edit:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n\n.btn-delete{\n    color:white;\n    width:80px;\n    background: #a73a08;\n    opacity: 0.6;\n    border-radius: 25%;\n}\n\n\n.btn-delete:hover{opacity: 1;}\n\n\n.btn-save{\n    color:white;\n    width:80px;\n    background: #49a558;\n   \n    border-radius: 25%;\n    opacity: 0.6;\n}\n\n\n.btn-save:hover{opacity: 1;}\n\n\n.btn-save:active {\n  background-color: #509952;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n\n.ngx-editor {   \n    height: auto !important;\n    min-height: 250px !important;\n}\n\n\n.lbl-err {\n    color: red;\n }\n\n\n.banner-image {\n    /* height: 85px; */\n    width: 130px;\n    margin-left: 122px;\n }\n\n\n.btn-del{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    margin-right:45px;\n    background: #a73a08;\n\n }\n\n\n:host app-ngx-editor /deep/ .ngx-editor-textarea {\n    height:500px !important;\n }\n\n\n#commonCms{\n    padding-top: 5%; \n    padding-right: 10%;\n    padding-left: 10%;\n }\n\n\n#customBtns{\n     float: right;\n     margin-right:10%;\n     padding: 5px;\n }\n\n\n.mrgRight5{\n     margin-right: 8px;\n }"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">Privacy Policy</h2>\n\n<button class=\"btn-add\" (click)=\"add(content )\" ><i class=\"fas fa-plus\"></i></button>\n\n<form name=\"privacyPolicyForm\" [formGroup]=\"privacyPolicyForm\" (ngSubmit)=\"onSubmit()\">\n \n  <div id='commonCms'>\n    <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" formControlName=\"content\" [(ngModel)]=\"privacyPolicyLists\"\n      [config]=\"editorConfig\"></app-ngx-editor>\n\n  </div>\n\n  <div id='customBtns'>\n    <div *ngIf=\"editorConfig.editable;else save;\">\n      <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark mrgRight5 btn-save\" (click)=\"addPrivacyPolicy()\">Save</button>\n      <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark btn-delete\" (click)=\"cancelPrivacyPolicy()\">Cancel</button>\n\n    </div>\n  </div>\n  <ng-template #save>\n    <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark mrgRight5 btn-edit\" (click)=\"addPrivacyPolicy()\">Edit</button>\n    <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark btn-delete\" (click)=\"delete(content)\">Delete</button>\n\n  </ng-template>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"modal-custom-body\">\n        <img class=\"banner-image\" src=\"./assets/app/media/img/users/delete-icn.svg\"><br><br>\n        <p style=\"text-align: center\">Are you sure you want to delete this record?</p>\n      </div>\n      <div class=\"text-center mt-4\">\n        <button type=\"button\" class=\"btn-del\" (click)=\"deletePrivacyPolicy(id)\">Delete</button>\n      </div>\n    </div>\n  </ng-template>\n\n</form>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NgbdModalContent, PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _privacy_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.service */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(modalService, toastService, _formBuilder, privacyPolicyService, activeModal) {
        // this.privacyPolicyService.getPrivacyPolicy().subscribe((data: any) => {
        //   this.privacyPolicyLists = data.privacyPolicyList.content;
        this.modalService = modalService;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.privacyPolicyService = privacyPolicyService;
        this.activeModal = activeModal;
        this.loading = false;
        this.submitted = false;
        // })
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        this.buildPrivacyForm();
    };
    Object.defineProperty(NgbdModalContent.prototype, "f", {
        get: function () {
            return this.privacyForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    NgbdModalContent.prototype.buildPrivacyForm = function () {
        this.privacyForm = this._formBuilder.group({
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    NgbdModalContent.prototype.getAllPrivacyPolicy = function () {
        var _this = this;
        this.privacyPolicyService.getAllPrivacyPolicy().subscribe(function (response) {
            console.log("get response", response);
            _this.privacyPolicyService.setPrivacyPolicy(response.data);
        });
    };
    // getPrivacyPolicyList() {
    //   this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
    //     this.privacyPolicyLists = response.response.result.content;
    //     this.id = response.response.result._id;
    //   });
    // }
    NgbdModalContent.prototype.addContent = function () {
        var _this = this;
        var addObj = {
            "content": this.privacyForm.controls['content'].value,
        };
        if (this.isAdd) {
            this.privacyPolicyService.addPrivacyPolicy(addObj).subscribe(function (data) {
                _this.getAllPrivacyPolicy();
                _this.activeModal.dismiss();
                _this.toastService.success(data['message']);
            }, function (error) {
                _this.toastService.error(error['message']);
            });
        }
    };
    NgbdModalContent.prototype.validateForm = function () {
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
    ], NgbdModalContent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "content", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: " <div class=\"modal-header\">\n  <h4 class=\"modal-title\"> Add Content</h4>  \n   <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n<form [formGroup]=\"privacyForm\" (ngSubmit)=\"addContent()\">\n            <div class=\"form-group\">\n                <label for=\"name\">Content</label>\n                <textarea name=\"message\" rows=\"10\" cols=\"30\" formControlName=\"content\" [(ngModel)]=\"content\" class=\"form-control\"></textarea>\n                <p *ngIf=\"privacyForm.controls.content.errors?.required && (privacyForm.controls.content.dirty || privacyForm.controls.content.touched)\" class=\"lbl-err\">Content is required.</p>\n             </div>\n         <div class=\"modal-footer\">\n            <div class=\"form-group\">\n           <button type=\"submit\"  class=\"btn btn-outline-dark\" [disabled]=\"validateForm()\">Save</button>&nbsp;&nbsp;\n           <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n            </div>\n         </div>\n        </form>",
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _privacy_policy_service__WEBPACK_IMPORTED_MODULE_1__["PrivacyPolicyService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(modalService, toastService, _formBuilder, privacyPolicyService) {
        var _this = this;
        this.modalService = modalService;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.privacyPolicyService = privacyPolicyService;
        this.isAdd = false;
        this.loading = false;
        this.submitted = false;
        this.editorConfig = {
            editable: false,
        };
        this.privacyPolicyService.getPrivacyPolicy().subscribe(function (data) {
            _this.privacyPolicyLists = data.privacyPolicyList.content;
        });
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.buildprivacyPolicyForm();
        // this.getPrivacyPolicyList();
    };
    PrivacyPolicyComponent.prototype.buildprivacyPolicyForm = function () {
        this.privacyPolicyForm = this._formBuilder.group({
            id: '',
            content: '',
        });
    };
    PrivacyPolicyComponent.prototype.addPrivacyPolicy = function () {
        var _this = this;
        if (this.editorConfig.editable)
            this.editorConfig.editable = false;
        else
            this.editorConfig.editable = true;
        var editObj = {
            "content": this.privacyPolicyForm.controls['content'].value,
        };
        this.privacyPolicyService.editPrivacyPolicy(editObj, this.id).subscribe(function (data) {
            if (!_this.editorConfig.editable) {
                _this.toastService.success(data['response'].responseMessage);
            }
            // this.getAllPrivacyPolicy();
        }, function (error) {
            _this.toastService.error(error['error'].message);
        });
    };
    PrivacyPolicyComponent.prototype.validateForm = function () {
        if (this.privacyPolicyForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    Object.defineProperty(PrivacyPolicyComponent.prototype, "f", {
        // getAllPrivacyPolicy() {
        //   this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
        //     this.privacyPolicyService.setPrivacyPolicy(response.response.result);
        //   })
        // }
        // getPrivacyPolicyList() {
        //   this.privacyPolicyService.getAllPrivacyPolicy().subscribe((response: any) => {
        //     this.privacyPolicyLists = response.response.result.content;
        //     this.id = response.response.result._id;
        //   });
        // }
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
    PrivacyPolicyComponent.prototype.deletePrivacyPolicy = function (id) {
        var _this = this;
        this.privacyPolicyService.deletePrivacyPolicy(this.id).subscribe(function (data) {
            _this.modalReference.close();
            _this.toastService.success(data['response'].responseMessage);
            _this.privacyPolicyService.getPrivacyPolicy().subscribe(function (response) {
                _this.privacyPolicyService.setPrivacyPolicy(response);
            });
        }, function (error) {
            _this.toastService.error(error.errors);
        });
    };
    PrivacyPolicyComponent.prototype.delete = function (content) {
        this.modalReference = this.modalService.open(content);
    };
    PrivacyPolicyComponent.prototype.cancelPrivacyPolicy = function () {
        this.editorConfig.editable = false;
        // this.getAllPrivacyPolicy();
    };
    PrivacyPolicyComponent.prototype.add = function (content) {
        if (!content) {
            this.isAdd = false;
        }
        else {
            this.isAdd = true;
        }
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.id = content ? content._id : "";
        modalRef.componentInstance.content = content ? content.content : "";
        modalRef.componentInstance.isAdd = this.isAdd;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrivacyPolicyComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrivacyPolicyComponent.prototype, "content", void 0);
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _privacy_policy_service__WEBPACK_IMPORTED_MODULE_1__["PrivacyPolicyService"]])
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
            exports: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"], _privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"]],
            declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"], _privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"]],
            providers: [_privacy_policy_service__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyService"]],
            entryComponents: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"]]
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
        this.privacyPolicyList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    PrivacyPolicyService.prototype.setPrivacyPolicy = function (data) {
        this.privacyPolicyList.next({ privacyPolicyList: data });
    };
    PrivacyPolicyService.prototype.getPrivacyPolicy = function () {
        return this.privacyPolicyList.asObservable();
    };
    PrivacyPolicyService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('_token')));
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    PrivacyPolicyService.prototype.addPrivacyPolicy = function (about) {
        console.log("in service", about);
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'admin/addPrivacyPolicy', about, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PrivacyPolicyService.prototype.getAllPrivacyPolicy = function () {
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'admin/privacyPolicyList')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PrivacyPolicyService.prototype.editPrivacyPolicy = function (about, id) {
        var user_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'editPrivacyPolicy/' + id + '/' + user_id, about, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PrivacyPolicyService.prototype.deletePrivacyPolicy = function (id) {
        var user_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_4__["URL"] + 'deletePrivacyPolicy/' + id + '/' + user_id, {}, { headers: this.getHeaderWithToken() })
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