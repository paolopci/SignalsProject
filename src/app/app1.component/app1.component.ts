import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app1-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // Optional, for performance optimization
})
export class App1Component {

  counter$ = interval(1000); // Emits a value every second

  constructor() {
  }

}
