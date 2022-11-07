import { http } from "../services/httpService";

export const handleLogin = () => {
  window.open("http://localhost:5000/api/videoask/auth");
};

export const getAccessToken = async (code: string) => {
  let parameters = new URLSearchParams(code);
  const Code = parameters.get("home");
  localStorage.setItem("access_token", `Bearer ${Code}`);
};

export const GenerateKomment = async (
  contact_id: string,
  kommentar: string,
  stage: string
) => {
  const body = {
    contact_id: contact_id,
    kommentar: kommentar,
    stage: stage,
  };
  const { data } = await http.post(
    "http://localhost:5000/api/application",
    body
  );

  return data;
};

export const GetkommentarById = async () => {
  const { data } = await http.get("http://localhost:5000/api/application/");

  return data;
};

export const GetUserIdVideoask = async (id: string | undefined) => {
  const token = localStorage.getItem("access_token");
  const form = localStorage.getItem("form");
  const { data } = await http.get(
    `https://api.videoask.com/forms/${form}/contacts/${id}?include_answers=true&all_answers_transcoded=true`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  try {
    return data.answers;
  } catch (error) {
    console.log(error);
  }
};
export const GetQuestionById = async (id: string) => {
  const token = localStorage.getItem("access_token");
  const { data } = await http.get(`https://api.videoask.com/questions/${id}`, {
    headers: {
      Authorization: token,
      "organization-id": "ea431fe4-8776-4ca5-b512-3fcc8a8e9c32",
    },
  });
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteKomment = async (id: string) => {
  return await http.delete(`http://localhost:5000/api/application/${id}`);
};

export const GetallFormVideoask = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = await http.get("http://localhost:5000/api/videoask/form", {
    params: { token: token },
  });
  return data;
};

export const GetDataFromVideoask = async (FormId: string) => {
  const token = localStorage.getItem("access_token");
  const { data } = await http.get(
    `https://api.videoask.com/forms/${FormId}/contacts?limit=200&offset=0`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  try {
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
