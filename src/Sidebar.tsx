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
          <Link to="/applied">APPLIED</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/program">TECHSHIP_PROGRAMME</Link>
        </LiContainer>
        <LiContainer>
          <Link to="/school">TECHSHIP_SCHOOL</Link>
        </LiContainer>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid white;
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
