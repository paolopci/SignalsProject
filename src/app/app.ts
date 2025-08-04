import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { App02 } from "./signals/03/app02/app02";
import { App41 } from './signals/04/app41/app41';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, App41],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SignalsCourse');
}
