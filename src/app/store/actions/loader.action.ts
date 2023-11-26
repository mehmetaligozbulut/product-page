export class LoaderAction {
  static readonly type = '[Loader] Loader';
  constructor(public payload: boolean) {}
}
