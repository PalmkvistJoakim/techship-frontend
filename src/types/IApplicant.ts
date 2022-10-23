interface IApplicant {
  _id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  adress: string;
  notis: string;
  status: IStatus;
  description: string;
}

interface IStatus {
  _id: string;
  name: string;
}

export default IApplicant;
