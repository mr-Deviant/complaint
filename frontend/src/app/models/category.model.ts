export interface CategoryModel {
  name: string;
  subCategories: SubCategoryModel[];
}

export interface SubCategoryModel {
  id: string;
  name: string;
}
