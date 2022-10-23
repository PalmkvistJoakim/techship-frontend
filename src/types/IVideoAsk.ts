export interface IVideoask {
  answer_id: string;
  name: string;
  email: string;
  phone_number: string;
  created_at: string;
  media_type: string;
  share_url: IProfile;
  stage: String;
}

export interface IProfile {
  share_url: string;
}
