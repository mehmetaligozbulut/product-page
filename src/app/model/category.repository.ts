import { Injectable, OnInit } from '@angular/core';
import { Category } from './../store/models/category.model';
import { Select, Store } from '@ngxs/store';
import { CategoryGetListAction } from '../store/actions/category.action';
import { CategoryState } from '../store/states/category.state';
import { Observable } from 'rxjs';
@Injectable()
export class CategoryRepository implements OnInit {
  @Select(CategoryState.categories)
  categories$: Observable<Category.CategoryModel[]>;
  categories: Category.CategoryModel[] = [];
  constructor(private store: Store) {
    this.store.dispatch(new CategoryGetListAction());

    this.categories$.subscribe((category: Category.CategoryModel[]) => {
      this.categories = category;
    });
  }
  ngOnInit() {}

  getCategory(id: number): Category.CategoryModel | any {
    return this.categories.find(
      (category: Category.CategoryModel) => category.id === id
    );
  }

  getCategories(): Category.CategoryModel[] {
    return this.categories;
  }
}
