import { IStage } from "./IStage";

interface IApplicant {
  answer_id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  adress: string;
  created_at: string;
  notis: string;
  stage: IStage;
  description: string;
}

export default IApplicant;
