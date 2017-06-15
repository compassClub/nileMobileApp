import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, NavParams, ViewController, Loading,
  LoadingController, AlertController, ModalController} from 'ionic-angular';

import { DbFunctionsProvider } from '../../providers/db-functions/db-functions';
import { ToastProvider } from '../../providers/toast/toast';
import { AddLocationModal } from '../add-location-modal/add-location-modal';

import { PlacesProvider } from '../../providers/places/places';

/**
 * Generated class for the AddLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-location',
  templateUrl: 'add-location.html',
})
export class AddLocationPage {

  @ViewChild('input') myInput ;

  // this will contain what the user is typing into the searchbar
  searchQuery: string = '';

  // This will contain the suggestion list received from google
  public autocompletePlaces: Object[];

  // Creates a new instance of the AutocompleteService
  service = new google.maps.places.AutocompleteService();

  public loading: Loading;

  constructor(public navCtrl: NavController,
    fb: FormBuilder,
    public viewCtrl: ViewController,
    public dbFunctions: DbFunctionsProvider,
    public toastProvider: ToastProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public placesService: PlacesProvider)
  {
    // initialize with blank values
    this.autocompletePlaces = [];
  }

// automatically open the keyboard when the page loads.
  ionViewDidLoad() {
    setTimeout(() => {
      this.myInput.setFocus();
    },150);
  }

// Called when a user taps a location from the propogated list.
  chooseItem(item: any){
    let modal = this.modalCtrl.create(AddLocationModal, {itemObject: item});
    modal.present();
  }

  // The user clicks the cancel button on the searchbar.
  onClear(){
    this.autocompletePlaces = [];
  }


  searchForLocation(search: any){
    // retrieve the input value from the target event.
    var val = search.target.value;
    console.log("Val is: "+ val);
    // if val is empty, dont search.
    if(val && val.trim() === ''){
      this.autocompletePlaces = [];
    } else {
      this.autocompletePlaces = [];
      this.autocompletePlaces = this.placesService.autocompleteSearch(val)
    }
  }



}
