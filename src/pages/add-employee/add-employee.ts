import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, NavParams, ViewController, Loading,
  LoadingController, AlertController, ModalController} from 'ionic-angular';


import { Address } from '../../models/address';
import { DbFunctionsProvider } from '../../providers/db-functions/db-functions';
import { ToastProvider } from '../../providers/toast/toast';
import { SearchContactsPage } from '../search-contacts/search-contacts';

/**
 * Generated class for the AddEmployeePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {
  public addEmployeeForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    fb: FormBuilder,
    public viewCtrl: ViewController,
    public dbFunctions: DbFunctionsProvider,
    public toastProvider: ToastProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  )
  {
    this.addEmployeeForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': ['', Validators.email],
      'phone': ['', Validators.minLength(9)]
    })
  }

  // User clicks the import from contacts button
  importFromContacts(){
    let modal = this.modalCtrl.create(SearchContactsPage);
    modal.present();
  }






}
