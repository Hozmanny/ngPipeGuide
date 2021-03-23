import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent implements OnInit {
  nombre: string = 'Hozmanny';
  gender: string = 'masculino';
  change: boolean = false;
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };
  // i18nPlural
  customers: string[] = ['Yolanda', 'Maria','John'];
  customersMap = {
    '=0': 'are no customers',
    '=1': 'is one customer',
    '=2': 'are two customers',
    'other': 'are # customers',
  }
  constructor() { }

  ngOnInit(): void {
  }
  changeGender():void {
    if (!this.change) {
      this.nombre = 'Maria';
      this.gender = 'femenino';
    } else {
      this.nombre = 'Hozmanny';
      this.gender = 'masculino';
    }
    this.change = !this.change;
  }
  addCustomer():void {
    this.customers.push('anotherOne');
  }
  deleteCustomer():void {
    this.customers.pop();
  }

  // keyValue
  persona = {
    name: 'Hozmanny',
    age: 24,
    addrees: 'White house'

  }
  // JSON
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: true
    },
    {
      nombre: 'Venom',
      vuela: false
    },
  ]
  // Async
  myObservable = interval(1000); //0, 1, 2, 3

  valorProm = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('we have the data!');
    }, 3500);
  })
}
