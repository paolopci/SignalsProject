import { Component, DestroyRef, inject } from '@angular/core';
import { count, interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  counter = 0;
  readonly destroyRef = inject(DestroyRef);
  constructor() {
    const sub = interval(1000).subscribe(() => {
      console.log(this.counter++);
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());

  };
}
