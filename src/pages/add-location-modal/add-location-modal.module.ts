import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLocationModal } from './add-location-modal';

@NgModule({
  declarations: [
    AddLocationModal,
  ],
  imports: [
    IonicPageModule.forChild(AddLocationModal),
  ],
  exports: [
    AddLocationModal
  ]
})
export class AddLocationModalPageModule {}
