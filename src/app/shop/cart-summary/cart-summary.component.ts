import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../model/cart.model';
import { Select } from '@ngxs/store';
import { ProductState } from '../../store/states/product.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit {
  @Select(ProductState.productCartList)
  productCartList$: Observable<CartItem[]>;
  @Select(ProductState.productCartListTotalPrice)
  totalPrice$: Observable<number>;
  productCartList: CartItem[];
  constructor(public cart: Cart) {}

  ngOnInit(): void {
    this.productCartList$.subscribe((item: CartItem[]) => {
      this.productCartList = item;
    });
  }
}
