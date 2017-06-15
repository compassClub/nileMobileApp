webpackJsonp([7],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_location__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationPageModule", function() { return AddLocationPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddLocationPageModule = (function () {
    function AddLocationPageModule() {
    }
    return AddLocationPageModule;
}());
AddLocationPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_location__["a" /* AddLocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_location__["a" /* AddLocationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_location__["a" /* AddLocationPage */]
        ]
    })
], AddLocationPageModule);

//# sourceMappingURL=add-location.module.js.map

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
        selector: 'page-add-location',template:/*ion-inline-start:"/Users/kevintowe/Desktop/coolName/src/pages/add-location/add-location.html"*/'<!--\n  Generated template for the AddEmployeePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="searchForLocation($event)"\n    [showCancelButton]="true"\n    (ionClear)="onClear()"\n    placeholder="ex: Address or Place"\n    debounce="400"\n    #input></ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor="let place of autocompletePlaces" tappable (click)="chooseItem(place)">\n      {{ place.description }}\n    </ion-item>\n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevintowe/Desktop/coolName/src/pages/add-location/add-location.html"*/,
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

/***/ })

});
//# sourceMappingURL=7.main.js.map