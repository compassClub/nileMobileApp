webpackJsonp([4],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, fb, authProvider, toastProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.toastProvider = toastProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.registerForm = fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    // The user clicks register.
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        // use the 'createUserwithEmail' function provider by the authProvider to
        // create and save the user IF the registerForm is valid.
        if (!this.registerForm.valid) {
            this.toastProvider.invalidInput();
        }
        else {
            this.authProvider.createUserWithEmail(this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.email, this.registerForm.value.password).then(function (_) {
                _this.loading.dismiss().then(function (_) {
                    _this.navCtrl.setRoot('WaitingPage');
                });
            }, function (error) {
                _this.loading.dismiss().then(function (_) {
                    _this.displayErrorMessage(error);
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    // Create and display an error message.
    RegisterPage.prototype.displayErrorMessage = function (error) {
        var alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{
                    text: 'OK', role: 'cancel'
                }]
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <!-- FIRST NAME -->\n      <ion-item>\n        <ion-label stacked>First Name</ion-label>\n        <ion-input type="text" formControlName="firstName">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE-->\n      <ion-item *ngIf="!registerForm.controls.firstName.valid && registerForm.controls.firstName.touched">\n        <p>Your name has no letters?</p>\n      </ion-item>\n\n      <!-- LAST NAME -->\n      <ion-item>\n        <ion-label stacked>Last Name</ion-label>\n        <ion-input type="text" formControlName="lastName">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE-->\n      <ion-item *ngIf="!registerForm.controls.lastName.valid && registerForm.controls.lastName.touched">\n        <p>Your name has no letters?</p>\n      </ion-item>\n\n      <!-- EMAIL -->\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" formControlName="email"\n          [class.invalid]="!registerForm.controls.email.valid && registerForm.controls.email.dirty">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE -->\n      <ion-item *ngIf="!registerForm.controls.email.valid && registerForm.controls.email.touched">\n        <p>Not a valid email.</p>\n      </ion-item>\n\n      <!-- PASSWORD -->\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" formControlName="password">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE -->\n      <ion-item *ngIf="!registerForm.controls.password.valid && registerForm.controls.password.touched">\n        <p>Password must be longer than 6 characters.</p>\n      </ion-item>\n\n    </ion-list>\n    <button ion-button block type="submit">\n      Register\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map