import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";
import ApplicationForm from "./components/ApplicationForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <NavMain>
        <Navbar />
      </NavMain>
      <Routes>
        <Route path="/application/:id" element={<ApplicationForm />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

const NavMain = styled.div`
  display: flex;
  margin: 15px;
`;
