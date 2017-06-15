import { Component, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { AddLocationPage } from '../add-location/add-location';
import { AddEmployeePage } from '../add-employee/add-employee';

/**
 * Generated class for the TourPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController)
  {
  }


  addLocation(){
    let modal = this.modalCtrl.create(AddLocationPage);
    modal.present();
  }

  addEmployee(){
    let modal = this.modalCtrl.create(AddEmployeePage);
    modal.present();
  }

  continue(){
    this.slides.slideNext();
  }


}
