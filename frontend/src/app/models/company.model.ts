import { CommonComplaintModel } from './common-complaint.model';

export interface CompanyModel extends CommonComplaintModel {
  // personIds: number[];
  phones: string[];
  email: string;
  sites: string[];
}
