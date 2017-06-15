webpackJsonp([8],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_employee__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePageModule", function() { return AddEmployeePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddEmployeePageModule = (function () {
    function AddEmployeePageModule() {
    }
    return AddEmployeePageModule;
}());
AddEmployeePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_employee__["a" /* AddEmployeePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_employee__["a" /* AddEmployeePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_employee__["a" /* AddEmployeePage */]
        ]
    })
], AddEmployeePageModule);

//# sourceMappingURL=add-employee.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_functions_db_functions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_contacts_search_contacts__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddEmployeePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddEmployeePage = (function () {
    function AddEmployeePage(navCtrl, fb, viewCtrl, dbFunctions, toastProvider, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.dbFunctions = dbFunctions;
        this.toastProvider = toastProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.addEmployeeForm = fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(9)]
        });
    }
    // User clicks the import from contacts button
    AddEmployeePage.prototype.importFromContacts = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_contacts_search_contacts__["a" /* SearchContactsPage */]);
        modal.present();
    };
    return AddEmployeePage;
}());
AddEmployeePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-add-employee',template:/*ion-inline-start:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/add-employee/add-employee.html"*/'<!--\n  Generated template for the AddEmployeePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add an Employee</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button icon-left (click)="importFromContacts()">\n    <ion-icon name="person-add"></ion-icon>\n    Import from Contacts\n  </button>\n  <form [formGroup]="addEmployeeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <!-- FIRST NAME -->\n      <ion-item>\n        <ion-label stacked>First Name *</ion-label>\n        <ion-input type="text" formControlName="firstName">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE-->\n      <ion-item *ngIf="!addEmployeeForm.controls.firstName.valid && addEmployeeForm.controls.firstName.touched">\n        <p>Your name has no letters?</p>\n      </ion-item>\n\n      <!-- LAST NAME -->\n      <ion-item>\n        <ion-label stacked>Last Name *</ion-label>\n        <ion-input type="text" formControlName="lastName">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE-->\n      <ion-item *ngIf="!addEmployeeForm.controls.lastName.valid && addEmployeeForm.controls.lastName.touched">\n        <p>Your name has no letters?</p>\n      </ion-item>\n\n      <!-- EMAIL -->\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" formControlName="email"\n          [class.invalid]="!addEmployeeForm.controls.email.valid && addEmployeeForm.controls.email.dirty">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE -->\n      <!-- <ion-item *ngIf="!addEmployeeForm.controls.email.valid && addEmployeeForm.controls.email.touched">\n        <p>Not a valid email.</p>\n      </ion-item> -->\n\n      <!-- Phone -->\n      <ion-item>\n        <ion-label stacked>Phone</ion-label>\n        <ion-input type="tel" formControlName="phone"\n          [class.invalid]="!addEmployeeForm.controls.phone.valid && addEmployeeForm.controls.phone.dirty">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE -->\n      <ion-item *ngIf="!addEmployeeForm.controls.phone.valid">\n        <p>I think phone numbers have more numbers.</p>\n      </ion-item>\n\n\n    </ion-list>\n    <button ion-button block type="submit">\n      Register\n    </button>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/add-employee/add-employee.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_db_functions_db_functions__["a" /* DbFunctionsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
], AddEmployeePage);

//# sourceMappingURL=add-employee.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map