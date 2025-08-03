import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { mysignal } from './my-signal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app01-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App01Component {

  readonly firstSignal = signal(42);
  readonly secondSignal = signal('Hello, Signals!');


  // readonly firstSignal = mysignal(42);
  // readonly secondSignal = mysignal('Hello, Signals!');

  constructor() {
    // You can use signals in the constructor or methods

    console.log('First Signal:', this.firstSignal());
    console.log('Second Signal:', this.secondSignal());

  }


  setSignal() {
    this.firstSignal.set(100);
  }

  updateSignal() {
    this.firstSignal.update(value => value + 1);
    console.log('First Signal:', this.firstSignal());
  }




}
