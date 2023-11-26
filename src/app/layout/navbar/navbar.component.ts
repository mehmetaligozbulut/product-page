import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../model/cart.model';
import { Select } from '@ngxs/store';
import { ProductState } from '../../store/states/product.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Select(ProductState.productCartList)
  productCartList$: Observable<CartItem[]>;
  constructor() {}

  ngOnInit(): void {}
}
