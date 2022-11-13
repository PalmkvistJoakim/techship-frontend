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
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      getAccessToken(window.location.search);
    }
  }, []);

  const token = localStorage.getItem("access_token");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard/:id" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<LogoutForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={!token ? <LoginForm /> : <Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
