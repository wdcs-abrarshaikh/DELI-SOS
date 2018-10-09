(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-terms-conditions-terms-conditions-module"],{

/***/ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    background-color: transparent;\n    background: #5867dd;\n    border-color: #5867dd;\n    margin-left: 95%;\n    margin-top:2%;\n}\n\n\n.btn-edit{\n    color:white;\n    width:80px;\n    background: #2e85a0;\n    border-radius: 25%;\n    opacity: 0.6;\n}\n\n\n.btn-edit:hover{opacity: 1;}\n\n\n.btn-edit:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n\n.btn-delete{\n    color:white;\n    width:80px;\n    background: #a73a08;\n    opacity: 0.6;\n    border-radius: 25%;\n}\n\n\n.btn-delete:hover{opacity: 1;}\n\n\n.btn-save{\n    color:white;\n    width:80px;\n    background: #49a558;\n   \n    border-radius: 25%;\n    opacity: 0.6;\n}\n\n\n.btn-save:hover{opacity: 1;}\n\n\n.btn-save:active {\n  background-color: #509952;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n\n.header{\n    font-size: 3.15rem;\n    margin-left: 25%;\n    padding: 1.25rem 4.65rem;\n   }\n\n\n.ngx-editor {\n    height: auto !important;\n    min-height: 250px !important;\n}\n\n\n.lbl-err {\n    color: red;\n }\n\n\n.banner-image {\n    /* height: 85px; */\n    width: 130px;\n    margin-left: 122px;\n }\n\n\n.btn-del{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    margin-right:45px;\n background-color: transparent;\n background: #a73a08;\n    border-color: #a73a08;\n }\n\n\n:host app-ngx-editor /deep/ .ngx-editor-textarea {\n    height:500px !important;\n }\n\n\n#commonCms{\n    padding-top: 5%; \n    padding-right: 10%;\n    padding-left: 10%;\n }\n\n\n#customBtns{\n     float: right;\n     margin-right:10%;\n     padding: 5px;\n\n }\n\n\n.mrgRight5{\n     margin-right: 8px;\n }\n"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"termConditionForm\" [formGroup]=\"termConditionForm\" (ngSubmit)=\"onSubmit()\">\n\n  <h2 class=\"header\">Terms And Conditions</h2>\n  <div id='commonCms'>\n    <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" formControlName=\"content\" [(ngModel)]=\"termsConditionLists\"\n      [config]=\"editorConfig\"></app-ngx-editor>\n\n  </div>\n  <div id='customBtns'>\n    <div *ngIf=\"editorConfig.editable;else save;\">\n      <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-ark mrgRight5 btn-save\" (click)=\"addTermCondition()\">Save</button>\n      <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-ark btn-delete\" (click)=\"cancelTermCondition()\">Cancel</button>\n\n    </div>\n  </div>\n  <ng-template #save>\n    <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark mrgRight5 btn-edit\" (click)=\"addTermCondition()\">Edit</button>\n    <button type=\"button\" [disabled]=\"loading\" class=\"btn btn-outline-dark btn-delete\" (click)=\"delete(content)\">Delete</button>\n\n  </ng-template>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"modal-custom-body\">\n        <img class=\"banner-image\" src=\"./assets/app/media/img/users/delete-icn.svg\"><br><br>\n        <p style=\"text-align: center\">Are you sure you want to delete this record?</p>\n      </div>\n      <div class=\"text-center mt-4\">\n        <button type=\"button\" class=\"btn-del\" (click)=\"deleteTermsConditions(id)\">Delete</button>\n      </div>\n    </div>\n  </ng-template>\n\n</form>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _terms_conditions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.service */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.service.ts");
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





var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent(modalService, toastService, _formBuilder, termConditionService) {
        var _this = this;
        this.modalService = modalService;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.termConditionService = termConditionService;
        this.isAdd = false;
        this.loading = false;
        this.submitted = false;
        this.editorConfig = {
            editable: false,
        };
        this.termConditionService.getTermCondition().subscribe(function (data) {
            _this.termsConditionLists = data.termConditionList.content;
        });
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
        this.buildTermConditionForm();
        this.getTermsConditionList();
    };
    TermsConditionsComponent.prototype.buildTermConditionForm = function () {
        this.termConditionForm = this._formBuilder.group({
            id: '',
            content: '',
        });
    };
    TermsConditionsComponent.prototype.addTermCondition = function () {
        var _this = this;
        if (this.editorConfig.editable)
            this.editorConfig.editable = false;
        else
            this.editorConfig.editable = true;
        var editObj = {
            "content": this.termConditionForm.controls['content'].value,
        };
        this.termConditionService.editTermCondition(editObj, this.id).subscribe(function (data) {
            if (!_this.editorConfig.editable) {
                _this.toastService.success(data['response'].responseMessage);
            }
            _this.getAllTermsConditions();
        }, function (error) {
            _this.toastService.error(error['error'].message);
        });
    };
    TermsConditionsComponent.prototype.cancelTermCondition = function () {
        this.editorConfig.editable = false;
        this.getAllTermsConditions();
    };
    TermsConditionsComponent.prototype.getTermsConditionList = function () {
        var _this = this;
        this.termConditionService.getAllTermCondition().subscribe(function (response) {
            _this.termsConditionLists = response.response.result.content;
            _this.id = response.response.result._id;
        });
    };
    Object.defineProperty(TermsConditionsComponent.prototype, "f", {
        get: function () {
            return this.termConditionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TermsConditionsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.termConditionForm.invalid) {
            return;
        }
        this.loading = true;
    };
    TermsConditionsComponent.prototype.deleteTermsConditions = function (id) {
        var _this = this;
        this.termConditionService.deleteTermCondition(this.id).subscribe(function (data) {
            _this.modalReference.close();
            _this.toastService.success(data['response'].responseMessage);
            _this.termConditionService.getAllTermCondition().subscribe(function (response) {
                _this.termConditionService.setTermCondition(response.response.result);
            });
        }, function (error) {
            _this.toastService.error(error.errors);
        });
    };
    TermsConditionsComponent.prototype.delete = function (content) {
        this.modalReference = this.modalService.open(content);
    };
    TermsConditionsComponent.prototype.getAllTermsConditions = function () {
        var _this = this;
        this.termConditionService.getAllTermCondition().subscribe(function (response) {
            _this.termConditionService.setTermCondition(response.response.result);
        });
    };
    TermsConditionsComponent.prototype.validateForm = function () {
        if (this.termConditionForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TermsConditionsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TermsConditionsComponent.prototype, "content", void 0);
    TermsConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.css */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _terms_conditions_service__WEBPACK_IMPORTED_MODULE_1__["TermsConditionsService"]])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TermConditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermConditionModule", function() { return TermConditionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _terms_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms-conditions.component */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _terms_conditions_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms-conditions.routing */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.routing.ts");
