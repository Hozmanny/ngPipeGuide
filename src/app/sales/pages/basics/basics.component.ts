import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  nombreLower: string = 'hozmanny';
  nombreUpper: string = 'HOZMANNY';
  nombreComplete: string = 'HozMannY gArCia';

  aDate: Date = new Date();
}
