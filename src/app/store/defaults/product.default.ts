import { CartItem } from '../../model/cart.model';
import { Product } from '../models/product.model';

export const PRODUCT_DEFAULT: Product.State = {
  products: [] as Product.ProductModel[],
  productCartList: [] as CartItem[],
  productCartListTotalPrice: 0,
};
