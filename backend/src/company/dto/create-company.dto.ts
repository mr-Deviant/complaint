export class CreateCompanyDto {
  userId: string;
  photos?: string[];
  personsId?: string[];
  name?: string;
  phones?: string[];
  email?: string;
  site?: string; // TODO: Instagram, facebook, vk,
  countryId: number;
  cityId?: number;
  categoryId: number;
  shortDescription: string;
  fullDescription: string;
}