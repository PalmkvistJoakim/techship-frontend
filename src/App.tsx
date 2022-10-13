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
      <Container>Logga in</Container>
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

const Container = styled.button`
  position: absolute;
  margin-left: 1800px;
`;
export default App;
