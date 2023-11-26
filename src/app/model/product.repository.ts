import { Injectable, OnInit } from '@angular/core';
import { Product } from './../store/models/product.model';
import { Category } from './../store/models/category.model';
import { Select, Store } from '@ngxs/store';
import { GetProductListAction } from '../store/actions/product.action';
import { ProductState } from '../store/states/product.state';
import { Observable } from 'rxjs';
import { LoaderAction } from '../store/actions/loader.action';
@Injectable()
export class ProductRepository implements OnInit {
  @Select(ProductState.products)
  products$: Observable<Product.ProductModel[]>;
  products: Product.ProductModel[] = [];
  constructor(private store: Store) {
    this.store.dispatch(new LoaderAction(true));
    this.store.dispatch(new GetProductListAction());

    setTimeout(() => {
      this.products$.subscribe((products: Product.ProductModel[]) => {
        if (products && products.length > 0) {
          this.products = products;
          this.store.dispatch(new LoaderAction(false));
        }
      });
    }, 1000);
  }
  ngOnInit() {}

  getProduct(id: number): Product.ProductModel | any {
    return this.products.find(
      (product: Product.ProductModel) => product.id === id
    );
  }

  getProducts(category: Category.CategoryModel): Product.ProductModel[] {
    if (category) {
      return this.products.filter(
        (product: Product.ProductModel) => product.category === category.name
      );
    }
    return this.products;
  }
}
