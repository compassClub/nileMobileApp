webpackJsonp([1],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_company__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompanyPageModule", function() { return RegisterCompanyPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterCompanyPageModule = (function () {
    function RegisterCompanyPageModule() {
    }
    return RegisterCompanyPageModule;
}());
RegisterCompanyPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register_company__["a" /* RegisterCompanyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_company__["a" /* RegisterCompanyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register_company__["a" /* RegisterCompanyPage */]
        ]
    })
], RegisterCompanyPageModule);

//# sourceMappingURL=register-company.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = (function () {
    function Address(name, street, city, zipcode, state) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(companyName, address, email, phoneNumber) {
        this.companyName = companyName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_db_functions_db_functions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_company__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_address__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterCompanyPage; });
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
 * Generated class for the RegisterCompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterCompanyPage = (function () {
    function RegisterCompanyPage(navCtrl, fb, authProvider, dbFunctions, toastProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.dbFunctions = dbFunctions;
        this.toastProvider = toastProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.registerCompanyForm = fb.group({
            'companyName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'street': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'city': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'state': ['AL', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])],
            'zipcode': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            'phoneNumber': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(1)])]
        });
    }
    // The user clicks register.
    RegisterCompanyPage.prototype.onSubmit = function () {
        var _this = this;
        // use the 'createUserwithEmail' function provider by the authProvider to
        // create and save the user IF the registerForm is valid.
        if (!this.registerCompanyForm.valid) {
            this.toastProvider.invalidInput();
        }
        else {
            var address = new __WEBPACK_IMPORTED_MODULE_7__models_address__["a" /* Address */]('CompanyHome', this.registerCompanyForm.value.street, this.registerCompanyForm.value.city, this.registerCompanyForm.value.zipcode, this.registerCompanyForm.value.state);
            var company = new __WEBPACK_IMPORTED_MODULE_6__models_company__["a" /* Company */](this.registerCompanyForm.value.companyName, address, this.registerCompanyForm.value.email, this.registerCompanyForm.value.phoneNumber);
            this.dbFunctions.createCompany(company).then(function (_) {
                _this.loading.dismiss().then(function (_) {
                    // After Company Creation, lets prompt the user to take a quick tour.
                    _this.showConfirm();
                    // this.navCtrl.setRoot('HomePage');
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
    RegisterCompanyPage.prototype.displayErrorMessage = function (error) {
        var alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{
                    text: 'OK', role: 'cancel'
                }]
        });
        alert.present();
    };
    RegisterCompanyPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Congratulations, your company has been registered!',
            message: "We suggest you take a minute to tour the app, but we get it if you're too cool for directions.",
            buttons: [
                {
                    text: 'Too Cool',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: "Let's go!",
                    handler: function () {
                        _this.navCtrl.setRoot('TourPage');
                    }
                }
            ]
        });
        confirm.present();
    };
    return RegisterCompanyPage;
}());
RegisterCompanyPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
<<<<<<< HEAD
        selector: 'page-register-company',template:/*ion-inline-start:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/register-company/register-company.html"*/'<!--\n  Generated template for the RegisterCompanyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register a Company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="registerCompanyForm" (ngSubmit)="onSubmit()">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Company Name</ion-label>\n          <ion-input type="text" formControlName="companyName"></ion-input>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.companyName.valid && registerCompanyForm.controls.companyName.touched">\n          <p>Your company must have a name.</p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input type="text" formControlName="phoneNumber"></ion-input>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.phoneNumber.valid && registerCompanyForm.controls.phoneNumber.touched">\n          <p>You must provide a phone number.</p>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="text" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!registerCompanyForm.controls.email.valid && registerCompanyForm.controls.email.touched">\n          <p>That email doesn\'t look correct.</p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Address</ion-label>\n          <ion-input type="text" formControlName="street"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>City</ion-label>\n          <ion-input type="text" formControlName="city"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>State</ion-label>\n          <!-- <ion-input type="text" formControlName="state"></ion-input> -->\n          <ion-select formControlName="state">\n            <ion-option value="AL" selected="true">Alabama</ion-option>\n          	<ion-option value="AK">Alaska</ion-option>\n          	<ion-option value="AZ">Arizona</ion-option>\n          	<ion-option value="AR">Arkansas</ion-option>\n          	<ion-option value="CA">California</ion-option>\n          	<ion-option value="CO">Colorado</ion-option>\n          	<ion-option value="CT">Connecticut</ion-option>\n          	<ion-option value="DE">Delaware</ion-option>\n          	<ion-option value="DC">District Of Columbia</ion-option>\n          	<ion-option value="FL">Florida</ion-option>\n          	<ion-option value="GA">Georgia</ion-option>\n          	<ion-option value="HI">Hawaii</ion-option>\n          	<ion-option value="ID">Idaho</ion-option>\n          	<ion-option value="IL">Illinois</ion-option>\n          	<ion-option value="IN">Indiana</ion-option>\n          	<ion-option value="IA">Iowa</ion-option>\n          	<ion-option value="KS">Kansas</ion-option>\n          	<ion-option value="KY">Kentucky</ion-option>\n          	<ion-option value="LA">Louisiana</ion-option>\n          	<ion-option value="ME">Maine</ion-option>\n          	<ion-option value="MD">Maryland</ion-option>\n          	<ion-option value="MA">Massachusetts</ion-option>\n          	<ion-option value="MI">Michigan</ion-option>\n          	<ion-option value="MN">Minnesota</ion-option>\n          	<ion-option value="MS">Mississippi</ion-option>\n          	<ion-option value="MO">Missouri</ion-option>\n          	<ion-option value="MT">Montana</ion-option>\n          	<ion-option value="NE">Nebraska</ion-option>\n          	<ion-option value="NV">Nevada</ion-option>\n          	<ion-option value="NH">New Hampshire</ion-option>\n          	<ion-option value="NJ">New Jersey</ion-option>\n          	<ion-option value="NM">New Mexico</ion-option>\n          	<ion-option value="NY">New York</ion-option>\n          	<ion-option value="NC">North Carolina</ion-option>\n          	<ion-option value="ND">North Dakota</ion-option>\n          	<ion-option value="OH">Ohio</ion-option>\n          	<ion-option value="OK">Oklahoma</ion-option>\n          	<ion-option value="OR">Oregon</ion-option>\n          	<ion-option value="PA">Pennsylvania</ion-option>\n          	<ion-option value="RI">Rhode Island</ion-option>\n          	<ion-option value="SC">South Carolina</ion-option>\n          	<ion-option value="SD">South Dakota</ion-option>\n          	<ion-option value="TN">Tennessee</ion-option>\n          	<ion-option value="TX">Texas</ion-option>\n          	<ion-option value="UT">Utah</ion-option>\n          	<ion-option value="VT">Vermont</ion-option>\n          	<ion-option value="VA">Virginia</ion-option>\n          	<ion-option value="WA">Washington</ion-option>\n          	<ion-option value="WV">West Virginia</ion-option>\n          	<ion-option value="WI">Wisconsin</ion-option>\n          	<ion-option value="WY">Wyoming</ion-option>\n          </ion-select>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.state.valid && registerCompanyForm.controls.state.touched">\n          <p>You must choose a state.</p>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>ZIP Code</ion-label>\n          <ion-input type="text" formControlName="zipcode"></ion-input>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.zipcode.valid && registerCompanyForm.controls.zipcode.touched">\n          <p>A zipcode must be at least 5 digits.</p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block type="submit">\n      Register your Company\n    </button>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/nsisk/KEVIN/nileMobileApp/src/pages/register-company/register-company.html"*/,
