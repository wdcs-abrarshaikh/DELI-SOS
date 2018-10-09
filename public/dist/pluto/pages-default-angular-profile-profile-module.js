(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-profile-profile-module"],{

/***/ "./src/app/theme/pages/default/angular/profile/profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/profile/profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/angular/profile/profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/profile/profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title\">My Profile</h3>\n\t\t</div>\n\n\t</div>\n</div>\n<!-- END: Subheader -->\n<div class=\"m-content\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-3 col-lg-4\">\n\t\t\t<div class=\"m-portlet m-portlet--full-height\">\n\n\t\t\t\t\t<form  name=\"profileForm\" [formGroup]=\"profileForm\">\n\t\t\t\n\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t<div class=\"m-card-profile\">\n\t\t\t\t\t\t<div class=\"m-card-profile__title m--hide\"> Your Profile </div>\n\t\t\t\t\t\t<div class=\"m-card-profile__pic\">\n\t\t\t\t\t\t\t<div class=\"m-card-profile__pic-wrapper\">\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<img [src]=\"profilesList\" [alt]=\"profilesList\" /> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-card-profile__details\">\n\t\t\t\t\t\t\t<span class=\"m-card-profile__name\">{{userName}}</span>\n              <a href=\"\" class=\"m-card-profile__email m-link\">{{userEmail}}</a>\n             \n            </div>\n          <br> <br><br><input type=\"file\" formControlName=\"imageUrl\"  [(ngModel)]=\"imageUrl\" (change)=\"handleInputChange($event)\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"m-nav m-nav--hover-bg m-portlet-fit--sides\">\n\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\n\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">Section</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xl-9 col-lg-8\">\n\t\t\t<div class=\"m-portlet m-portlet--full-height m-portlet--tabs\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-tools\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line   m-tabs-line--left m-tabs-line--primary\" role=\"tablist\">\n\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_user_profile_tab_1\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share m--hide\"></i> Update Profile </a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-portlet__head-tools\">\n\t\t\t\t\t\t<ul class=\"m-portlet__nav\">\n\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-portlet__nav-item--last\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t<div class=\"tab-pane active\" id=\"m_user_profile_tab_1\">\n\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\">\n\t\t\t\t\t\t\t<div class=\"m-portlet__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10 m--hide\">\n\t\t\t\t\t\t\t\t\t<div class=\"alert m-alert m-alert--default\" role=\"alert\"> The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional\n\t\t\t\t\t\t\t\t\t\tclasses. </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-10 ml-auto\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-form__section\"> Personal Details</h3>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form  name=\"profileForm\" [formGroup]=\"profileForm\">\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-text-input\" class=\"col-2 col-form-label\">Full Name</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" formControlName=\"fullName\"  [(ngModel)]=\"fullName\" value={{userName}}> </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-text-input\" class=\"col-2 col-form-label\">Email</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" formControlName=\"emailId\" [(ngModel)]=\"emailId\" value={{userEmail}}> </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\n\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-2\"> </div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-accent m-btn m-btn--air m-btn--custom\"(click)=\"editProfile()\">Save changes</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary m-btn m-btn--air m-btn--custom\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/profile/profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/profile/profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ "./src/app/theme/pages/default/angular/profile/profile.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(loginService, profileService, _formBuilder) {
        var _this = this;
        this.loginService = loginService;
        this.profileService = profileService;
        this._formBuilder = _formBuilder;
        this.profileService.getProfile().subscribe(function (data) {
            _this.userName = data.response.data.fullName;
            _this.userEmail = data.response.data.emailId;
            _this.profilesList = data.response.data.imageUrl;
            _this.personalInfo = data.response.data;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.buildProfileForm();
        this.getInfo();
    };
    ProfileComponent.prototype.buildProfileForm = function () {
        this.profileForm = this._formBuilder.group({
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            imageUrl: [''],
            gender: '',
        });
    };
    ProfileComponent.prototype.getInfo = function () {
        var _this = this;
        this.profileService.getProfile().subscribe(function (response) {
            _this.personalInfo = response.response.data;
        }, function (error) {
            console.log('error' + error);
        });
    };
    ProfileComponent.prototype.uploadProfileImage = function (image) {
        var _this = this;
        var data = {
            "file": image
        };
        this.profileService.uploadPic(data).subscribe(function (response) {
            _this.profilesList = response.response.url;
        }, function (error) {
            console.log('error', error);
        });
    };
    ProfileComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    ProfileComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.mypic = reader.result;
        var res = this.mypic.split(',');
        this.uploadProfileImage(res[1]);
    };
    ProfileComponent.prototype.editProfile = function () {
        var editObj = {
            "emailId": this.profileForm.controls['emailId'].value,
            "fullName": this.profileForm.controls['fullName'].value,
            "gender": this.profileForm.controls['gender'].value,
            "imageUrl": this.profilesList,
        };
        this.profileService.editProfile(editObj).subscribe(function (response) {
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/theme/pages/default/angular/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/theme/pages/default/angular/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/profile/profile.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/profile/profile.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.routing */ "./src/app/theme/pages/default/angular/profile/profile.routing.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ "./src/app/theme/pages/default/angular/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { UserService } from './user.service';







var routes = [
    {
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"],
        children: [
            {
                path: "",
                component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
            }
        ]
    },
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _profile_routing__WEBPACK_IMPORTED_MODULE_0__["ProfileRoutingModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            exports: [],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]],
            providers: [],
            entryComponents: []
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/profile/profile.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/profile/profile.routing.ts ***!
  \************************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/theme/pages/default/angular/profile/profile.component.ts");
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
                component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
            },
        ]
    },
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [],
            providers: []
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-profile-profile-module.js.map