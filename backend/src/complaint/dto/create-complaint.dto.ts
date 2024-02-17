export interface CreateComplaintDto {
  // userId: string;
  // photos?: string[];
  // personsId?: string[];
  name?: string;
  phones?: string[];
  email?: string;
  sites?: string[];
  countryCode: string;
  cityName?: string; // For frontend
  cityId?: string; // For backend
  categoryId: number;
  shortDescription: string;
  fullDescription: string;
}