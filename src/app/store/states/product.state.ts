import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PRODUCT_DEFAULT as defaults } from '../defaults/product.default';
import { RestService } from '../../model/rest.service';
import { tap } from 'rxjs';
import { Product } from '../models/product.model';
import {
  GetProductListAction,
  ProductCartListAction,
  ProductCartListTotalPriceAction,
} from '../actions/product.action';
import { CartItem } from '../../model/cart.model';

@State<Product.State>({
  name: 'ProductState',
  defaults: defaults,
})
@Injectable()
export class ProductState {
  @Selector()
  static products({ products }: Product.State): Product.ProductModel[] {
    return products;
  }
  @Selector()
  static productCartList({ productCartList }: Product.State): CartItem[] {
    return productCartList;
  }
  @Selector()
  static productCartListTotalPrice({
    productCartListTotalPrice,
  }: Product.State): number {
    return productCartListTotalPrice;
  }
  constructor(private restService: RestService) {}
  @Action(GetProductListAction)
  getProducts({ patchState }: StateContext<Product.State>) {
    return this.restService.getProducts().pipe(
      tap((products: Product.ProductModel[]) => {
        patchState({ products });
      })
    );
  }

  @Action(ProductCartListAction)
  getProductCartList(
    { patchState }: StateContext<Product.State>,
    action: ProductCartListAction
  ) {
    patchState({ productCartList: action.payload });
  }

  @Action(ProductCartListTotalPriceAction)
  productCartListTotalPrice(
    { patchState }: StateContext<Product.State>,
    action: ProductCartListTotalPriceAction
  ) {
    patchState({ productCartListTotalPrice: action.payload });
  }
}