/* harmony import */ var _terms_conditions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./terms-conditions.service */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.service.ts");
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
                component: _terms_conditions_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionsComponent"]
            }]
    }];
var TermConditionModule = /** @class */ (function () {
    function TermConditionModule() {
    }
    TermConditionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _terms_conditions_routing__WEBPACK_IMPORTED_MODULE_9__["TermsConditionsRoutingModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_terms_conditions_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionsComponent"]],
            declarations: [_terms_conditions_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionsComponent"]],
            providers: [_terms_conditions_service__WEBPACK_IMPORTED_MODULE_10__["TermsConditionsService"]],
            entryComponents: []
        })
    ], TermConditionModule);
    return TermConditionModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.routing.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.routing.ts ***!
  \******************************************************************************************/
/*! exports provided: TermsConditionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsRoutingModule", function() { return TermsConditionsRoutingModule; });
/* harmony import */ var _terms_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.component */ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.component.ts");
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
                component: _terms_conditions_component__WEBPACK_IMPORTED_MODULE_0__["TermsConditionsComponent"],
            }]
    }];
var TermsConditionsRoutingModule = /** @class */ (function () {
    function TermsConditionsRoutingModule() {
    }
    TermsConditionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [],
            providers: []
        })
    ], TermsConditionsRoutingModule);
    return TermsConditionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/terms-conditions/terms-conditions.service.ts ***!
  \******************************************************************************************/
/*! exports provided: TermsConditionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsService", function() { return TermsConditionsService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = "http://66.70.179.133:4009/solow/v2/api/admin/";
var URLS = "http://66.70.179.133:4009/solow/v2/api/user/";
var TermsConditionsService = /** @class */ (function () {
    function TermsConditionsService(http) {
        this.http = http;
        this.termConditionList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    TermsConditionsService.prototype.setTermCondition = function (data) {
        this.termConditionList.next({ termConditionList: data });
    };
    TermsConditionsService.prototype.getTermCondition = function () {
        return this.termConditionList.asObservable();
    };
    TermsConditionsService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')));
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    TermsConditionsService.prototype.addTermCondition = function (about) {
        var id = localStorage.getItem('currentUser');
        var admin_id = JSON.parse(id);
        return this.http.post(URL + 'createTermCondition/' + admin_id, about, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    TermsConditionsService.prototype.getAllTermCondition = function () {
        return this.http.get(URLS + 'termsConditions')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    TermsConditionsService.prototype.editTermCondition = function (about, id) {
        var admin_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put(URL + 'editTermCondition/' + id + '/' + admin_id, about, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    TermsConditionsService.prototype.deleteTermCondition = function (id) {
        var admin_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.put(URL + 'deleteTermCondition/' + id + '/' + admin_id, {}, { headers: this.getHeaderWithToken() })
            .map(function (res) {
            return res;
        });
    };
    TermsConditionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TermsConditionsService);
    return TermsConditionsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-terms-conditions-terms-conditions-module.js.map