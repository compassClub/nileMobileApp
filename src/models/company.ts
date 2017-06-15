import { Address } from './address';


export class Company{
  companyName: string;
  address: Address;
  email: string;
  phoneNumber: string;

  constructor(companyName: string, address: Address, email: string, phoneNumber: string){
    this.companyName = companyName;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
