import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {
  option: boolean = true;
  heroes: Heroe[] = [
    {
      name: 'Superman',
      heroPower: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      heroPower: false,
      color: Color.black
    },
    {
      name: 'Robin',
      heroPower: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      heroPower: true,
      color: Color.red
    },
    {
      name: 'Spiderman',
      heroPower: true,
      color: Color.red
    },
  ];
  orderBy: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  switchOption() {
    this.option = !this.option;
  }
  switchOrder(value: string) {
    this.orderBy = value;
  }
}
