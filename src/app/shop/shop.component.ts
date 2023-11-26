import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from './../store/models/product.model';
import { Category } from './../store/models/category.model';
import { Cart } from '../model/cart.model';
import { Select } from '@ngxs/store';
import { LoaderState } from '../store/states/loader.state';
import { Observable } from 'rxjs';
import { LoaderModel } from '../store/models/loader.model';
import { CategoryState } from '../store/states/category.state';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  @Select(LoaderState)
  loader$: Observable<LoaderModel>;
  @Select(CategoryState.categories)
  categories$: Observable<Category.CategoryModel[]>;
  selectedCategory: Category.CategoryModel;
  productsPerPage: number = 3;
  selectedPage: number = 1;
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart
  ) {}

  ngOnInit(): void {}

  get allProducts(): Product.ProductModel[] {
    return this.productRepository.getProducts(this.selectedCategory);
  }

  get products(): Product.ProductModel[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepository
      .getProducts(this.selectedCategory)
      .slice(index, index + this.productsPerPage);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.productRepository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((a, index: number) => index + 1);
  }

  get categories(): Category.CategoryModel[] {
    return this.categoryRepository.getCategories();
  }

  changePage(page: number) {
    this.selectedPage = page;
  }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  addProductToCart(product: Product.ProductModel) {
    this.cart.addItem(product);
  }
}
