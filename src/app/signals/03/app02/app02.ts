import { Component, linkedSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-app02',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app02.html',
  styleUrl: './app02.scss'
})
export class App02 {

  readonly products = signal(['Apple', 'Banana', 'Cherry']);

  //readonly selectedProduct = signal('Apple');

  // readonly selectedProduct = linkedSignal({
  //   source: this.products,
  //   computation: prod => prod[0]
  // });

  readonly selectedProduct = linkedSignal<string[], string>({
    source: this.products,
    computation: (prod, prev) => {
      if (!prev) return prod[0];
      if (prod.includes(prev.value)) return prev.value;
      return prod[0];
    }
  })

  addProduct() {
    //  add a new product
    this.products.update(prods => [...prods, PRODUCTS[prods.length]])
  }

  removeProduct() {
    //  remove the last product
    this.products.update(prods => prods.slice(0, -1));
  }

  nextProduct() {
    this.selectedProduct.update(selected => {
      const currentIndex = this.products().indexOf(selected);
      const nextIndex = (currentIndex + 1) % this.products().length;
      return this.products()[nextIndex];
    });
  }

  prevProduct() {
    this.selectedProduct.update(selected => {
      const currentIndex = this.products().indexOf(selected);
      const prevIndex = (currentIndex - 1 + this.products().length) % this.products().length;
      return this.products()[prevIndex];
    });
  }

}
