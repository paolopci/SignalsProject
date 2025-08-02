import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, firstValueFrom, map } from 'rxjs';


type Options = Record<string, string>;



@Component({
  selector: 'app1-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // Optional, for performance optimization
})
export class App1Component {

  readonly a$ = new BehaviorSubject<number>(1);
  readonly b$ = new BehaviorSubject<number>(2);

  readonly sum$ = combineLatest([this.a$, this.b$]).pipe(map(([a, b]) => a + b));


  async incrementaA() {
    const sum = await firstValueFrom(this.sum$);
        if ((this.a$.value + this.b$.value) < 10) {
      this.a$.next(this.a$.value + 1);
      console.log('Incremented a:', this.a$.value, 'Sum:', sum);
    }
  }



  readonly options$ = new BehaviorSubject<Options>({ 'r': 'Red', 'g': 'Green', 'b': 'Blue' });

  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly selectedValue$ = combineLatest([this.options$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key]),
    // Optional: debounce to reduce frequency of updates
  );


  switchOptions() {
    this.options$.next({ 'm': 'Magenta', 'c': 'Cyan', 'y': 'Yellow' });
    this.selectedKey$.next('c'); // Update selected key to match new options
  }


  constructor() {
    // Initialization logic can go here if needed
    this.selectedValue$.subscribe(console.log)
  }
}
