import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { Address } from '../../models/address';
import { Company } from '../../models/company';
import { AuthProvider } from '../auth/auth';

import 'rxjs/add/operator/map';

/*
  Generated class for the DbFunctionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

interface companyValue {
  company: Company
}

@Injectable()
export class DbFunctionsProvider {

  constructor(public db: AngularFireDatabase)
  {

  }


  createCompany(company: Company): any{
    return new Promise((resolve, error) => {
      resolve();
    })
  }

  addLocation(address: Address): any{
    return new Promise((resolve, error) => {
      resolve();
    })
  }

}
