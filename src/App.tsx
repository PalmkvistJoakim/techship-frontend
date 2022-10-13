import { Routes, Route } from "react-router-dom";
import Applications from "./Applications";
import NotApproved from "./NotApproved";
import SavedProfiles from "./SavedProfiles";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Approved from "./Approved";
import Selections from "./Selections";
import Sidebar from "./Sidebar";
import styled from "styled-components";

function App() {
  return (
    <>
      <H1>
        Techship<Button>Logga in</Button>
      </H1>

      <Sidebar />
      <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/selections" element={<Selections />} />
        <Route path="/approved" element={<Approved />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/notapproved" element={<NotApproved />} />
        <Route path="/savedprofiles" element={<SavedProfiles />} />
      </Routes>
    </>
  );
}

const H1 = styled.h1`
  border: 1px solid black;
  text-align: center;
  font-size: 100px;
  margin: 0px;
  margin-top: 15px;
  padding-bottom: 25px;
  padding-top: 25px;
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  top: 150px;
`;
export default App;
