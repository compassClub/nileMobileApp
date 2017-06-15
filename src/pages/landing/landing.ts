import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController) {
  }

  login(){
    this.navCtrl.push('LoginPage');
  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
  tour(){
    this.navCtrl.push('TourPage');
  }



}
