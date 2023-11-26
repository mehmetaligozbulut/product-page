import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CATEGORY_DEFAULT as defaults } from '../defaults/category.default';
import { Category } from '../models/category.model';
import { CategoryGetListAction } from '../actions/category.action';
import { RestService } from '../../model/rest.service';
import { tap } from 'rxjs';

@State<Category.State>({
  name: 'CategoryState',
  defaults: defaults,
})
@Injectable()
export class CategoryState {
  @Selector()
  static categories({ categories }: Category.State): Category.CategoryModel[] {
    return categories;
  }
  constructor(private restService: RestService) {}
  @Action(CategoryGetListAction)
  getCategories({ patchState }: StateContext<Category.State>) {
    return this.restService.getCategories().pipe(
      tap((categories: Category.CategoryModel[]) => {
        patchState({ categories });
      })
    );
  }
}
