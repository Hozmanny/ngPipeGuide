import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Heroe[], orderBy: string = 'default'): Heroe[] {
    switch (orderBy) {
      case 'name':
        return value.sort((a,b) => (a.name > b.name) ? 1 : -1);
      case 'power':
        return value.sort((a,b) => (a.heroPower > b.heroPower) ? -1 : 1);
      case 'color':
        return value.sort((a,b) => (a.color > b.color) ? 1 : 1);
      default:
        return value;
    }
  }

}
