export namespace Category {
  export interface State {
    categories: CategoryModel[];
  }
  export interface CategoryModel {
    id: number;
    name: string;
    selected?: boolean;
  }
}
