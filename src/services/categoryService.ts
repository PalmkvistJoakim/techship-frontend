import { http } from "./httpService";

export async function getCategoryStage() {
  const { data } = await http.get("http://localhost:5000/api/category");
  return data;
}
