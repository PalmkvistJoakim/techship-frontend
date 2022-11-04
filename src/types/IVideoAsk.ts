import { IStage } from "./IStage";

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
  stage: IStage;
}

export interface IProfile {
  share_url: string;
}

export interface IContactId extends IVideoask {
  answer_id: string;
  created_at: string;
  file_uploads: string;
  media_url: string;
  thumbnail: string;
  type: string;
  input_text: string;
  question_id: string;
}

export interface IKomment {
  _id: string;
  contact_id: string;
  createdAt: string;
  stage: string;
  kommentar: string;
}
