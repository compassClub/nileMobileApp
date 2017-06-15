webpackJsonp([0],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourPageModule", function() { return TourPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AddLocationPage } from '../add-location/add-location';
var TourPageModule = (function () {
    function TourPageModule() {
    }
    return TourPageModule;
}());
TourPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tour__["a" /* TourPage */]
            // AddLocationPage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tour__["a" /* TourPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tour__["a" /* TourPage */]
        ]
        // entryComponents: [
        //   AddLocationPage
        // ]
    })
], TourPageModule);

//# sourceMappingURL=tour.module.js.map

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

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_db_functions_db_functions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_location_modal_add_location_modal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_places_places__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLocationPage; });
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
 * Generated class for the AddLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddLocationPage = (function () {
    function AddLocationPage(navCtrl, fb, viewCtrl, dbFunctions, toastProvider, loadingCtrl, alertCtrl, modalCtrl, placesService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.dbFunctions = dbFunctions;
        this.toastProvider = toastProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.placesService = placesService;
        // this will contain what the user is typing into the searchbar
        this.searchQuery = '';
        // Creates a new instance of the AutocompleteService
        this.service = new google.maps.places.AutocompleteService();
        // initialize with blank values
        this.autocompletePlaces = [];
    }
    // automatically open the keyboard when the page loads.
    AddLocationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 150);
    };
    // Called when a user taps a location from the propogated list.
    AddLocationPage.prototype.chooseItem = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__add_location_modal_add_location_modal__["a" /* AddLocationModal */], { itemObject: item });
        modal.present();
    };
    // The user clicks the cancel button on the searchbar.
    AddLocationPage.prototype.onClear = function () {
        this.autocompletePlaces = [];
    };
    AddLocationPage.prototype.searchForLocation = function (search) {
        // retrieve the input value from the target event.
        var val = search.target.value;
        console.log("Val is: " + val);
        // if val is empty, dont search.
        if (val && val.trim() === '') {
            this.autocompletePlaces = [];
        }
        else {
            this.autocompletePlaces = [];
            this.autocompletePlaces = this.placesService.autocompleteSearch(val);
        }
    };
    return AddLocationPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('input'),
    __metadata("design:type", Object)
], AddLocationPage.prototype, "myInput", void 0);
AddLocationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-add-location',template:/*ion-inline-start:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/add-location/add-location.html"*/'<!--\n  Generated template for the AddEmployeePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="searchForLocation($event)"\n    [showCancelButton]="true"\n    (ionClear)="onClear()"\n    placeholder="ex: Address or Place"\n    debounce="400"\n    #input></ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor="let place of autocompletePlaces" tappable (click)="chooseItem(place)">\n      {{ place.description }}\n    </ion-item>\n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/add-location/add-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_db_functions_db_functions__["a" /* DbFunctionsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_places_places__["a" /* PlacesProvider */]])
], AddLocationPage);

//# sourceMappingURL=add-location.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_location_add_location__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_employee_add_employee__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourPage; });
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
 * Generated class for the TourPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TourPage = (function () {
    function TourPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    TourPage.prototype.addLocation = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_location_add_location__["a" /* AddLocationPage */]);
        modal.present();
    };
    TourPage.prototype.addEmployee = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_employee_add_employee__["a" /* AddEmployeePage */]);
        modal.present();
    };
    TourPage.prototype.continue = function () {
        this.slides.slideNext();
    };
    return TourPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], TourPage.prototype, "slides", void 0);
TourPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-tour',template:/*ion-inline-start:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/tour/tour.html"*/'<!--\n  Generated template for the TourPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>tour</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager="true">\n    <ion-slide>\n      <h2>Locations</h2>\n      <ion-icon name="locate"></ion-icon>\n      <p>Locations act as an address book for stores/jobsites/customers that you use often.</p>\n      <p>Your company starts with one location, but more can easily be added.</p>\n      <button ion-button round (click)="addLocation()">Add a Location</button>\n    </ion-slide>\n    <ion-slide>\n      <h2>Employees</h2>\n      <p>Easily manage employees.</p>\n      <button ion-button full (click)="addEmployee()">Start by registering your first employee.</button>\n    </ion-slide>\n    <ion-slide>\n      <p>Hello World 3</p>\n    </ion-slide>\n    <ion-slide>\n      <p>Hello World 4</p>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons end>\n      <button ion-button icon-right color="royal" (click)="continue()">\n        Continue\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/NILE/nileMobileGitRepo/src/pages/tour/tour.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], TourPage);

//# sourceMappingURL=tour.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map