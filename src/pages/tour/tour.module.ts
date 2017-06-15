import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourPage } from './tour';

// import { AddLocationPage } from '../add-location/add-location';

@NgModule({
  declarations: [
    TourPage
    // AddLocationPage
  ],
  imports: [
    IonicPageModule.forChild(TourPage),
  ],
  exports: [
    TourPage
  ]
  // entryComponents: [
  //   AddLocationPage
  // ]
})
export class TourPageModule {}
