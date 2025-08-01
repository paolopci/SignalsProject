import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App1Component } from './app1.component/app1.component';

@Component({
  selector: 'app-root',
  imports: [App1Component],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('SignalsCourse');

  title: string = 'Paolo Paci';

}