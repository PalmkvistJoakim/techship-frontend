import { http } from "./httpService";

interface IEmail {
  email: string;
  subject: string;
  message: string;
}

export async function SendEmail({ email, subject, message }: IEmail) {
  const { data } = await http.post("http://localhost:5000/api/sendemail", {
    email,
    subject,
    message,
  });
  return data;
}
