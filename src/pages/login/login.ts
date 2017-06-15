import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, AlertController, Loading,
  LoadingController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthProvider } from '../../providers/auth/auth';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    fb: FormBuilder,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public authProvider: AuthProvider,
    public toastProvider: ToastProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController)
  {
    this.loginForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  // we determine if the user should be sent to the waiting page or home page.
  determineRoot(): any{
    var item = this.db.object('/users/' + this.afAuth.auth.currentUser.uid +
      '/waitingPage', {preserveSnapshot: true});
    item.subscribe(snapshot => {
      return snapshot.val();
    })
  }

  onSubmit(){
    if(!this.loginForm.valid){
      this.toastProvider.invalidInput();
    } else {
      // use the 'createUserWithEmail' function provided by the authProvider to
      // create and save the user.
      this.authProvider.loginUserWithEmail(this.loginForm.value.email,
        this.loginForm.value.password).then( () => {
          this.loading.dismiss().then( () => {
            if(this.determineRoot){
              this.navCtrl.setRoot('WaitingPage');
            } else {
              this.navCtrl.setRoot(HomePage);
            }
          });
        },
        error => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: 'OK', role: 'cancel'
                }
              ]
            });
            alert.present();
          })
        }
      )
      // create and display the loading controller
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

  resetPassword(){
    this.navCtrl.push('ResetPasswordPage')
  }


}
