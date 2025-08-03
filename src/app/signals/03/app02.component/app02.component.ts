import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app02-component',
  imports: [],
  templateUrl: './app02.component.html',
  styleUrl: './app02.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App02Component {

  readonly firstSignal = signal(42);
  readonly derived = computed(() => this.firstSignal() * 2);

  data = new Date().toLocaleDateString();// la data di oggi si calcola una sola volta non serve signal
  dataOra = signal(new Date().toLocaleTimeString())

  readonly dataOraString = computed(() => {
    return `data: ${this.data} ora: ${this.dataOra()}`;
  });



  val = this.derived();

  constructor() {
    // Aggiorna la data e ora ogni secondo
    setInterval(() => {
      this.dataOra.set(new Date().toLocaleTimeString());
    }, 1000);
  }



  increment() {
    this.firstSignal.update(value => value + 1);
    this.val = this.derived();

    console.log(`First Signal: ${this.firstSignal()} and Derived: ${this.val}`);
  }

}
