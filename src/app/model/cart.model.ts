import { Injectable } from '@angular/core';
import { Product } from './../store/models/product.model';
import { Store } from '@ngxs/store';
import {
  ProductCartListAction,
  ProductCartListTotalPriceAction,
} from '../store/actions/product.action';
import { StateReset } from 'ngxs-reset-plugin';
import { ProductState } from '../store/states/product.state';

@Injectable()
export class Cart {
  items: CartItem[] = [];
  constructor(private store: Store) {}
  addItem(product: Product.ProductModel, quantity: number = 1) {
    let item = this.items.find(
      (item: CartItem) => item.product.id === product.id
    );

    if (item !== undefined) {
      item.quantity += quantity;
      this.store.dispatch(new ProductCartListAction(this.items));
    } else {
      this.items.push(new CartItem(product, quantity));
      this.store.dispatch(new ProductCartListAction(this.items));
    }

    this.calculate();
  }
  removeItem(product: Product.ProductModel, quantity: number = 1) {
    let item = this.items.find(
      (item: CartItem) => item.product.id === product.id
    );

    if (item !== undefined) {
      item.quantity -= quantity;
      if (item.quantity === 0) {
        this.removeProduct(product.id);
      }
    } else {
      this.items.splice(product.id, 1);
    }

    this.calculate();
    this.store.dispatch(new ProductCartListAction(this.items));
  }
  calculate() {
    let itemCount = 0;
    let total = 0;
    this.store.dispatch(new ProductCartListTotalPriceAction(total));

    this.items.forEach((item: CartItem) => {
      itemCount += item.quantity;
      total += item.quantity * item.product.price;
      this.store.dispatch(new ProductCartListTotalPriceAction(total));
    });
  }
  removeProduct(id: number) {
    let index = this.items.findIndex(
      (item: CartItem) => item.product.id === id
    );
    this.items.splice(index, 1);
    this.calculate();
    this.store.dispatch(new ProductCartListAction(this.items));
  }
  clear() {
    this.items = [];
    this.store.dispatch(new StateReset(ProductState));
  }
}

export class CartItem {
  constructor(public product: Product.ProductModel, public quantity: number) {}
}
