import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { LoaderModel } from '../models/loader.model';
import { LoaderAction } from '../actions/loader.action';
import { LOADER_DEFAULT as defaults } from '../defaults/loader.default';

@State<LoaderModel>({
  name: 'LoaderState',
  defaults: defaults,
})
@Injectable()
export class LoaderState {
  constructor() {}
  @Action(LoaderAction)
  addItem({ patchState }: StateContext<LoaderModel>, action: LoaderAction) {
    patchState({
      loader: action.payload,
    });
  }
}
