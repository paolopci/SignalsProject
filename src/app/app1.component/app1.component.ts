import { Component, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app1-component',
  standalone: true,
  imports: [],
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.scss',
  changeDetection: ChangeDetectionStrategy.Default // Optional, for performance optimization
})
export class App1Component {
  title = 'Paolo Paci';
  readonly changeDetector = inject(ChangeDetectorRef);
  counter = 0;

  doNothing() { }


  calculateValue() {
    console.log('calculateValue called');
    return 42;
  }


  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter:', this.counter);
    }, 1000);

    // setInterval(() => {
    //   this.changeDetector.detectChanges();
    // }, 5000);


  }

}
