import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import { useState, useEffect } from "react";
import { IVideoask } from "./types/IVideoAsk";
import { http } from "./services/httpService";
import { getAccessToken } from "./services/videoaskService";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";

function App() {
  let [data, setData] = useState<IVideoask[]>([]);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      getAccessToken(window.location.search);
    }
  }, []);

  const GetDataFromVideoask = async () => {
    const token = localStorage.getItem("access_token");
    const { data } = await http.get(
      "https://api.videoask.com/forms/5625efd6-e7e9-4b5c-ac78-f2a7b429e79c/contacts?limit=200&offset=0",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    try {
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetDataFromVideoask();
  }, []);
  const token = localStorage.getItem("access_token");

  return (
    <>
      {token === "Bearer null" ? <></> : <Navbar />}
      <Routes>
        <Route
          path="/dashboard/:id"
          element={<ProfilePage data={[...data]} />}
        />
        <Route path="/dashboard" element={<Dashboard data={[...data]} />} />
        <Route path="/logout" element={<LogoutForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={!token ? <LoginForm /> : <Dashboard data={[...data]} />}
        />
      </Routes>
    </>
  );
}

export default App;
