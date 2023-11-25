export interface Company {
  // userId: string;
  // photos: string[];
  // personsId: number[];
  name: string;
  phones: string[];
  email: string;
  site: string; // TODO: Instagram, facebook, vk,
  countryId: number | null;
  cityName: string | null;
  categoryId: number | null;
  shortDescription: string;
  fullDescription: string;
}
