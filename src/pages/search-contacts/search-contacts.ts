import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Contacts, Contact, ContactField, ContactFieldType, ContactFindOptions } from '@ionic-native/contacts';
/**
 * Generated class for the SearchContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-search-contacts',
  templateUrl: 'search-contacts.html',
})
export class SearchContactsPage {

  // public allContacts: Contacts;

  contactsfound;
  search = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts,
    public plt: Platform)
  {
    plt.ready().then(_ => {
      // Initialize the contact list.
      let fields:ContactFieldType[] = ['name'];
      const options = new ContactFindOptions();
      options.multiple = true;
      this.contacts.find(fields, options).then((contacts) => {
        this.contactsfound = contacts;
      })
    })
  }



  searchContacts(ev: any){
    let val = ev.target.value;
    if(val && val.trim() === ''){

    } else{
      let fields:ContactFieldType[] = ['displayName'];
      const options = new ContactFindOptions();
  		options.filter = ev.target.value;
  		options.multiple = true;
  		options.hasPhoneNumber = true;


      this.contacts.find(fields, options).then((contacts) => {
  			this.contactsfound = contacts;
  			console.log(JSON.stringify(contacts[0]));
  		});

      if(this.contactsfound.length == 0){
  			this.contactsfound.push({displayName: 'No Contacts found'});
  		}
  		this.search = true;
    }


  }







}
