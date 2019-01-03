(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/default/angular/about-us/about-us.module": [
		"./src/app/theme/pages/default/angular/about-us/about-us.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-privacy-policy-privacy-policy-m~16124936",
		"common",
		"pages-default-angular-about-us-about-us-module"
	],
	"./pages/default/angular/contact-us/contact-us.module": [
		"./src/app/theme/pages/default/angular/contact-us/contact-us.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"common",
		"pages-default-angular-contact-us-contact-us-module"
	],
	"./pages/default/angular/cuisin/cuisin.module": [
		"./src/app/theme/pages/default/angular/cuisin/cuisin.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"common",
		"pages-default-angular-cuisin-cuisin-module"
	],
	"./pages/default/angular/privacy-policy/privacy-policy.module": [
		"./src/app/theme/pages/default/angular/privacy-policy/privacy-policy.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-privacy-policy-privacy-policy-m~16124936",
		"common",
		"pages-default-angular-privacy-policy-privacy-policy-module"
	],
	"./pages/default/angular/profile/profile.module": [
		"./src/app/theme/pages/default/angular/profile/profile.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"common",
		"pages-default-angular-profile-profile-module"
	],
	"./pages/default/angular/restaurant/restaurant.module": [
		"./src/app/theme/pages/default/angular/restaurant/restaurant.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"common",
		"pages-default-angular-restaurant-restaurant-module"
	],
	"./pages/default/angular/user/user.module": [
		"./src/app/theme/pages/default/angular/user/user.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"common",
		"pages-default-angular-user-user-module"
	],
	"./pages/default/index/index.module": [
		"./src/app/theme/pages/default/index/index.module.ts",
		"pages-default-angular-about-us-about-us-module~pages-default-angular-contact-us-contact-us-module~pa~d76143b5",
		"common",
		"pages-default-index-index-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_services/script-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/script-loader.service.ts ***!
  \****************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-email/forgot-email.component */ "./src/app/forgot-email/forgot-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // {path: 'login', loadChildren: './auth/auth.module#AuthModule'},
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: 'forgotpassword',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'forgotemail',
        component: _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_4__["ForgotEmailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<!-- <div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;  background:rgb(255, 248, 224)\"> -->\n   \n \n   \n   <!-- <div class=\"m-blockui\"> -->\n     <ng4-loading-spinner> </ng4-loading-spinner>\n    <!-- <span>Please wait...</span> -->\n   \n \n<!-- <ng4-loading-spinner> </ng4-loading-spinner> -->\n<!-- end::Page loader -->\n<!-- begin:: Page -->\n<router-outlet></router-outlet>\n\n<!-- end:: Page -->\n<!-- <app-quick-sidebar></app-quick-sidebar> -->\n<!-- <app-scroll-top></app-scroll-top> -->\n<!-- <app-tooltips></app-tooltips> -->\n<!--begin::Base Scripts -->\n<!--end::Base Scripts -->\n<!--begin::Page Vendors -->\n<!--end::Page Vendors -->\n<!--begin::Page Snippets -->\n<!--end::Page Snippets -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _theme_theme_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/theme-routing.module */ "./src/app/theme/theme-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-email/forgot-email.component */ "./src/app/forgot-email/forgot-email.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { SignUpService } from './sign-up/sign-up.service';
// import { AuthGuard } from './auth/_guards/auth.guard';
// import { AuthService } from './auth/_services/authentication.service';
// import { BannerModule } from './theme/pages/default/angular/banner/banner.module';




















// import { ImagesPipe } from './images.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_8__["ThemeComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"],
                // SignUpComponent,
                _forgot_email_forgot_email_component__WEBPACK_IMPORTED_MODULE_16__["ForgotEmailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _theme_theme_routing_module__WEBPACK_IMPORTED_MODULE_13__["ThemeRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_0__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__["AuthModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OwlNativeDateTimeModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__["Ng4LoadingSpinnerModule"].forRoot(),
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_19__["InputsModule"]
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_1__["ScriptLoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
var URL = "http://66.70.179.133:8080/";
// export const URL:string="http://66.70.179.133:8080/";
// export const URL:string = "http://localhost:8080/";


/***/ }),

/***/ "./src/app/auth/_directives/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/_directives/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./src/app/auth/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/auth/_guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/_guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _userService, _authService, toastService) {
        this._router = _router;
        this._userService = _userService;
        this._authService = _authService;
        this.toastService = toastService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('_token'));
        if (currentUser) {
            this._authService.verify().subscribe(function (data) {
                if (data['code'] == 400) {
                    _this._router.navigate(['/login']);
                    _this.toastService.success(data['message']);
                }
            });
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/_helpers/fake-backend.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/_helpers/fake-backend.ts ***!
  \***********************************************/
/*! exports provided: mockBackEndFactory, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockBackEndFactory", function() { return mockBackEndFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_http_testing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http/testing */ "./node_modules/@angular/http/fesm5/testing.js");


function mockBackEndFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // fake token
    var token = 'fake-jwt-token';
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_1.email && user.password === params_1.password;
                });
                // default account
                if (params_1.email === 'demo@demo.com' && params_1.password === 'demo') {
                    filteredUsers[0] = {
                        fullName: 'Demo',
                        email: 'demo@demo.com',
                        password: 'demo',
                    };
                }
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({
                        status: 200,
                        body: {
                            id: user.id,
                            fullName: user.fullName,
                            email: user.email,
                            token: token
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Email or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 401 })));
                }
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) {
                        return user.id === id_1;
                    });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 401 })));
                }
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) {
                    return user.email === newUser_1.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser_1.email + '" is already registered'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 200 })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 401 })));
                }
                return;
            }
            // token verify
            if (connection.request.url.endsWith('/api/verify') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 200, body: { status: 'ok' } })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 401 })));
                }
                return;
            }
            // forgot password
            if (connection.request.url.endsWith('/api/forgot-password') && connection.request.method === _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].Post) {
                // get parameters from post request
                var params_2 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_2.email;
                });
                if (filteredUsers.length) {
                    // in real world, if email is valid, send email change password link
                    var user = filteredUsers[0];
                    connection.mockRespond(new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Response"](new _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"]({ status: 200 })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('User with this email does not exist'));
                }
                return;
            }
            // pass through any requests not handled above
            var realHttp = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"](realBackend, options);
            var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"],
    deps: [_angular_http_testing__WEBPACK_IMPORTED_MODULE_1__["MockBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["BaseRequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"]],
    useFactory: mockBackEndFactory
};


/***/ }),

