export class Address{
  name: string
  street: string;
  city: string;
  zipcode: string;
  state: string;

  constructor(name: string, street: string, city: string, zipcode: string, state: string){
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
  }
}
