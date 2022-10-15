import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";
import ApplicationForm from "./components/ApplicationForm";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Questions from "./components/Questions";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <TopAnnons onClick={() => navigate("/application")}>
        Klick här för att gå vidare till ansökan...
      </TopAnnons>
      <NavMain>
        <Navbar />
      </NavMain>
      <Routes>
        <Route path="/application/:id" element={<ApplicationForm />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/questions" element={<Questions />} />
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

const TopAnnons = styled.p`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(88, 234, 193);
  justify-content: center;
  color: black;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;
