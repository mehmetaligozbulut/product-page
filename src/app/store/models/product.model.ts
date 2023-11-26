import { CartItem } from '../../model/cart.model';

export namespace Product {
  export interface State {
    products: ProductModel[];
    productCartList: CartItem[];
    productCartListTotalPrice: number;
  }

  export interface ProductModel {
    id?: number | any;
    name?: string;
    price?: number | any;
    imageUrl?: string;
    description?: string;
    category?: string;
  }
}
