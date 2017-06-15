import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController, NavParams, Loading, LoadingController, AlertController,
  } from 'ionic-angular';

import { DbFunctionsProvider } from '../../providers/db-functions/db-functions';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the AddLocationModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'add-location-modal',
  templateUrl: 'add-location-modal.html',
})
export class AddLocationModal {
  // @ViewChild('nameInput') nameInput;
  // We construct a new instance of the PlacesService.
  placeResultService = new google.maps.places.PlacesService(document.createElement('div'))

  // The form group that is submitted to create the 'location' NOTE: maybe we should call 'locations' places instead.
  public locationForm: FormGroup;
  public loading: Loading;

  public address : string;
  public name: string;

  // controls the state of being able to edit the address or not.
  public readonly: boolean;

  // item: any;

  // we submit the place_id and are returned the PlaceResult, which defines
    // information about a place.
  placeResult: google.maps.places.PlaceResult;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    fb: FormBuilder)
  {
    this.readonly = true;

    // retrieve the place object passed through the nav params.
    var placeObject = navParams.get('itemObject');

    var me = this;
    // Using 'placeObject.place_id' as a reference, we getDetails about that place.
    this.placeResultService.getDetails({placeId: placeObject.placeId}, function(place, status){
      console.log(place)
      me.address = place.formatted_address;
      me.name = place.name;
      console.log("The address is:" + me.address);
    })

    this.locationForm = fb.group({
      'name': [this.address, Validators.compose([Validators.required, Validators.minLength(1)])],
      'address': [this.name, Validators.compose([Validators.required, Validators.minLength(1)]), ],
      'note': [''],
      'accessCode': ['']
    });
    // this.locationForm.controls['name'].setValue(name);
    // (<HTMLInputElement>document.getElementById('nameInput')).value = name;
  }



  // The user submits the form.
  onSubmit(){

  }


}
