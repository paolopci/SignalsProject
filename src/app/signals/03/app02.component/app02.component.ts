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

  val = this.derived();

  increment() {
    this.firstSignal.update(value => value + 1);
    this.val = this.derived();

    console.log(`First Signal: ${this.firstSignal()} and Derived: ${this.val}`);
  }

}
