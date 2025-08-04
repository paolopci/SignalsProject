import { Component } from '@angular/core';
import { Counter } from '../counter/counter';


@Component({
  selector: 'app-app41',
  imports: [Counter],
  standalone: true,
  templateUrl: './app41.html',
  styleUrl: './app41.scss'
})
export class App41 {

  showCounter = false;

  toogleCounter() {
    this.showCounter = !this.showCounter;
  }

}
