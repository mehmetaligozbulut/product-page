import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../store/models/product.model';
import { Category } from './../store/models/category.model';

@Injectable()
export class RestService {
  baseApiUrl: string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<Product.ProductModel[]> {
    return this.httpClient.get<Product.ProductModel[]>(
      this.baseApiUrl + 'products'
    );
  }
  getCategories(): Observable<Category.CategoryModel[]> {
    return this.httpClient.get<Category.CategoryModel[]>(
      this.baseApiUrl + 'categories'
    );
  }
}
