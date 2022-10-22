import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ApplicationForm from "./components/ApplicationForm";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/ProfilePage";
import styled from "styled-components";

function App() {
  return (
    <>
      <NavMain>
        <Navbar />
      </NavMain>
      <Routes>
        <Route path="/application/:id" element={<ProfilePage />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

const NavMain = styled.div`
  display: flex;
  margin: 15px;
`;
