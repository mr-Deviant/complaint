export interface PersonModel {
  // userId: string;
  // photos?: string[];
  surname: string;
  name: string;
  patronymic: string;
  phones: string[];
  email: string;
  sites: string[];
  countryId: string | null;
  cityName: string;
  categoryId: string | null;
  shortDescription: string;
  fullDescription: string;
}
