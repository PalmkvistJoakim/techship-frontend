import { http } from "./httpService";

export async function Sendmail(email: string | string[]) {
  await http.post("http://localhost:5000/api/sendemail", {
    email: [email],
  });
}
