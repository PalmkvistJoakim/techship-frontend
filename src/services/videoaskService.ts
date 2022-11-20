import { http } from "../services/httpService";

export const handleLogin = () => {
  window.open("http://localhost:5000/api/videoask/auth");
};

export const getAccessToken = async (code: string) => {
  let parameters = new URLSearchParams(code);
  const Code = parameters.get("home");
  localStorage.setItem("access_token", `${Code}`);
};

export const RemoveProfile = (id: string) => {
  const token = localStorage.getItem("access_token");
  const data = http.get(`http://localhost:5000/api/videoask/profile`, {
    params: { token: token, respondentId: id },
  });
  return data;
};
