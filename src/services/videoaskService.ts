import { http } from "../services/httpService";

export const handleLogin = () => {
  window.open("http://localhost:5000/api/videoask/auth");
};
// /. Cors policy om man har dem i .env fil/
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

export const GetDataFromVideoask = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = await http.get(
    //ÄNDRADE HÄR!!!
    "https://api.videoask.com/forms/5625efd6-e7e9-4b5c-ac78-f2a7b429e79c/contacts?limit=200&offset=0",
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
export const GetUserIdVideoask = async (id: string | undefined) => {
  const token = localStorage.getItem("access_token");
  const { data } = await http.get(
    `https://api.videoask.com/forms/5625efd6-e7e9-4b5c-ac78-f2a7b429e79c/contacts/${id}?include_answers=true&all_answers_transcoded=true`,
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
