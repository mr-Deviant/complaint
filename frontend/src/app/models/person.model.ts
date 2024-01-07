import { CommonComplaintModel } from './common-complaint.model';

export interface PersonModel extends CommonComplaintModel {
  surname: string;
  patronymic: string;
  phones: string[];
  email: string;
  sites: string[];
}
