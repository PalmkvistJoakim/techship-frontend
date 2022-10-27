import { http } from "../services/httpService";

export const handleLogin = () => {
  window.open(
    "https://auth.videoask.com/authorize?response_type=code&audience=https://api.videoask.it/&client_id=OS6lFmsKBAZF2x7tmEpvKn5lCEoQ0jyY&scope=openid%20profile%20email&redirect_uri=http://localhost:3000/dashboard"
  );
};
// /. Cors policy om man har dem i .env fil/
export const getAccessToken = async (code: string | null) => {
  const body = {
    grant_type: "authorization_code",
    code: code,
    client_id: "OS6lFmsKBAZF2x7tmEpvKn5lCEoQ0jyY",
    client_secret:
      "kg2y5Km2spZOtHJqWNkN_QonGtEdfRaBWGnhfTYesRuSXcbC0uczOzQ8bpCXImAi",
    redirect_uri: "http://localhost:3000/dashboard",
  };
  const { data } = await http.post(
    "https://auth.videoask.com/oauth/token",
    body
  );
  localStorage.setItem(
    "access_token",
    `${data.token_type} ${data.access_token}`
  );
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
