import { IStatus } from "./IStatus";

export interface IVideoask {
  answer_id: string;
  name: string;
  email: string;
  phone_number: string;
  created_at: string;
  media_type: string;
  share_url: IProfile;
  respondent_id: string;
  contact_id: string;
  status: string;
  stage: IStatus;
}

export interface IProfile {
  share_url: string;
}
