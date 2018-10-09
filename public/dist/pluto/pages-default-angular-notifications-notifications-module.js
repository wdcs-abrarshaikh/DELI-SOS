(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-default-angular-notifications-notifications-module"],{

/***/ "./src/app/theme/pages/default/angular/notifications/notifications.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/notifications/notifications.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headers{\n   font-size: 20px\n}"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/notifications/notifications.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/notifications/notifications.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"header\">Notifications</h2>\n\n\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n      <tr class=\"headers\">\n        <th>Name</th>\n        <th>Content</th>\n        <th>Flag</th>\n        <th>Status</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let notify of notificationList; let i=index\">\n        <td> {{notify.name}}</td>\n        <td>{{notify.content}}</td>\n        <td>{{notify.flag}}</td>\n        <td>{{notify.isActive}}</td>\n        <td>\n          <button type=\"button\" class=\"btn-edit\">\n            <i class=\"fas fa-edit\" (click)=\"updateNotificationModel(notify)\"></i>\n          </button> &nbsp;&nbsp;\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/angular/notifications/notifications.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/notifications/notifications.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.service */ "./src/app/theme/pages/default/angular/notifications/notifications.service.ts");
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





// @Component({
//   selector: 'app-user',
//   template: ` <div class="modal-header">
//   <h4 class="modal-title">{{ isAdd ? 'Add' : 'Edit'}} Notification</h4>
//   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
// <div class="modal-body">
// <form [formGroup]="notificationForm" (ngSubmit)="addNotification()">
//             <div class="form-group">
//                 <label for="name">Name</label>
//                 <input type="text" formControlName="name" [(ngModel)]="name" class="form-control"/>
//                 <span *ngIf="notificationForm.controls.name.errors?.required" class="lbl-err">Name is required.</span>
//             </div>
//             <div class="form-group">
//                 <label for="content">Content</label>
//                 <input type="text" formControlName="content" [(ngModel)]="content" class="form-control" />
//                 <span *ngIf="notificationForm.controls.content.errors?.required" class="lbl-err">content is required.</span>
//             </div>
//             <div class="form-group">
//                 <label for="flag">Flag</label>
//                 <input type="flag" formControlName="flag"  [(ngModel)]="flag" class="form-control"/>
//                 <span *ngIf="notificationForm.controls.flag.errors?.required" class="lbl-err">flag is required.</span>
//             </div>
//            <div class="modal-footer">
//             <div class="form-group">
//             <button type="submit"  class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>
//             <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
//             </div>
//          </div>
//         </form>`,
//   styleUrls: ['./notifications.component.css']
// })
// export class NgbdModalContent {
//   notificationList: Array<any>;
//   notificationForm: FormGroup;
//   @Input() id;
//   @Input() fullName;
//   @Input() gender;
//   loading = false;
//   submitted = false;
//   isAdd: boolean;
//   constructor(public activeModal: NgbActiveModal,
//     private _router: Router,
//     private _formBuilder: FormBuilder,
//     private modalService: NgbModal,
//     private notificationService: NotificationService,
//     private toastService: ToastrService) { }
//   ngOnInit() {
//     this.buildUserForm();
//   }
//   get f() {
//     return this.notificationForm.controls;
//   }
//   buildUserForm() {
//     this.notificationForm = this._formBuilder.group({
//       emailId: ['', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]],
//       password: ['', [Validators.required]],
//       fullName: ['', [Validators.required]],
//       deviceToken: ['', [Validators.required]],
//       deviceType: ['', [Validators.required]],
//       gender: '',
//     });
//   }
//   addNotification() {
//     if (this.isAdd) {
//       var addObj = {
//         "emailId": this.notificationForm.controls['emailId'].value,
//         "password": this.notificationForm.controls['password'].value,
//         "fullName": this.notificationForm.controls['fullName'].value,
//         "deviceToken": this.notificationForm.controls['deviceToken'].value,
//         "deviceType": this.notificationForm.controls['deviceType'].value,
//         "gender": this.notificationForm.controls['gender'].value,
//       }
//       this.notificationService.addUser(addObj).subscribe(
//         data => {
//           this.getAllUser();
//           this.activeModal.dismiss();
//           this.toastService.success(data['response'].responseMessage);
//         },
//         error => {
//           this.toastService.error(error['response'].responseMessage);
//         });
//     } else {
//       var editObj = {
//         "emailId": this.notificationForm.controls['emailId'].value,
//         "password": this.notificationForm.controls['password'].value,
//         "fullName": this.notificationForm.controls['fullName'].value,
//         "deviceToken": this.notificationForm.controls['deviceToken'].value,
//         "deviceType": this.notificationForm.controls['deviceType'].value,
//         "gender": this.notificationForm.controls['gender'].value,
//       }
//       console.log(' edit user id', this.id)
//       this.notificationService.editUser(editObj, this.id).subscribe(
//         data => {
//           this.getAllUser();
//           this.activeModal.dismiss();
//           console.log('dataaaaaa', data);
//           this.toastService.success(data['response'].responseMessage);
//         },
//         error => {
//           console.log('error' + error)
//           this.toastService.error(error['errors'].message);
//         });
//     }
//   }
//   getAllUser() {
//     this.notificationService.getAllUsers().subscribe((response: any) => {
//       this.notificationService.setUsers(response);
//     })
//   }
//   validateForm() {
//     if (this.notificationForm.valid) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   onSubmit() {
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.notificationForm.invalid) {
//       return;
//     }
//     this.loading = true;
//   }
// }
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(modalService, toastService, _formBuilder, notificationService) {
        var _this = this;
        this.modalService = modalService;
        this.toastService = toastService;
        this._formBuilder = _formBuilder;
        this.notificationService = notificationService;
        this.loading = false;
        this.submitted = false;
        this.notificationService.getAllNotifications().subscribe(function (data) {
            var blankArray = [];
            for (var i in data.response.result[0]) {
                var obj = {
                    name: i
                };
                for (var k in data.response.result[0][i]) {
                    obj[k] = data.response.result[0][i][k];
                }
                blankArray.push(obj);
            }
            _this.notificationList = blankArray;
        });
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.getAllNotifications();
    };
    NotificationsComponent.prototype.updateNotificationModel = function (obj) {
        // var editObj = {
        //   "name": this.notificationForm.controls['name'].value,
        //   "content": this.notificationForm.controls['content'].value,
        //   "flag": this.notificationForm.controls['flag'].value,
        //   "isActive": this.notificationForm.controls['isActive'].value
        var _this = this;
        // }
        var editObj = obj;
        console.log(editObj);
        this.notificationService.updateNotifications(editObj).subscribe(function (data) {
            _this.toastService.success(data['response'].responseMessage);
            _this.getAllNotifications();
        }, function (error) {
            _this.toastService.error(error['error'].message);
        });
    };
    NotificationsComponent.prototype.validateForm = function () {
        if (this.notificationForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    NotificationsComponent.prototype.getAllNotifications = function () {
        var _this = this;
        this.notificationService.getAllNotifications().subscribe(function (response) {
            _this.notificationService.setNotifications(response.response.result);
        });
    };
    Object.defineProperty(NotificationsComponent.prototype, "f", {
        get: function () {
            return this.notificationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    NotificationsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.notificationForm.invalid) {
            return;
        }
        this.loading = true;
    };
    NotificationsComponent.prototype.open = function (obj) {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/theme/pages/default/angular/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/theme/pages/default/angular/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/notifications/notifications.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/notifications/notifications.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.service */ "./src/app/theme/pages/default/angular/notifications/notifications.service.ts");
/* harmony import */ var _notifications_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.routing */ "./src/app/theme/pages/default/angular/notifications/notifications.routing.ts");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component */ "./src/app/theme/pages/default/angular/notifications/notifications.component.ts");
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











var routes = [{
        path: "",
        component: _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
        children: [{
                path: "",
                component: _notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]
            }]
    }];
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _notifications_routing__WEBPACK_IMPORTED_MODULE_1__["NotificationsRoutingModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]],
            declarations: [
                _notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]
            ],
            providers: [_notifications_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"]],
            entryComponents: []
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/notifications/notifications.routing.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/notifications/notifications.routing.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component */ "./src/app/theme/pages/default/angular/notifications/notifications.component.ts");
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
                component: _notifications_component__WEBPACK_IMPORTED_MODULE_0__["NotificationsComponent"],
            }
        ]
    }];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [],
            providers: []
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/angular/notifications/notifications.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/pages/default/angular/notifications/notifications.service.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
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




var URL = "http://66.70.179.133:4009/solow/v2/api/admin";
var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
        this.notificationList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    NotificationService.prototype.setNotifications = function (data) {
        this.notificationList.next({ notificationList: data });
    };
    NotificationService.prototype.getHeaderWithToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', JSON.parse(localStorage.getItem('jwt')));
        return headers;
    };
    NotificationService.prototype.getAllNotifications = function () {
        return this.http.get(URL + '/getNotificationModel', { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    NotificationService.prototype.updateNotifications = function (user) {
        return this.http.put(URL + '/updateNotificationModel', user, { headers: this.getHeaderWithToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-default-angular-notifications-notifications-module.js.map