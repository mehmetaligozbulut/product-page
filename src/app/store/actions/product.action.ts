import { CartItem } from '../../model/cart.model';
import { Product } from '../models/product.model';

export class GetProductListAction {
  static readonly type = '[Product] Get Product List';
}

export class ProductCartListAction {
  static readonly type = '[Product] Product Cart list';
  constructor(public payload: CartItem[]) {}
}

export class ProductCartListTotalPriceAction {
  static readonly type = '[Total Price] Product Cart List Total Price';
  constructor(public payload: number) {}
}
