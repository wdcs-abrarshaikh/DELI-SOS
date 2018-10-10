(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-index-index-module"],{

/***/ "./src/app/theme/pages/default/index/index.component.html":
/*!****************************************************************!*\
  !*** ./src/app/theme/pages/default/index/index.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\n<div class=\"m-subheader\" appunwraptag=\"\">\n\t<div class=\"d-flex align-items-center\">\n\t\t<div class=\"mr-auto\">\n\t\t\t<h3 class=\"m-subheader__title\">Dashboard</h3>\n\t\t</div>\n\t\n\t</div>\n</div> <!-- END: Subheader -->\n<div class=\"m-content\">\n\t<!--Begin::Section-->\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-4\">\n\t\t\t<!--begin:: Widgets/Top Products-->\n\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\"> Users </h3><br>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3 class=\"m-portlet__head-caption\">5</h3>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<!--end:: Widgets/Top Products-->\n\t\t</div>\n\t\t<!-- <div class=\"col-xl-4\"> -->\n\t\t\t<!-- <div class=\"m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light  m-portlet--rounded-force\">\n\t\t\t\t<div class=\"m-portlet__head\">\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\"> Watchers </h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t</div> -->\n\t\t\n\t</div>\n\t</div>\n\t\t\n\t"

/***/ }),

/***/ "./src/app/theme/pages/default/index/index.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/pages/default/index/index.component.ts ***!
  \**************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _index_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.service */ "./src/app/theme/pages/default/index/index.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(indexService, toastService) {
        this.indexService = indexService;
        this.toastService = toastService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        // this.getUserList();
    };
    IndexComponent.prototype.getUserList = function () {
        var _this = this;
        this.indexService.getAllUsers().subscribe(function (response) {
            console.log(response);
            _this.usersList = response.response.count;
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-index",
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/theme/pages/default/index/index.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_index_service__WEBPACK_IMPORTED_MODULE_0__["IndexService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/index/index.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pages/default/index/index.module.ts ***!
  \***********************************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.component */ "./src/app/theme/pages/default/index/index.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../default.component */ "./src/app/theme/pages/default/default.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": _default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        "children": [
            {
                "path": "",
                "component": _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
            }
        ]
    }
];
var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({ imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _layouts_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ], declarations: [
                _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
            ] })
    ], IndexModule);
    return IndexModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/index/index.service.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/pages/default/index/index.service.ts ***!
  \************************************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
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

// import { URL } from './../../../../../app.service';



var URL = "http://66.70.179.133:4009/solow/v2/api/admin";
var IndexService = /** @class */ (function () {
    function IndexService(http) {
        this.http = http;
        this.usersList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    IndexService.prototype.setUsers = function (data) {
        this.usersList.next({ usersList: data });
    };
    IndexService.prototype.getUsers = function () {
        return this.usersList.asObservable();
    };
    IndexService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')));
        return headers;
    };
    IndexService.prototype.getAllUsers = function () {
        return this.http.get(URL + '/getUsers', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    IndexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IndexService);
    return IndexService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-index-index-module.js.map