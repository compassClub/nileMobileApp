import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, AlertController, Loading,
  LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    fb: FormBuilder,
    public authProvider: AuthProvider,
    public toastProvider: ToastProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController)
  {
    this.registerForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  // The user clicks register.
  onSubmit(): void {
    // use the 'createUserwithEmail' function provider by the authProvider to
    // create and save the user IF the registerForm is valid.
    if(!this.registerForm.valid){
      this.toastProvider.invalidInput();
    } else {
      this.authProvider.createUserWithEmail(this.registerForm.value.firstName,
        this.registerForm.value.lastName, this.registerForm.value.email,
        this.registerForm.value.password).then(_ => {
          this.loading.dismiss().then(_ => {
            this.navCtrl.setRoot('WaitingPage');
          })
        },
        error => {
          this.loading.dismiss().then(_ => {
            this.displayErrorMessage(error);
          })
        }
      )
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  // Create and display an error message.
  displayErrorMessage(error: any): void {
    let alert = this.alertCtrl.create({
      message: error.message,
      buttons: [{
        text: 'OK', role: 'cancel'
      }]
    })
    alert.present();
  }

}
