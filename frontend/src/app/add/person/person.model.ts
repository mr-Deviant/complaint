export interface Person {
  // userId: string;
  // photos?: string[];
  surname: string;
  name: string;
  patronymic: string;
  phones: string[];
  email: string;
  site: string; // TODO: Instagram, facebook, vk,
  countryId: number | null;
  cityName: string | null;
  categoryId: number | null;
  shortDescription: string;
  fullDescription: string;
}