/***/ "./src/app/auth/_helpers/index.ts":
/*!****************************************!*\
  !*** ./src/app/auth/_helpers/index.ts ***!
  \****************************************/
/*! exports provided: mockBackEndFactory, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-backend */ "./src/app/auth/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockBackEndFactory", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["mockBackEndFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_0__["fakeBackendProvider"]; });




/***/ }),

/***/ "./src/app/auth/_services/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/_services/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/auth/_services/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/_services/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(https, http) {
        this.https = https;
        this.http = http;
    }
    AuthenticationService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        var token = JSON.parse(localStorage.getItem('_token'));
        headers = headers.set('Authorization', token);
        return headers;
    };
    AuthenticationService.prototype.login = function () {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'login', { headers: this.getHeaderWithToken() })
            .map(function (response) {
            console.log('responsesss', response);
            // login successful if there's a jwt token in the response
            // let user = response.json();
            // if (user && user.token) {
            // 	// store user details and jwt token in local storage to keep user logged in between page refreshes
            // 	localStorage.setItem('currentUser', JSON.stringify(user));
            // }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.verify = function () {
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/verifyToken', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
        }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/_services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/_services/index.ts ***!
  \*****************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/auth/_services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/_services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
    }
    UserService.prototype.verify = function () {
        console.log("vertdsdsghdsghdsgh");
        return this.http.get('/admin/verifyToken', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.post('/api/user/forgotPassword', JSON.stringify({ email: email }), this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/getUsers', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/user/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/user', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/user/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/user/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('_token'));
        if (currentUser && currentUser.token) {
            console.log(currentUser);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': JSON.parse(localStorage.getItem('_token')) });
            return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-routing.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        // this._script.loadScripts('body', [
        //   'assets/vendors/base/vendors.bundle.js',
        //   'assets/demo/default/base/scripts.bundle.js'], true).then(() => {
        //   Helpers.setLoading(false);
        //   this.handleFormSwitch();
        //   this.handleSignInFormSubmit();
        //   this.handleSignUpFormSubmit();
        //   this.handleForgetPasswordFormSubmit();
        // });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login().subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            _this.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            _this.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(_directives_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    AuthComponent.prototype.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    AuthComponent.prototype.displaySignUpForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.addClass(login, 'm-login--signup');
        mUtil.animateClass(login.getElementsByClassName('m-login__signup')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displaySignInForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--forget-password');
        mUtil.removeClass(login, 'm-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        mUtil.addClass(login, 'm-login--signin');
        mUtil.animateClass(login.getElementsByClassName('m-login__signin')[0], 'flipInX animated');
    };
    AuthComponent.prototype.displayForgetPasswordForm = function () {
        var login = document.getElementById('m_login');
        mUtil.removeClass(login, 'm-login--signin');
        mUtil.removeClass(login, 'm-login--signup');
        mUtil.addClass(login, 'm-login--forget-password');
        mUtil.animateClass(login.getElementsByClassName('m-login__forget-password')[0], 'flipInX animated');
    };
    AuthComponent.prototype.handleFormSwitch = function () {
        var _this = this;
        document.getElementById('m_login_forget_password').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displayForgetPasswordForm();
        });
        document.getElementById('m_login_forget_password_cancel').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignInForm();
        });
        document.getElementById('m_login_signup').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignUpForm();
        });
        document.getElementById('m_login_signup_cancel').addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaySignInForm();
        });
    };
    AuthComponent.prototype.handleSignUpFormSubmit = function () {
        document.getElementById('m_login_signup_submit').addEventListener('click', function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                    rpassword: {
                        required: true,
                    },
                    agree: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    AuthComponent.prototype.handleForgetPasswordFormSubmit = function () {
        document.getElementById('m_login_forget_password_submit').addEventListener('click', function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignin', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertForgotPass', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__(/*! ../login/login.component.html */ "./src/app/login/login.component.html"),
            // templateUrl: './templates/login-1.component.html',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_http_testing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http/testing */ "./node_modules/@angular/http/fesm5/testing.js");
/* harmony import */ var _auth_routing_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.routing */ "./src/app/auth/auth-routing.routing.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers/index */ "./src/app/auth/_helpers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _auth_routing_routing__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                // api backend simulation
                _helpers_index__WEBPACK_IMPORTED_MODULE_13__["fakeBackendProvider"],
                _angular_http_testing__WEBPACK_IMPORTED_MODULE_4__["MockBackend"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["BaseRequestOptions"],
            ],
            entryComponents: [_directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {AuthenticationService} from "../_services/authentication.service";
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router) {
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/forgot-email/forgot-email.component.css":
/*!*********************************************************!*\
  !*** ./src/app/forgot-email/forgot-email.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody{\n\tmargin:0;\n\t\n}\n.lbl-err {\n    color: red; \n\t}\n.size{\n       text-align: center;\n       width:100%;\n\t   display: flex;\n\t   justify-content: center;\n\t   align-items: center;\n\t   height: auto;\n\t   flex-direction: column;\n\t   -webkit-user-select: none;\n\t      -moz-user-select: none;\n\t       -ms-user-select: none;\n\t           user-select: none;\n\t   padding-top: 2rem;\n    }\n.btn-login{\n        color: white;\n\t\tbackground-color: #e97121;\t\n        padding: .85rem 2rem;\n\t\tfont-size: 1rem;\n\t\tfont-weight: 400;\n\t\tfont-family: monospace;\n\t\t/* border-radius: 60px; */\n\t\tborder-color: #e97121;\n\t\twidth: 50%;\n\t\ttext-align: center;\n\t\tfloat: center;\n\t\tcursor: pointer;\n\t\tborder: none;\n\t\toutline: none;\n\t\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);\n\t\ttransition: box-shadow 0.15s ease;\n    }\n.btn-login:hover{\n\t\tbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.15);\n\t}\n.checkbox{\n        border-color: white;\n        color:#575962;\n    }\n.cen{\n        -ms-grid-row-align: center;\n            align-self: center;\n    }\n.app-logo{\n\t\theight:250px;\n\t\twidth:250px;\n\t\tbackground-position: center;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\tbackground-image: url(\"deli_sos_app_mark.png\");\n\t\t-webkit-transform-origin: bottom;\n\t\t        transform-origin: bottom;\n\t\t-webkit-animation: app-logo-intro-anim 0.35s ease;\n\t\t        animation: app-logo-intro-anim 0.35s ease;\n\t}\n@-webkit-keyframes app-logo-intro-anim{\n\t\t0%{\n\t\t\t-webkit-transform: scale(0,0);\n\t\t\t        transform: scale(0,0);\n\t\t}\n\t\t100%{\n\t\t\t-webkit-transform: scale(1,1);\n\t\t\t        transform: scale(1,1);\n\t\t}\n\t}\n@keyframes app-logo-intro-anim{\n\t\t0%{\n\t\t\t-webkit-transform: scale(0,0);\n\t\t\t        transform: scale(0,0);\n\t\t}\n\t\t100%{\n\t\t\t-webkit-transform: scale(1,1);\n\t\t\t        transform: scale(1,1);\n\t\t}\n\t}\n.size h1{\n\t\tfont-family: 'Changa One', cursive;\n\t\tfont-size: 24pt;\n\t\tfont-weight: 400;\n\t\tcolor: #212121;\n    }\n.top{\n        background-image: url(\"bg-3.jpg\");\n         background-size: cover;\n         height:100vh;\n         width:100%;\n         background-position: center;\n         background-repeat: no-repeat;\n     }\n    "

/***/ }),

/***/ "./src/app/forgot-email/forgot-email.component.html":
/*!**********************************************************!*\
  !*** ./src/app/forgot-email/forgot-email.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2\"\n        id=\"m_login\"  style=\"background-image: url(bg-3.jpg)\">\n        <div class=\"m-grid__item m-grid__item--fluid    m-login__wrapper\">\n            <div class=\"m-login__container\">\n                <div class=\"size\">\n                    <div class=\"app-logo\"></div><br>\n                    <h1>Check your inbox!</h1>\n                </div><br>\n                <div class=\"m-login__signin\">\n                    <div class=\"m-login__head\">\n                        <div class=\"m-login center\">\n                            <h3 class=\"m-login__title\">We've sent you an email with<br> a link to forgot Password</h3>\n                        </div>\n                    </div>\n                    <br><br>\n                    <div class=\"form-group\">\n                        <div class=\"m--align-center\">\n                            <button  class=\"btn-login\" [routerLink]=\"['/login']\"> Continue ></button>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"col m--align-center\">\n                        <p>Didn't recieve an email ? &nbsp;<a routerLink=\"/forgotpassword\">Try Again!!</a> </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div>"

/***/ }),

/***/ "./src/app/forgot-email/forgot-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forgot-email/forgot-email.component.ts ***!
  \********************************************************/
/*! exports provided: ForgotEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotEmailComponent", function() { return ForgotEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotEmailComponent = /** @class */ (function () {
    function ForgotEmailComponent(spinnerService) {
        this.spinnerService = spinnerService;
    }
    ForgotEmailComponent.prototype.ngOnInit = function () {
    };
    ForgotEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-email',
            template: __webpack_require__(/*! ./forgot-email.component.html */ "./src/app/forgot-email/forgot-email.component.html"),
            styles: [__webpack_require__(/*! ./forgot-email.component.css */ "./src/app/forgot-email/forgot-email.component.css")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"]])
    ], ForgotEmailComponent);
    return ForgotEmailComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody{\n\tmargin:0;\n\t\n}\n.lbl-err {\n    color: red; \n\t}\n.size{\n       text-align: center;\n       width:100%;\n\t   display: flex;\n\t   justify-content: center;\n\t   align-items: center;\n\t   height: auto;\n\t   flex-direction: column;\n\t   -webkit-user-select: none;\n\t      -moz-user-select: none;\n\t       -ms-user-select: none;\n\t           user-select: none;\n\t   padding-top: 2rem;\n    }\n.btn-forgot{\n        color: white;\n        background-color: #e97121;\n        padding: .85rem 2rem;\n\t\tfont-size: 1rem;\n\t\tfont-weight: 100;\n\t\tfont-family: monospace;\n\t\t/* border-radius: 60px; */\n\t\tborder-color: #e97121;\n\t\twidth: 50%;\n\t\ttext-align: center;\n\t\tfloat: center;\n\t\tcursor: pointer;\n\t\tborder: none;\n\t\toutline: none;\n\t\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);\n\t\ttransition: box-shadow 0.15s ease;\n    }\n.btn-login:hover{\n\t\tbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.15);\n\t}\n.checkbox{\n        border-color: white;\n        color:#575962;\n    }\n.cen{\n        -ms-grid-row-align: center;\n            align-self: center;\n    }\n.app-logo{\n\t\theight:250px;\n\t\twidth:250px;\n\t\tbackground-position: center;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\tbackground-image: url(\"deli_sos_app_mark.png\");\n\t\t-webkit-transform-origin: bottom;\n\t\t        transform-origin: bottom;\n\t\t-webkit-animation: app-logo-intro-anim 0.35s ease;\n\t\t        animation: app-logo-intro-anim 0.35s ease;\n\t}\n@-webkit-keyframes app-logo-intro-anim{\n\t\t0%{\n\t\t\t-webkit-transform: scale(0,0);\n\t\t\t        transform: scale(0,0);\n\t\t}\n\t\t100%{\n\t\t\t-webkit-transform: scale(1,1);\n\t\t\t        transform: scale(1,1);\n\t\t}\n\t}\n@keyframes app-logo-intro-anim{\n\t\t0%{\n\t\t\t-webkit-transform: scale(0,0);\n\t\t\t        transform: scale(0,0);\n\t\t}\n\t\t100%{\n\t\t\t-webkit-transform: scale(1,1);\n\t\t\t        transform: scale(1,1);\n\t\t}\n\t}\n.size h1{\n\t\tfont-family: 'Changa One', cursive;\n\t\tfont-size: 24pt;\n\t\tfont-weight: 400;\n\t\tcolor: #212121;\n    }\n.top{\n        background-image: url(\"bg-3.jpg\");\n         background-size: cover;\n         height:100vh;\n         width:100%;\n         background-position: center;\n         background-repeat: no-repeat;\n\t }\n.form-control:focus {\n\t\tborder-color: lightslategrey;\n\t\tcolor: #575962;\n\t\tbox-shadow: none;\n\t}\n    "

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2\"id=\"m_login\"  style=\"background-image: url(bg-3.jpg)\">\n   <div class=\"m-grid__item m-grid__item--fluid    m-login__wrapper\">\n      <div class=\"m-login__container\">\n        <div class=\"size\">\n            <div class=\"app-logo\"></div><br>\n            <h1>To error is human</h1>\n         </div>\n        <div class=\"m-login__signin\">\n           <div class=\"m-login__head\">\n             <div class=\"m-login center\">\n              <h3 class=\"m-login__title\">Forgot Password</h3>\n             </div>\n          </div><br>\n          <div class=\"m-login__container\">\n          <form [formGroup]=\"forgotPasswordForm\" name=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <input  type=\"text\" placeholder=\"Email\" formControlName=\"email\"  class=\"form-control\"  [ngClass]=\"{'is-invalid': submitted && f.email.errors}\">\n              <div *ngIf=\"submitted && f.email.errors\" class=\"lbl-err\">\n                <div *ngIf=\"f.email.errors.required \">Email is required</div>\n                <div *ngIf=\"f.email.errors.pattern\">Enter Valid Email ID</div>\n              </div>\n             </div>\n            <br>\n            <div class=\"form-group\">\n                <div class=\"m--align-center\">\n                    <button [disabled]=\"loading\" class=\"btn-forgot\" (click)=\"forgotPassword()\" >Forgot Password</button>\n                </div>\n            </div>\n          </form>\n         </div>\n        </div>\n       </div>\n    </div>\n</div>\n    <!-- <app-footer></app-footer> -->\n  \n\n  \n  <!-- <div class=\"m-login__form-action\"> <button id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\"\n                (click)=\"forgotPassword()\">Request</button>\n              <button id=\"m_login_forget_password_cancel\" class=\"btn btn-outline-focus m-btn m-btn--pill m-btn--custom\">Cancel</button>\n            </div> -->\n\n\n   <!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"login.component.css\"> -->\n\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgot_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.service */ "./src/app/forgot-password/forgot-password.service.ts");
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






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, router, forgotPasswordService, spinnerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.forgotPasswordService = forgotPasswordService;
        this.spinnerService = spinnerService;
        this.loading = false;
        this.submitted = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //if invalid form return
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.spinnerService.show();
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () {
            return this.forgotPasswordForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        this.forgotPasswordService.post(this.forgotPasswordForm.value).subscribe(function (response) {
            if (response['code'] == 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    position: 'center',
                    type: 'success',
                    title: response['message'],
                    showConfirmButton: false,
                    timer: 1500
                });
                _this.router.navigate(['/forgotemail']);
                _this.spinnerService.hide();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    type: 'error',
                    text: response['message']
                });
            }
        }, function (error) {
            console.log('error', JSON.stringify(error));
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _forgot_password_service__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.service.ts":
/*!************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.service.ts ***!
  \************************************************************/
/*! exports provided: ForgotPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordService", function() { return ForgotPasswordService; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordService = /** @class */ (function () {
    function ForgotPasswordService(http) {
        this.http = http;
    }
    // getHeaderWithToken() {
    //   let headers = new HttpHeaders()
    //   headers = headers.set('Content-Type', 'application/json')
    //   return headers;
    // }
    ForgotPasswordService.prototype.post = function (obj) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/forgotPassword', obj)
            .map(function (res) { return res; });
    };
    ForgotPasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            jquery__WEBPACK_IMPORTED_MODULE_0__["each"](src, function (k, s) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__breadcrumbs');
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(ul).length === 0) {
            ul = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(ul).find('li:not(:first-child)').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0__["each"](breadcrumbs, function (k, v) {
            var li = jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<span/>').addClass('m-nav__link-text').text(v.text)));
            jquery__WEBPACK_IMPORTED_MODULE_0__(ul).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = jquery__WEBPACK_IMPORTED_MODULE_0__('body');
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody{\n\tmargin:0;\n\t\n}\n.lbl-err {\n    color: red; \n\t}\n.size{\n       text-align: center;\n       width:100%;\n\t   display: flex;\n\t   justify-content: center;\n\t   align-items: center;\n\t   height: auto;\n\t   flex-direction: column;\n\t   -webkit-user-select: none;\n\t      -moz-user-select: none;\n\t       -ms-user-select: none;\n\t           user-select: none;\n\t   padding-top: 2rem;\n    }\n.btn-login{\n        color: white; background-color: #e97121;\t\n        padding: .50rem 1rem;\n\t\tfont-size: 1.5rem;\n\t\tfont-weight: 400;\n\t\tfont-family: monospace;\n\t\t/* border-radius: 60px; */\n\t\tborder-color: #e97121;\n\t\twidth: 50%;\n\t\ttext-align: center;\n\t\tfloat: center;\n\t\tcursor: pointer;\n\t\tborder: none;\n\t\toutline: none;\n\t\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);\n\t\ttransition: box-shadow 0.15s ease;\n    }\n.btn-login:hover{\n\t\tbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.15);\n\t}\n.checkbox{\n        border-color: white;\n        color:#575962;\n    }\n.cen{\n        -ms-grid-row-align: center;\n            align-self: center;\n    }\n.app-logo{\n\t\theight:250px;\n\t\twidth:250px;\n\t\tbackground-position: center;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\tbackground-image: url(\"deli_sos_app_mark.png\");\n\t\t-webkit-transform-origin: bottom;\n\t\t        transform-origin: bottom;\n\t\t-webkit-animation: app-logo-intro-anim 0.35s ease;\n\t\t        animation: app-logo-intro-anim 0.35s ease;\n\t}\n@-webkit-keyframes app-logo-intro-anim{\n\t\t0%{\n\t\t\t-webkit-transform: scale(0,0);\n\t\t\t        transform: scale(0,0);\n\t\t}\n\t\t100%{\n\t\t\t-webkit-transform: scale(1,1);\n\t\t\t        transform: scale(1,1);\n\t\t}\n\t}\n@keyframes app-logo-intro-anim{\n\t\t0%{\n\t\t\t-webkit-transform: scale(0,0);\n\t\t\t        transform: scale(0,0);\n\t\t}\n\t\t100%{\n\t\t\t-webkit-transform: scale(1,1);\n\t\t\t        transform: scale(1,1);\n\t\t}\n\t}\n.size h1{\n\t\tfont-family: 'Changa One', cursive;\n\t\tfont-size: 24pt;\n\t\tfont-weight: 400;\n\t\tcolor: #212121;\n    }\n.style{\n        background-size: cover;\n        height:100vh;\n        width:100%;\n        background-position: center;\n        background-repeat: no-repeat;\n    }\n.top{\n        background-image: url(\"bg-3.jpg\");\n         background-size: cover;\n         height:100vh;\n         width:100%;\n         background-position: center;\n         background-repeat: no-repeat;\n\t }\n.form-control:focus {\n\t\tborder-color: lightslategrey;\n\t\tcolor: #575962;\n\t\tbox-shadow: none;\n\t}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"login.component.css\"> -->\n\n<div class=\"top\">\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2\"\n        id=\"m_login\" style=\"background-image: url(bg-3.jpg)\">\n        <div class=\"m-grid__item m-grid__item--fluid    m-login__wrapper\">\n            <div class=\"m-login__container\">\n                <div class=\"size\">\n                    <div class=\"app-logo\"></div><br>\n                    <h1>Good food is<br>waiting for you!</h1>\n                </div>\n                <div class=\"m-login__signin\">\n                    <div class=\"m-login__head\"><br><br>\n                        <h3 class=\"m-login__title\">Sign In To Admin</h3>\n                    </div>\n                    <br>\n                    <form name=\"loginForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\"> \n                          <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n                                formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"lbl-err \">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"f.email.errors.pattern\">Enter Valid EmailId</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\"   class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"lbl-err \">\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                <!-- <div *ngIf=\"f.password.errors.pattern\">Enter Password must be Minimum Six characters, at least one Capital letter, one number and one special character:</div> -->\n                            </div>\n                            <br>\n\n                            <div class=\"col m--align-center\">\n                                <!-- <p>Don't have an account? &nbsp;<a routerLink=\"/sign-up\">register</a> </p> -->\n                            </div>\n                        </div>\n                        <div class=\"row m-login__form-sub\">\n                            <div class=\"col m--align-left\"> <label class=\"checkbox\"> <input type=\"checkbox\" name=\"remember\"\n                                        style=\"color:blue\"> Remember me <span></span> </label>\n                            </div>\n                            <div class=\"col m--align-right\"> <a routerLink=\"/forgotpassword\" class=\"checkbox\">Forgot\n                                    Password?</a> </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"m--align-center\">\n                                <button [disabled]=\"loading\" class=\"btn-login\" (click)=\"signIn()\">Log In</button>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n\n\n                <!-- <div class=\"m-login__account\">\n                <span class=\"m-login__account-msg\">\n                Don't have an account yet ?\n                </span>&nbsp;&nbsp;\n                <a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link--light m-login__account-link\" routerLink=\"/sign-up\">Sign Up</a>\n            </div>\n            <div class=\"m-login__account\">\n                <span class=\"m-login__account-msg\">\n               Continue with facebook?\n               <a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link--light m-login__account-link\" routerLink=\"/sign-up\">Sign Up</a>\n\n               </span>\n               \n            </div> -->\n            </div>\n        </div>\n\n        <!-- <app-footer></app-footer> -->\n    </div>\n    <div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_formBuilder, _router, _loginService, toastService, spinnerService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._loginService = _loginService;
        this.toastService = toastService;
        this.spinnerService = spinnerService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildLoginForm();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this._loginService.post(this.loginForm.value).subscribe(function (response) {
            if (response['code'] == 200) {
                _this.spinnerService.hide();
                _this.toastService.success(response.message);
                localStorage.setItem('_token', JSON.stringify(response.token));
                localStorage.setItem('_id', JSON.stringify(response.data._id));
                _this.spinnerService.show();
                _this._router.navigate(['/index']);
            }
            else {
                _this.spinnerService.hide();
                _this.toastService.error(response.message);
            }
        }, function (error) {
            _this.spinnerService.hide();
            console.log('error' + error);
        });
    };
    LoginComponent.prototype.buildLoginForm = function () {
        this.loginForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    LoginService.prototype.post = function (obj) {
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_0__["URL"] + 'admin/login', obj, { headers: this.getHeaderWithToken() })
            .map(function (res) {
            return res;
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-aside-menu .m-menu__nav .m-menu__item>.m-menu__heading:hover, .m-aside-menu .m-menu__nav .m-menu__item>.m-menu__link:hover {\n    background:#dd600c;\n}\n.menu__nav .m-menu__item>.m-menu__link:hover {\n    background: sandybrown;\n}\n.m-menu__link:hover{\n    background: sandybrown;\n}\n.m-menu__item.m-menu__item--active a{\n    transition: background-color .3s;\n    background-color:sandybrown;\n }\n.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__link:hover {\n    text-decoration: none;\n    cursor: pointer;\n    background: sandybrown;\n }\n.m-menu__link{\n    color:white; \n    /* font-weight:500; */\n    font-size: 1.2rem;\n    position: relative;\n    display: flex;\n    align-items: center;\n    font-weight: bold !important;\n }\na:hover {\n    color: white;\n    text-decoration: underline;\n}\n.m-menu__link-text {\n    display: contents !important;\n    font-weight: bold !important;\n    color:white\n}\n.m-menu__nav img {\n    margin-right: 10px;\n}\n.m-menu__item .fa, .m-menu__item .fas, .m-menu__item .far {\n    color:white;\n    font-size: 18px;\n    width:32px;\n}\n.m-menu__item{\n    color:white; \n    font-size: 1.2rem;\n    padding:10px\n    \n}\n"

/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\n<div class=\"t1\">\n<app-header-nav></app-header-nav>\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\"><i class=\"la la-close\"></i></button>\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\n\t<!-- BEGIN: Aside Menu -->\n\t<div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\" m-menu-vertical=\"1\"\n\t m-menu-scrollable=\"1\" m-menu-dropdown-timeout=\"500\" style=\"background: linear-gradient(rgb(236, 151, 39), #e97121); \">\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\n\t\t\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"><a\n\t\t\t\t(click)=\"moveToIndex()\" class=\"m-menu__link\"><i class=\"fas flaticon-line-graph\"></i>Dashboard\n\t\t\t\t\t\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"><a\n\t\t\t\t(click)=\"moveToRestaurant()\" class=\"m-menu__link\"><img src=\"./assets/demo/default/media/img/logo/restaurant.png\" width=\"20px\"/>Restaurants\n\t\t\t\t\t </a>\n\t\t   </li>\n\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"><a\n\t\t\t\t(click)=\"moveToCuisin()\" class=\"m-menu__link\" ><img src=\"./assets/demo/default/media/img/logo/cuisin.png\" width=\"20px\"/>Cuisines</a>\n\t\t\t</li>\n\t\t\n\t\t\t\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"><a\n\t\t\t\t(click)=\"moveToUser()\" class=\"m-menu__link\"><i class=\"fa fa-users\"></i>Users </a>\n            \t \n\t\t   </li>\n\n\t\t   <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"><a\n\t\t\t(click)=\"moveToAboutus()\" class=\"m-menu__link\" ><i class=\"far fa-building\"></i>About Us </a>\n\t\t\t\t  \n\t       </li>\n   \n\t\t   \t\t\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"><a\n\t\t\t\t(click)=\"moveToContactus()\" class=\"m-menu__link\" ><i class=\"fas fa-envelope-open\"></i>Contact Us   </a>\n\t\t\t\t\t\n\t\t   </li>\n\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"aria-haspopup=\"true\">\n\t\t\t<a (click)=\"moveToPrivacy()\" class=\"m-menu__link\" ><i class=\"far flaticon-settings\"></i>Privacy Policy</a>\n\t\t\t\n\t\t\t</li>\n\t\t\t\n\n\t<!----  <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n\t   aria-haspopup=\"true\"><a routerLink=\"/admin/terms-conditions\" class=\"m-menu__link\"><i class=\"m-menu__link-icon flaticon-settings\"></i><span\n\t\t\t   class=\"m-menu__link-text\">Terms & Conditions\n\t\t\t  </span></a>\n\t  </li>\n\n\n\t  <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n\t  aria-haspopup=\"true\"><a routerLink=\"/admin/notifications\" class=\"m-menu__link\"><i class=\"m-menu__link-icon flaticon-settings\"></i><span\n\t\t\t  class=\"m-menu__link-text\">Notifications\n\t\t\t </span></a>\n\t </li>\n\n\t -->\n\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n"

/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent(spinnerService, _router) {
        this.spinnerService = spinnerService;
        this._router = _router;
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent.prototype.moveToIndex = function () {
        this.spinnerService.show();
        this._router.navigate(['/index']);
    };
    AsideNavComponent.prototype.moveToRestaurant = function () {
        this.spinnerService.show();
        this._router.navigate(['/admin/restaurant']);
    };
    AsideNavComponent.prototype.moveToCuisin = function () {
        this.spinnerService.show();
        this._router.navigate(['/admin/cuisines']);
    };
    AsideNavComponent.prototype.moveToUser = function () {
        this.spinnerService.show();
        this._router.navigate(['/admin/getUserList']);
    };
    AsideNavComponent.prototype.moveToAboutus = function () {
        this.spinnerService.show();
        this._router.navigate(['/admin/about-us']);
    };
    AsideNavComponent.prototype.moveToContactus = function () {
        this.spinnerService.show();
        this._router.navigate(['/admin/contact-us']);
    };
    AsideNavComponent.prototype.moveToPrivacy = function () {
        this.spinnerService.show();
        this._router.navigate(['/admin/privacy-policy']);
    };
    AsideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            styles: [__webpack_require__(/*! ./aside-nav.component.css */ "./src/app/theme/layouts/aside-nav/aside-nav.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n\n<!-- <footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\" >\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\" style=\"background: white\">\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\" style=\"background: white\">\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\"> <span class=\"m-footer__copyright\"> 2018 &copy; SoLow theme by <a href=\"https://solow.com\" class=\"m-link\">Solowthemes</a>\n\t\t\t\t\t</span> </div>\n\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\" style=\"background: white\">\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n\t\t\t\t\t<li class=\"m-nav__item\"> <a href=\"#\" class=\"m-nav__link\"> <span class=\"m-nav__link-text\">About</span> </a> </li>\n\t\t\t\t\t<li class=\"m-nav__item\"> <a href=\"#\" class=\"m-nav__link\"> <span class=\"m-nav__link-text\">Privacy</span> </a> </li>\n\t\t\t\t\t\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item\">\n\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\"> <i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\n\t\t\t\t\t\t\t</a> </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer> -->\n <!-- end::Footer -->"

/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\n<header id=\"m_header\" class=\"m-grid__item    m-header\" m-minimize-offset=\"200\" m-minimize-mobile-offset=\"200\"\n appunwraptag=\"\">\n\t<div class=\"m-container m-container--fluid m-container--full-height\" style=\"background: white \">\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\" style=\"background: white \">\n\t\t\t<!-- BEGIN: Brand -->\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-dark\" style=\"background:linear-gradient(to right,rgb(236, 151, 39), #e97121)\n\t\t\t\">\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\"> <img alt=\"\" routerLink=\"/index\" src=\"./assets/demo/default/media/img/logo/logo1.png\"\n\t\t\t\t\t\t style=\" cursor: pointer\" height=\"65px\" margin-top=\"50px\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3 routerLink=\"/index\">DELI&nbsp;S.O.S</h3>\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle<a id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">   END -->\n\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler --><a id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span> </a> <!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler --><a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span> </a> <!-- END -->\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler --><a id=\"m_aside_header_topbar_mobile_toggle\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i> </a> <!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div> <!-- END: Brand -->\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\n\t\t\t\t<!-- BEGIN: Horizontal Menu --><button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\"\n\t\t\t\t id=\"m_aside_header_menu_mobile_close_btn\" style=\"background-color:rgb(236, 159, 87)\"><i class=\"la la-close\"></i></button>\n\t\t\t\t<div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\">\n\n\t\t\t\t</div> <!-- END: Horizontal Menu -->\n\n\t\t\t\t<div class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\n\t\t\t\t m-dropdown-toggle=\"click\">\n\t\t\t\t\t<div class=\"m-nav__link m-dropdown__toggle pic_nm\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<div *ngIf=\"!profilesList\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/demo/default/media/img/logo/dummy.jpg\" class=\"image\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"profilesList\">\n\t\t\t\t\t\t\t\t<img [src]=\"profilesList\" class=\"image\" alt=\"profilesList\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"m-topbar__userpic font\">&nbsp;{{name}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-dropdown__wrapper\" style=\"z-index: 101;top: 80px;right:10px\"> <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"\n\t\t\t\t\t\t style=\"right:61px!important;\"></span>\n\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background-size: cover;\">\n\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"!profilesList\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/demo/default/media/img/logo/dummy.jpg\" class=\"image\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\"> <img [src]=\"profilesList\" class=\"m--img-circle\" height=\"70\" width=\"80\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\"> <span class=\"user\">{{name}}</span> </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\"> <span class=\"m-nav__section-text\">Section</span> </li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\"> <a routerLink=\"/admin/profile\" class=\"m-nav__link\" style=\"color: orangered\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t class=\"m-nav__link-icon flaticon-profile-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\"> <span class=\"m-nav__link-wrap\"> <span class=\"m-nav__link-text\">My Profile</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\"></span> </span> </span> </a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\"> <a routerLink=\"/snippets/pages/user/login-1\" style=\"color: orangered\" class=\"btn m-btn--pill   btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\n\t\t\t\t\t\t\t\t\t\t\t (click)=\"logout()\">Logout</a> </li>\n\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</header> <!-- END: Header -->"

/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _pages_default_angular_profile_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../pages/default/angular/profile/profile.service */ "./src/app/theme/pages/default/angular/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare let mLayout: any;
var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent(loginService, router, profileService) {
        // this.profileService.getProfile().subscribe((data: any) => {
        //    this.profilesList=data.data.profilePicture
        //    this.name=data.data.name
        // });
        this.loginService = loginService;
        this.router = router;
        this.profileService = profileService;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.currentImage.subscribe(function (image) {
            _this.profilesList = image;
        });
        this.profileService.currentName.subscribe(function (name) {
            _this.name = name;
        });
        this.profileService.getProfile().subscribe(function (data) {
            if (data.data == undefined) {
                _this.profilesList = 'dummy.jpg';
            }
            else {
                _this.profilesList = data.data.profilePicture;
                _this.name = data.data.name;
            }
        });
    };
    HeaderNavComponent.prototype.logout = function () {
        localStorage.removeItem('_token');
        localStorage.removeItem('_id');
        this.router.navigate(['/login']);
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header-nav.css */ "./src/app/theme/layouts/header-nav/header-nav.css")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _pages_default_angular_profile_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.css":
/*!*********************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.m--img-rounded.m--marginless {\n    margin-left: 95%!important;\n    margin-top: -6%!important;\n    cursor: pointer !important;\n    width:50px !important;\n    height:50px !important;\n}\n\n.img-circle{\n    vertical-align: middle;\n    border-style: none;\n    float: right;\n    border-radius: 50%;\n    /* height: 80px; */\n    /* background: url(\"user.jpeg\") */\n}\n\n.name{\n    float:right;\n    font-size:30px;\n    margin-top: 20px;\n    margin-right: 10px\n}\n\nh3{\n    color:white;\n    text-align: center;\n    margin-left: 5px;\n    margin-top:20px;\n    font-size: 30px;\n    cursor: pointer;\n}\n\n.label{\n    font-style: bold;\n    text-align: right\n}\n\n.user{\n    color:#fc4a1a;\n    font-weight: 500;\n    font :bold;\n    font-size: 25px\n}\n\n.m1{\n    text-align: right;\n    margin-left: 90%;\n    margin-right: 5px;\n  \n}\n\n.image{\n    vertical-align: middle;\n    border-style: none;\n    float: right;\n    height: 60px;\n    width:60px;\n    border-radius: 50%\n }\n\n.m-nav__link.m-dropdown__toggle.pic_nm {\n    display: table;\n    padding: 10px;\n    float: right;\n    cursor: pointer;\n}\n\n.pic_nm span {\n    display: table-cell;\n    vertical-align: middle;\n    font-size: 20px;\n}\n\n.m-nav .m-nav__item>.m-nav__link .m-nav__link-icon {\n    color: #fc4a1a;\n}\n\n.m-nav .m-nav__item>.m-nav__link .m-nav__link-text {\n    color: #fc4a1a\n}\n\n.m-nav__link:hover{\n    background-color:none;\n}\n\n.m-nav .m-nav__item:hover:not(.m-nav__item--disabled)>.m-nav__link .m-nav__link-text {\n    color: #fd7e14;\n }\n\n.m-nav .m-nav__item:hover:not(.m-nav__item--disabled)>.m-nav__link .m-nav__link-icon {\n    color: #fd7e14;\n }\n\n.a1{\n    color: white;\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n\n.a1:hover {\n    color: white;\n \n}\n\n.m-dropdown__wrapper .m-dropdown__arrow{\n    color: #fff !important;\n    right: 61px!important;\n}\n\n.font {\n    padding-right: 20px;\n}"

/***/ }),

/***/ "./src/app/theme/layouts/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/theme/layouts/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _pages_default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/theme/layouts/layout/layout.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aside-nav/aside-nav.component */ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "./src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltips/tooltips.component */ "./src/app/theme/layouts/tooltips/tooltips.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNavComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_6__["ScrollTopComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_7__["TooltipsComponent"],
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"],
            ],
            exports: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNavComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_4__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_6__["ScrollTopComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_7__["TooltipsComponent"],
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_0__["DefaultComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/theme/layouts/layout/layout.component.css":
/*!***********************************************************!*\
  !*** ./src/app/theme/layouts/layout/layout.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-grid.m-grid--hor.m-grid--root.m-page{\n    background: white;\n} "

/***/ }),

/***/ "./src/app/theme/layouts/layout/layout.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/layouts/layout/layout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/theme/layouts/layout/layout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/layouts/layout/layout.component.ts ***!
  \**********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page ",
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/theme/layouts/layout/layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/theme/layouts/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/scroll-top/scroll-top.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/layouts/scroll-top/scroll-top.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\n<div id=\"m_scroll_top\" class=\"m-scroll-top\" appunwraptag=\"\"> <i class=\"la la-arrow-up\"></i> </div> <!-- end::Scroll Top -->"

/***/ }),

/***/ "./src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/scroll-top/scroll-top.component.ts ***!
  \******************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-scroll-top",
            template: __webpack_require__(/*! ./scroll-top.component.html */ "./src/app/theme/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/tooltips/tooltips.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/tooltips/tooltips.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- begin::Quick Nav --> <ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\"> \t\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\"> \t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" ><i class=\"la la-cart-arrow-down\"></i></a> \t</li> \t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\"> \t\t<a href=\"https://keenthemes.com/metronic/documentation.html\" ><i class=\"la la-code-fork\"></i></a> \t</li> \t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\"> \t\t<a href=\"https://keenthemes.com/forums/forum/support/metronic5/\" ><i class=\"la la-life-ring\"></i></a> \t</li> </ul> <!-- begin::Quick Nav -->\t"

/***/ }),

/***/ "./src/app/theme/layouts/tooltips/tooltips.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/layouts/tooltips/tooltips.component.ts ***!
  \**************************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tooltips",
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/app/theme/layouts/tooltips/tooltips.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/profile/profile.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/profile/profile.service.ts ***!
  \************************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.profilesList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.name = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.imageSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.nameSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.currentImage = this.imageSource.asObservable();
        this.currentName = this.nameSource.asObservable();
    }
    ProfileService.prototype.changeImage = function (image) {
        this.imageSource.next(image);
    };
    ProfileService.prototype.changeName = function (name) {
        this.nameSource.next(name);
    };
    ProfileService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        var token = JSON.parse(localStorage.getItem('_token'));
        headers = headers.set('Authorization', token);
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    };
    ProfileService.prototype.getProfile = function () {
        var admin_id = JSON.parse(localStorage.getItem('_id'));
        return this.http.get(_app_service__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'admin/getUserDetail/' + admin_id, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    ProfileService.prototype.editProfile = function (profile) {
        var admin_id = JSON.parse(localStorage.getItem('_id'));
        return this.http.put(_app_service__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'admin/updateUser/' + admin_id, profile, { headers: this.getHeaderWithToken() }).map(function (res) { return res; });
    };
    ProfileService.prototype.uploadPic = function (pic) {
        var formData = new FormData();
        formData.append('img', pic[0]);
        return this.http.post(_app_service__WEBPACK_IMPORTED_MODULE_1__["URL"] + 'admin/uploadPhoto', formData);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/default.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\" style=\"background: white; \nbackground: -webkit-linear-gradient(to right, white, white);\nbackground: linear-gradient(to right, white, white); \n\">\n\n<!-- <div class=\"m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body\" style=\" background-color: white;\"></div> -->\n<router-outlet></router-outlet>\n</div>\n<div class=\"m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body\" style=\" background-color: white;\"></div>\n<!-- <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\"></div> -->"

/***/ }),

/***/ "./src/app/theme/pages/default/default.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.ts ***!
  \**********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/theme/pages/default/default.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/theme-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
var routes = [
    {
        "path": "",
        "component": _theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        "canActivate": [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        "children": [
            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            {
                "path": "admin/getUserList",
                "loadChildren": "./pages/default/angular/user/user.module#UserModule"
            },
            {
                "path": "admin/restaurant",
                "loadChildren": "./pages/default/angular/restaurant/restaurant.module#RestaurantModule"
            },
            {
                "path": "admin/profile",
                "loadChildren": "./pages/default/angular/profile/profile.module#ProfileModule"
            },
            {
                "path": "admin/about-us",
                "loadChildren": "./pages/default/angular/about-us/about-us.module#AboutUsModule"
            },
            {
                "path": "admin/privacy-policy",
                "loadChildren": "./pages/default/angular/privacy-policy/privacy-policy.module#PrivacyPolicyModule"
            },
            {
                "path": "admin/contact-us",
                "loadChildren": "./pages/default/angular/contact-us/contact-us.module#ContactUsModule"
            },
            {
                "path": "admin/cuisines",
                "loadChildren": "./pages/default/angular/cuisin/cuisin.module#CuisinModule"
            }
        ]
    },
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header-nav></app-header-nav> \n\n<router-outlet></router-outlet> <!-- end:: Body -->\n"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(function (result) {
            _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/codezeros/Desktop/DELI-SOS/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map