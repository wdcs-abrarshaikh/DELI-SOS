(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-menu-menu-module"],{

/***/ "./src/app/theme/pages/default/angular/menu/menu.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/menu/menu.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add{\n    padding: 1.25rem 1.65rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color:white;\n    background-color: transparent;\n    background: #5867dd;\n    border-color: #5867dd;\n    margin-left: 95%;\n    margin-top:2%;\n}\n.btn-edit{\n    color:white;\n    background-color: transparent;\n    background: #029c16;\n    border-color:  #029c16;\n\n}\n.btn-delete{\n    color:white;\n    background-color: transparent;\n    background: #a73a08;\n    border-color: #a73a08;\n\n}"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/menu/menu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/menu/menu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Banner</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n   Name: <input type=\"text\">\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<button class=\"btn-add\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i></button>\n            <div>\n            \n              <div>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                    <thead>\n                      <tr>\n                        <th>Id</th>\n                        <th>Name</th>\n                        <th>Contact</th>\n                        <th>City</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\">1</th>\n                      \n                        <td>aaa</td>\n                        <td>9876543210</td>\n                        <td>Ahmedabad</td>\n                        <td>\n                            <button type=\"button\" class=\"btn-edit\" (click)=\"open(content)\">\n                              <i class=\"fas fa-edit\"></i>\n                            </button>&nbsp;&nbsp;\n                            <button type=\"button\"class=\"btn-delete\">\n                              <i class=\"fas fa-trash-alt\"></i>\n                            </button>\n                          </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n         -->"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/menu/menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/menu/menu.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(modal, modalService) {
        this.modal = modal;
        this.modalService = modalService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.open = function (content) {
        this._modalRef = this.modalService.open(content);
        this._modalContent = content;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/theme/pages/default/angular/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/theme/pages/default/angular/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/menu/menu.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/menu/menu.module.ts ***!
  \*****************************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ "./src/app/theme/pages/default/angular/menu/menu.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"],
        children: [
            {
                path: "",
                component: _menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
            }
        ]
    },
];
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ], declarations: [
                _menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-menu-menu-module.js.map