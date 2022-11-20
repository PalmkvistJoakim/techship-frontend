import { IStage } from "./IStage";

export interface IVideoask {
  entities: any;
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

export interface IContactId {
  email: string;
}

export interface IKomment {
  entities?: any;
  _id: string;
  contact_id: string;
  createdAt: string;
  stage: string;
  kommentar: string;
  question_id: string;
}

export interface IForm {
  form_id: string;
  title: string;
}
