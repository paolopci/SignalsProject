import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { count, interval } from 'rxjs';
import { startCounting } from '../../../utils';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter implements OnInit {

  counter = 0;
  readonly destroyRef = inject(DestroyRef);
  constructor() {
    // const sub = interval(1000).subscribe(() => {
    //   console.log(this.counter++);
    // });

    // this.destroyRef.onDestroy(() => sub.unsubscribe());
    //  startCounting()

  };

  ngOnInit() {

    startCounting();
  }
}
