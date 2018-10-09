(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-email-templates-email-templates-module"],{

/***/ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/email-templates/email-templates.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    font-size: 3.15rem;\n    margin-left: 30%;\n    padding: 1.25rem 4.65rem;\n   }\n.btn-add{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    background-color: transparent;\n    background: #5867dd;\n    border-color: #5867dd;\n    margin-left: 95%;\n    margin-top:2%;\n}\n.btn-view{\n    color:white;\n    background-color: transparent;\n    background: #5867dd;\n    border-color: #5867dd;\n}\n.btn-edit{\n    color:white;\n    background-color: transparent;\n    background: #029c16;\n    border-color:  #029c16;\n\n}\n.btn-delete{\n    color:white;\n    background-color: transparent;\n    background: #a73a08;\n    border-color: #a73a08;\n\n}\n.ngx-editor {\n    height: auto !important;\n    min-height: 250px !important;\n}\n.lbl-err {\n    color: red;\n } \n"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/email-templates/email-templates.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">Email Templates</h2>\n\n<div>\n  <button class=\"btn-add\" (click)=\"open()\"><i class=\"fas fa-plus\"></i></button>\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th style=\"width:350px\"></th>\n        <th style=\"width:350px\">Name</th>\n        <th style=\"width:350px\">Content</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let email of emailsList\">\n        <td></td>\n        <td>{{email.name}}</td>\n        <td>{{email.content | customPipe}}</td>\n        <td>\n          <button type=\"button\" class=\"btn-view\">\n            <i class=\"fas fa-eye\" (click)=\"viewContent(viewEmail)\"></i>\n          </button> &nbsp;&nbsp;\n          <ng-template #viewEmail let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">View Email Templates</h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <label>Content</label>\n              <div class=\"form-group\">\n                <app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"email.content\"\n                  [config]=\"editorConfig\"></app-ngx-editor>\n              </div>\n            </div>\n          </ng-template>\n\n          <button type=\"button\" class=\"btn-edit\">\n            <i class=\"fas fa-edit\" (click)=\"open(email)\"></i>\n          </button> &nbsp;&nbsp;\n          <button type=\"button\" class=\"btn-delete\" (click)=\"delete(content)\">\n            <i class=\"fas fa-trash-alt\"></i>\n          </button>\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-body\">\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <div class=\"modal-body\">\n                <img class=\"banner-image\" src=\"./assets/app/media/img/users/delete-icn.svg\" height=\"60\">\n                <p>Are you sure you want to delete this record?</p>\n              </div>\n              <div class=\"text-center mt-4\">\n                <button type=\"button\" class=\"btn btn-red\" (click)=\"deleteEmail(email._id)\">Delete</button>\n              </div>\n            </div>\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/email-templates/email-templates.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NgbdModalContent, EmailTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplatesComponent", function() { return EmailTemplatesComponent; });
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.service */ "./src/app/theme/pages/default/angular/email-templates/email.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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
    function NgbdModalContent(activeModal, _router, _formBuilder, modalService, emailService, toastService) {
        this.activeModal = activeModal;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.emailService = emailService;
        this.toastService = toastService;
        this.availableEmailTemplates = [];
        this.emailsList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
        this.submitted = false;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        this.buildEmailForm();
    };
    Object.defineProperty(NgbdModalContent.prototype, "f", {
        get: function () {
            return this.emailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    NgbdModalContent.prototype.buildEmailForm = function () {
        this.emailForm = this._formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            content: '',
        });
    };
    NgbdModalContent.prototype.getAvailableEmailTemplates = function () {
        var _this = this;
        this.emailService.getAvailableEmailTemplate().subscribe(function (data) {
            _this.availableEmailTemplates = data['response'];
        }, function (err) {
            console.log(err);
        });
    };
    NgbdModalContent.prototype.addEmails = function () {
        var _this = this;
        if (this.isAdd) {
            var addObj = {
                "id": this.emailForm.controls['id'].value,
                "name": this.emailForm.controls['name'].value,
                "content": this.emailForm.controls['content'].value,
            };
            this.getAvailableEmailTemplates();
            this.emailService.addEmail(addObj).subscribe(function (data) {
                _this.getAllEmail();
                _this.getAvailableEmailTemplates();
                _this.activeModal.dismiss();
                _this.toastService.success(data['response'].responseMessage);
            }, function (error) {
                console.log('error' + error);
                _this.toastService.error(error['response'].responseMessage);
            });
        }
        else {
            var editObj = {
                "id": this.emailForm.controls['id'].value,
                "name": this.emailForm.controls['name'].value,
                "content": this.emailForm.controls['content'].value,
            };
            console.log('id', this.id);
            this.emailService.editEmails(editObj, this.id).subscribe(function (data) {
                _this.getAvailableEmailTemplates();
                _this.getAllEmail();
                _this.activeModal.dismiss();
                _this.toastService.success(data['response'].responseMessage);
            }, function (error) {
                console.log('error' + error);
                _this.toastService.error(error['response'].responseMessage);
            });
        }
    };
    // <label>Name</label>
    // <div class="form-group"> <input class="form-control m-input" type="text" formControlName="name"  [(ngModel)]="name"> 
    // <span *ngIf="emailForm.controls.name.errors?.required" class="lbl-err">Name is required.</span>
    // </div><br>
    NgbdModalContent.prototype.getAllEmail = function () {
        var _this = this;
        this.emailService.getAllEmails().subscribe(function (response) {
            _this.emailService.setEmails(response);
        });
    };
    NgbdModalContent.prototype.validateForm = function () {
        if (this.emailForm.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    NgbdModalContent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.emailForm.invalid) {
            return;
        }
        this.loading = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "emailsList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "id", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-templates',
            template: "\n  <div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ isAdd ? 'Add' :'Edit'}} Email Templates</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n<form  name=\"emailForm\" [formGroup]=\"emailForm\" (ngSubmit)=\"addEmails()\" >\n\n\n<label>Content</label>\n<div class=\"form-group\"><app-ngx-editor [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" formControlName=\"content\" [(ngModel)]=\"content\"></app-ngx-editor>\n\n</div>\n\n\n<div class=\"modal-footer\">\n<button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"validateForm()\">Save</button>\n<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n\n</div>\n</form>\n",
            styles: [__webpack_require__(/*! ./email-templates.component.css */ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _email_service__WEBPACK_IMPORTED_MODULE_0__["EmailService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var EmailTemplatesComponent = /** @class */ (function () {
    function EmailTemplatesComponent(modalService, location, toastService, _formBuilder, emailService) {
        var _this = this;
        this.modalService = modalService;
        this.location = location;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.emailService = emailService;
        this.isAdd = false;
        this.isView = false;
        this.isEdit = false;
        this.loading = false;
        this.submitted = false;
        this.editorConfig = {
            editable: false,
            spellcheck: true,
            height: '30rem',
            minHeight: '10rem',
            placeholder: 'Type something. Test the Editor... ヽ(^。^)丿'
        };
        this.emailService.getEmails().subscribe(function (data) {
            console.log('dataaaaa', data);
            _this.emailsList = data.emailList.response.LIST;
        });
    }
    EmailTemplatesComponent.prototype.ngOnInit = function () {
        this.buildEmailForm();
        this.getEmailTemplatesList();
    };
    EmailTemplatesComponent.prototype.buildEmailForm = function () {
        this.emailForm = this._formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            content: '',
        });
    };
    EmailTemplatesComponent.prototype.getEmailTemplatesList = function () {
        var _this = this;
        this.emailService.getAllEmails().subscribe(function (response) {
            _this.emailsList = response.response.LIST;
            console.log("Email List detail", _this.emailsList);
        });
    };
    Object.defineProperty(EmailTemplatesComponent.prototype, "f", {
        get: function () {
            return this.emailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmailTemplatesComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.emailForm.invalid) {
            return;
        }
        this.loading = true;
    };
    EmailTemplatesComponent.prototype.open = function (contents) {
        console.log('content', contents);
        if (!contents) {
            this.isAdd = true;
        }
        else {
            this.isEdit = false;
        }
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.id = contents ? contents._id : "";
        modalRef.componentInstance.name = contents ? contents.name : "";
        modalRef.componentInstance.content = contents ? contents.content : "";
        modalRef.componentInstance.isAdd = this.isAdd;
    };
    EmailTemplatesComponent.prototype.view = function (emailContents) {
        if (!emailContents) {
            this.isView = true;
        }
        else {
            return false;
        }
        var modalRef = this.modalService.open(NgbdModalContent);
        // modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.id = emailContents ? emailContents._id : "";
        modalRef.componentInstance.name = emailContents ? emailContents.name : "";
        modalRef.componentInstance.content = emailContents ? emailContents.content : "";
        modalRef.componentInstance.isAdd = this.isAdd;
    };
    EmailTemplatesComponent.prototype.deleteEmail = function (id) {
        var _this = this;
        this.emailService.deleteEmails(id).subscribe(function (data) {
            _this.modalReference.close();
            console.log('datas..', data);
            _this.toastService.success(data['response'].responseMessage);
            // this.toastService.success(data);
            _this.emailService.getAllEmails().subscribe(function (response) {
                _this.emailService.setEmails(response);
            });
        }, function (error) {
            console.log('error' + error);
            _this.toastService.error(error.errors);
        });
    };
    EmailTemplatesComponent.prototype.delete = function (content) {
        this.modalReference = this.modalService.open(content);
    };
    EmailTemplatesComponent.prototype.viewContent = function (content) {
        this.modalReference = this.modalService.open(content);
    };
    EmailTemplatesComponent.prototype.validateForm = function () {
        if (this.emailForm.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EmailTemplatesComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EmailTemplatesComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EmailTemplatesComponent.prototype, "id", void 0);
    EmailTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-templates',
            template: __webpack_require__(/*! ./email-templates.component.html */ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.html"),
            styles: [__webpack_require__(/*! ./email-templates.component.css */ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _email_service__WEBPACK_IMPORTED_MODULE_0__["EmailService"]])
    ], EmailTemplatesComponent);
    return EmailTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/email-templates/email-templates.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/email-templates/email-templates.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EmailTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplatesModule", function() { return EmailTemplatesModule; });
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.service */ "./src/app/theme/pages/default/angular/email-templates/email.service.ts");
/* harmony import */ var _email_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.routing */ "./src/app/theme/pages/default/angular/email-templates/email.routing.ts");
/* harmony import */ var _email_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-templates.component */ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { CustomPipePipe } from '../../../../../../app/custom-pipe.pipe';
var routes = [{
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
        children: [{
                path: "",
                component: _email_templates_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplatesComponent"]
            }]
    }];
var EmailTemplatesModule = /** @class */ (function () {
    function EmailTemplatesModule() {
    }
    EmailTemplatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _email_routing__WEBPACK_IMPORTED_MODULE_1__["EmailRoutingModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: [_email_templates_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplatesComponent"], _email_templates_component__WEBPACK_IMPORTED_MODULE_2__["NgbdModalContent"]],
            declarations: [
                _email_templates_component__WEBPACK_IMPORTED_MODULE_2__["EmailTemplatesComponent"], _email_templates_component__WEBPACK_IMPORTED_MODULE_2__["NgbdModalContent"]
            ],
            providers: [_email_service__WEBPACK_IMPORTED_MODULE_0__["EmailService"]],
            entryComponents: [_email_templates_component__WEBPACK_IMPORTED_MODULE_2__["NgbdModalContent"]]
        })
    ], EmailTemplatesModule);
    return EmailTemplatesModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/email-templates/email.routing.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/email-templates/email.routing.ts ***!
  \******************************************************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var _email_templates_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-templates.component */ "./src/app/theme/pages/default/angular/email-templates/email-templates.component.ts");
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
        children: [
            {
                path: '',
                component: _email_templates_component__WEBPACK_IMPORTED_MODULE_0__["EmailTemplatesComponent"],
            }
        ]
    }];
