import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(private toastCtrl: ToastController) {
  }

  /*  Toast Functions  */

    // User successfully logged in
    loginToast(){
      let toast = this.toastCtrl.create({
        message: "Successfully Logged In",
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }

    // User successfully loged out
    loggedOutToast(){
      let toast = this.toastCtrl.create({
        message: "Successfully Logged Out",
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }

    // Account successfully created
    accountCreatedToast(){
      let toast = this.toastCtrl.create({
        message: "Account Created",
        duration: 2000,
        position: 'top'
      })
      toast.present();
    }

    // Customer Created
    customerCreated(){
      let toast = this.toastCtrl.create({
        message: "Customer Successfully Created",
        duration: 1500,
        position: 'top'
      })
      toast.present();
    }

    // Employee Added
    employeeAdded(){
      let toast = this.toastCtrl.create({
        message: "Employee Successfully Added",
        duration: 1500,
        position: 'top'
      })
      toast.present();
    }

    //
    invalidInput(){
      let toast = this.toastCtrl.create({
        message: "Your input doesn't look quite right.",
        duration: 2000,
        position: 'bottom'
      })
      toast.present();
    }

    locationAdded(){
      let toast = this.toastCtrl.create({
        message: "Location Successfully Added",
        duration: 2500,
        position: 'bottom'
      })
      toast.present();
    }

}
