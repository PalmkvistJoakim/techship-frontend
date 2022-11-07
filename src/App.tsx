import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import { useState, useEffect } from "react";
import { IVideoask } from "./types/IVideoAsk";
import {
  getAccessToken,
  GetDataFromVideoask,
} from "./services/videoaskService";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";

function App() {
  let [data, setData] = useState<IVideoask[]>([]);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      getAccessToken(window.location.search);
    }
    const form = localStorage.getItem("form");
    if (form) {
      const fetchData = async () => {
        setData(await GetDataFromVideoask(form));
      };
      fetchData();
    }
  }, []);

  useEffect(() => {}, []);
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