=======
        selector: 'page-register-company',template:/*ion-inline-start:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/register-company/register-company.html"*/'<!--\n  Generated template for the RegisterCompanyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register a Company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="registerCompanyForm" (ngSubmit)="onSubmit()">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Company Name</ion-label>\n          <ion-input type="text" formControlName="companyName"></ion-input>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.companyName.valid && registerCompanyForm.controls.companyName.touched">\n          <p>Your company must have a name.</p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label stacked>Phone Number</ion-label>\n          <ion-input type="text" formControlName="phoneNumber"></ion-input>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.phoneNumber.valid && registerCompanyForm.controls.phoneNumber.touched">\n          <p>You must provide a phone number.</p>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="text" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!registerCompanyForm.controls.email.valid && registerCompanyForm.controls.email.touched">\n          <p>That email doesn\'t look correct.</p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label stacked>Address</ion-label>\n          <ion-input type="text" formControlName="street"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>City</ion-label>\n          <ion-input type="text" formControlName="city"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>State</ion-label>\n          <!-- <ion-input type="text" formControlName="state"></ion-input> -->\n          <ion-select formControlName="state">\n            <ion-option value="AL" selected="true">Alabama</ion-option>\n          	<ion-option value="AK">Alaska</ion-option>\n          	<ion-option value="AZ">Arizona</ion-option>\n          	<ion-option value="AR">Arkansas</ion-option>\n          	<ion-option value="CA">California</ion-option>\n          	<ion-option value="CO">Colorado</ion-option>\n          	<ion-option value="CT">Connecticut</ion-option>\n          	<ion-option value="DE">Delaware</ion-option>\n          	<ion-option value="DC">District Of Columbia</ion-option>\n          	<ion-option value="FL">Florida</ion-option>\n          	<ion-option value="GA">Georgia</ion-option>\n          	<ion-option value="HI">Hawaii</ion-option>\n          	<ion-option value="ID">Idaho</ion-option>\n          	<ion-option value="IL">Illinois</ion-option>\n          	<ion-option value="IN">Indiana</ion-option>\n          	<ion-option value="IA">Iowa</ion-option>\n          	<ion-option value="KS">Kansas</ion-option>\n          	<ion-option value="KY">Kentucky</ion-option>\n          	<ion-option value="LA">Louisiana</ion-option>\n          	<ion-option value="ME">Maine</ion-option>\n          	<ion-option value="MD">Maryland</ion-option>\n          	<ion-option value="MA">Massachusetts</ion-option>\n          	<ion-option value="MI">Michigan</ion-option>\n          	<ion-option value="MN">Minnesota</ion-option>\n          	<ion-option value="MS">Mississippi</ion-option>\n          	<ion-option value="MO">Missouri</ion-option>\n          	<ion-option value="MT">Montana</ion-option>\n          	<ion-option value="NE">Nebraska</ion-option>\n          	<ion-option value="NV">Nevada</ion-option>\n          	<ion-option value="NH">New Hampshire</ion-option>\n          	<ion-option value="NJ">New Jersey</ion-option>\n          	<ion-option value="NM">New Mexico</ion-option>\n          	<ion-option value="NY">New York</ion-option>\n          	<ion-option value="NC">North Carolina</ion-option>\n          	<ion-option value="ND">North Dakota</ion-option>\n          	<ion-option value="OH">Ohio</ion-option>\n          	<ion-option value="OK">Oklahoma</ion-option>\n          	<ion-option value="OR">Oregon</ion-option>\n          	<ion-option value="PA">Pennsylvania</ion-option>\n          	<ion-option value="RI">Rhode Island</ion-option>\n          	<ion-option value="SC">South Carolina</ion-option>\n          	<ion-option value="SD">South Dakota</ion-option>\n          	<ion-option value="TN">Tennessee</ion-option>\n          	<ion-option value="TX">Texas</ion-option>\n          	<ion-option value="UT">Utah</ion-option>\n          	<ion-option value="VT">Vermont</ion-option>\n          	<ion-option value="VA">Virginia</ion-option>\n          	<ion-option value="WA">Washington</ion-option>\n          	<ion-option value="WV">West Virginia</ion-option>\n          	<ion-option value="WI">Wisconsin</ion-option>\n          	<ion-option value="WY">Wyoming</ion-option>\n          </ion-select>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.state.valid && registerCompanyForm.controls.state.touched">\n          <p>You must choose a state.</p>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>ZIP Code</ion-label>\n          <ion-input type="text" formControlName="zipcode"></ion-input>\n        </ion-item>\n        <!-- ERROR MESSAGE-->\n        <ion-item *ngIf="!registerCompanyForm.controls.zipcode.valid && registerCompanyForm.controls.zipcode.touched">\n          <p>A zipcode must be at least 5 digits.</p>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block type="submit">\n      Register your Company\n    </button>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/register-company/register-company.html"*/,
>>>>>>> f50ea497a35b8b8980a76fd664964076d9795372
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_db_functions_db_functions__["a" /* DbFunctionsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* AlertController */]])
], RegisterCompanyPage);

//# sourceMappingURL=register-company.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map