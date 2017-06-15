import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, AlertController, Loading,
  LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { ToastProvider } from '../../providers/toast/toast';
import { DbFunctionsProvider } from '../../providers/db-functions/db-functions';
import { Company } from '../../models/company';
import { Address } from '../../models/address';
import { HomePage } from '../../pages/home/home'

/**
 * Generated class for the RegisterCompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register-company',
  templateUrl: 'register-company.html',
})
export class RegisterCompanyPage {

  registerCompanyForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    fb: FormBuilder,
    public authProvider: AuthProvider,
    public dbFunctions: DbFunctionsProvider,
    public toastProvider: ToastProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController)
  {
    this.registerCompanyForm = fb.group({
      'companyName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'street': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'city': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'state': ['AL', Validators.compose([Validators.required, Validators.minLength(1)])],
      'zipcode': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'phoneNumber': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    })
  }

  // The user clicks register.
  onSubmit(): void {
    // use the 'createUserwithEmail' function provider by the authProvider to
    // create and save the user IF the registerForm is valid.
    if(!this.registerCompanyForm.valid){
      this.toastProvider.invalidInput();
    } else {
      var address = new Address('CompanyHome',this.registerCompanyForm.value.street,
        this.registerCompanyForm.value.city, this.registerCompanyForm.value.zipcode,
        this.registerCompanyForm.value.state);

      var company = new Company(this.registerCompanyForm.value.companyName, address,
        this.registerCompanyForm.value.email, this.registerCompanyForm.value.phoneNumber);

      this.dbFunctions.createCompany(company).then(_ => {
        this.loading.dismiss().then(_ => {
          // After Company Creation, lets prompt the user to take a quick tour.
          this.showConfirm();
          // this.navCtrl.setRoot('HomePage');
        })
      },
      error => {
        this.loading.dismiss().then(_ => {
          this.displayErrorMessage(error);
        })
      })
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

  showConfirm() {
  let confirm = this.alertCtrl.create({
    title: 'Congratulations, your company has been registered!',
    message: "We suggest you take a minute to tour the app, but we get it if you're too cool for directions.",
    buttons: [
      {
        text: 'Too Cool',
        handler: () => {
          this.navCtrl.setRoot(HomePage);
        }
      },
      {
        text: "Let's go!",
        handler: () => {
          this.navCtrl.setRoot('TourPage');
        }
      }
    ]
  });
  confirm.present();
}


}
