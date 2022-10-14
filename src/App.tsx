import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import styled from "styled-components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/application/:id" element={<Dashboard />} />
        <Route path="/application" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
