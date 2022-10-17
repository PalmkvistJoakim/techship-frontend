import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <ul>
        <LiContainer>
          <h5>Ansökningar</h5>
        </LiContainer>
        <LiContainer>
          <h5>Urval (valbar, dropdown?)</h5>
        </LiContainer>
        <LiContainer>
          <h5>- Antagna</h5>
        </LiContainer>
        <LiContainer>
          <h5>- Ej Antagna</h5>
        </LiContainer>
        <LiContainer>
          <h5>- Techship Programme</h5>
        </LiContainer>
        <LiContainer>
          <h5>- Techship School</h5>
        </LiContainer>
        <LiContainer>
          <h5>Sparade Profiler</h5>
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
