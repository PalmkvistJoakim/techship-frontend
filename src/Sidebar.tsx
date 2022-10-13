import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <ul>
        <LiContainer>
          <Link to="/">ANSÖKNINGAR</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/selections">URVAL</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/approved">Antagna</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/step1">Steg1</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/step2">Steg2</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/notapproved">Ej Antagna</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/savedprofiles">SPARADE PROFILER</Link>
        </LiContainer>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 200px;
  padding-right: 30px;
  padding-top: 100px;
  padding-bottom: 200px;
`;

const LiContainer = styled.div`
  margin: 10px;
`;

export default Sidebar;
