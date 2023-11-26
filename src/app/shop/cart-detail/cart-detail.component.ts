import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../model/cart.model';
import { Select, Store } from '@ngxs/store';
import { ProductState } from '../../store/states/product.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
})
export class CartDetailComponent implements OnInit {
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
