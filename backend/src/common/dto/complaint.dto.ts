export class ComplaintDto {
  userId: string | null;
  photoUrls?: string[];
  countryId: string;
  cityName?: string;
  categoryId: string;
  shortDescription: string;
  fullDescription: string;
}