import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app1-component',
  standalone: true,
  imports: [],
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class App1Component {
  title = 'Paolo Paci';

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

}
