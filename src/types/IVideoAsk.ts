import { IStage } from "./IStage";

export interface IVideoask {
  answer_id: string;
  name: string;
  email: string;
  phone_number: string;
  created_at: string;
  media_type: string;
  share_url: IProfile;
  status: string;
  stage: IStage;
}

export interface IProfile {
  share_url: string;
}
