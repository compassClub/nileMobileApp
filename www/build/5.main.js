webpackJsonp([5],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, fb, db, afAuth, authProvider, toastProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.authProvider = authProvider;
        this.toastProvider = toastProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loginForm = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])]
        });
    }
    // we determine if the user should be sent to the waiting page or home page.
    LoginPage.prototype.determineRoot = function () {
        var item = this.db.object('/users/' + this.afAuth.auth.currentUser.uid +
            '/waitingPage', { preserveSnapshot: true });
        item.subscribe(function (snapshot) {
            return snapshot.val();
        });
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            this.toastProvider.invalidInput();
        }
        else {
            // use the 'createUserWithEmail' function provided by the authProvider to
            // create and save the user.
            this.authProvider.loginUserWithEmail(this.loginForm.value.email, this.loginForm.value.password).then(function () {
                _this.loading.dismiss().then(function () {
                    if (_this.determineRoot) {
                        _this.navCtrl.setRoot('WaitingPage');
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                    }
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: 'OK', role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            // create and display the loading controller
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
<<<<<<< HEAD
        selector: 'page-login',template:/*ion-inline-start:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text" [formControl]="loginForm.controls[\'email\']">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE -->\n      <ion-item *ngIf="!loginForm.controls.email.valid && loginForm.controls.email.touched">\n        <p>You can try, but it\'s not a valid email.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [formControl]="loginForm.controls[\'password\']">\n        </ion-input>\n      </ion-item>\n\n    </ion-list>\n    <button ion-button block type="submit">\n      Login\n    </button>\n  </form>\n\n  <ion-item>\n    <button ion-button clear (click)="resetPassword()">\n      I forgot my password :(\n    </button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/login/login.html"*/,
=======
        selector: 'page-login',template:/*ion-inline-start:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text" [formControl]="loginForm.controls[\'email\']">\n        </ion-input>\n      </ion-item>\n      <!-- ERROR MESSAGE -->\n      <ion-item *ngIf="!loginForm.controls.email.valid && loginForm.controls.email.touched">\n        <p>You can try, but it\'s not a valid email.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [formControl]="loginForm.controls[\'password\']">\n        </ion-input>\n      </ion-item>\n\n    </ion-list>\n    <button ion-button block type="submit">\n      Login\n    </button>\n  </form>\n\n  <ion-item>\n    <button ion-button clear (click)="resetPassword()">\n      I forgot my password :(\n    </button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/login/login.html"*/,
>>>>>>> f50ea497a35b8b8980a76fd664964076d9795372
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map