var EmailRoutingModule = /** @class */ (function () {
    function EmailRoutingModule() {
    }
    EmailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [],
            providers: []
        })
    ], EmailRoutingModule);
    return EmailRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/email-templates/email.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/email-templates/email.service.ts ***!
  \******************************************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { URL } from './../../../../../app.service';




var URL = "http://localhost:4009/solow/v2/api/admin/";
var URLS = "http://66.70.179.133:4009/solow/v2/api/admin/";
var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.emailList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    EmailService.prototype.setEmails = function (data) {
        this.emailList.next({ emailList: data });
    };
    EmailService.prototype.getEmails = function () {
        return this.emailList.asObservable();
    };
    EmailService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')));
        return headers;
    };
    EmailService.prototype.addEmail = function (email) {
        var admin_id = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.post(URL + 'createEmailTemplate/' + admin_id, email, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    EmailService.prototype.getAllEmails = function () {
        return this.http.get(URL + 'getEmailTemplates/', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    EmailService.prototype.editEmails = function (email, email_id) {
        return this.http.put(URL + 'editEmailTemplate/' + email_id, email, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    EmailService.prototype.deleteEmails = function (email_id) {
        return this.http.put(URL + 'deleteEmailTemplate/' + email_id, {}, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    EmailService.prototype.getAvailableEmailTemplate = function () {
        return this.http.get(URLS + 'availableEmailTemplates', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-email-templates-email-templates-module.js.map