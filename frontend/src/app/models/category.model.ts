export interface CategoryModel {
  name: string;
  subCategories: SubCategoryModel[];
}

export interface SubCategoryModel {
  _id: string;
  name: string;
}
