import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, Loading, LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the WaitingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-waiting',
  templateUrl: 'waiting.html',
})
export class WaitingPage {
  accessCodeForm: FormGroup;

  constructor(public navCtrl: NavController,
    public authProvider: AuthProvider,
    fb: FormBuilder)
  {
  }

  logout(){
    this.authProvider.logout();
    this.navCtrl.setRoot('LandingPage');
  }

  registerCompany(){
    this.navCtrl.push('RegisterCompanyPage');
  }


}
