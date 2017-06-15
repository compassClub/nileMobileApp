webpackJsonp([2],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waiting__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPageModule", function() { return WaitingPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WaitingPageModule = (function () {
    function WaitingPageModule() {
    }
    return WaitingPageModule;
}());
WaitingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__waiting__["a" /* WaitingPage */]
        ]
    })
], WaitingPageModule);

//# sourceMappingURL=waiting.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingPage; });
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
 * Generated class for the WaitingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WaitingPage = (function () {
    function WaitingPage(navCtrl, authProvider, fb) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
    }
    WaitingPage.prototype.logout = function () {
        this.authProvider.logout();
        this.navCtrl.setRoot('LandingPage');
    };
    WaitingPage.prototype.registerCompany = function () {
        this.navCtrl.push('RegisterCompanyPage');
    };
    return WaitingPage;
}());
WaitingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
<<<<<<< HEAD
        selector: 'page-waiting',template:/*ion-inline-start:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/waiting/waiting.html"*/'<!--\n  Generated template for the WaitingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Waiting</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header text-center>\n      ENTER YOUR ACCESS CODE\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-input type="number" placeholder="Access Code"></ion-input>\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n  <h2 text-center class="marginOr">or</h2>\n\n  <button ion-button round full (click)="registerCompany()">\n    register your company\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/waiting/waiting.html"*/,
=======
        selector: 'page-waiting',template:/*ion-inline-start:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/waiting/waiting.html"*/'<!--\n  Generated template for the WaitingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Waiting</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header text-center>\n      ENTER YOUR ACCESS CODE\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-input type="number" placeholder="Access Code"></ion-input>\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n  <h2 text-center class="marginOr">or</h2>\n\n  <button ion-button round full (click)="registerCompany()">\n    register your company\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/waiting/waiting.html"*/,
>>>>>>> f50ea497a35b8b8980a76fd664964076d9795372
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]])
], WaitingPage);

//# sourceMappingURL=waiting.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map