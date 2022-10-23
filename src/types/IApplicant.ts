interface IApplicant {
  answer_id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  adress: string;
  created_at: string;
  notis: string;
  status: IStatus;
  description: string;
}

interface IStatus {
  _id: string;
  name: string;
}

export default IApplicant;
