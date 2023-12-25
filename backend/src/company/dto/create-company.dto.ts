export interface CreateCompanyDto {
  // userId: string;
  // photos?: string[];
  // personsId?: string[];
  name?: string;
  phones?: string[];
  email?: string;
  sites?: string[];
  countryId: number;
  cityName?: string;
  categoryId: number;
  shortDescription: string;
  fullDescription: string;
}