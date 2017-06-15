import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
// We import both forms module to use in our app.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ToastProvider } from '../providers/toast/toast';
import { AuthProvider } from '../providers/auth/auth';
import { DbFunctionsProvider } from '../providers/db-functions/db-functions';
import { AddLocationModal } from '../pages/add-location-modal/add-location-modal';
import { SearchContactsPage } from '../pages/search-contacts/search-contacts';

import { Contacts } from '@ionic-native/contacts';
import { PlacesProvider } from '../providers/places/places';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDqiFNqhSTwoCydQlrfAT7EpCP8x0A2RXQ",
  authDomain: "oneless-e4c7b.firebaseapp.com",
  databaseURL: "https://oneless-e4c7b.firebaseio.com",
  projectId: "oneless-e4c7b",
  storageBucket: "oneless-e4c7b.appspot.com",
  messagingSenderId: "471127367014"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddLocationModal,
    SearchContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddLocationModal,
    SearchContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    AuthProvider,
    DbFunctionsProvider,
    Contacts,
    PlacesProvider
  ]
})
export class AppModule {}
