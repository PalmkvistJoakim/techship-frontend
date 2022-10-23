import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <LiContainer>
        <h4>Alla Ansökningar</h4>
      </LiContainer>
      <LiContainer>
        <h4>Antagna</h4>
      </LiContainer>
      <LiContainer>
        <h5>Ej Antagna</h5>
      </LiContainer>
      <LiContainer>
        <h5>Techship Programme</h5>
      </LiContainer>
      <LiContainer>
        <h4>Techship School</h4>
      </LiContainer>
      <LiContainer>
        <h5>Sparade Profiler</h5>
      </LiContainer>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #58eac1;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50%;
`;

const LiContainer = styled.div`
  text-align: center;
  background-color: #0c0c0c7a;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #58eac1;
  }
`;

export default Sidebar;
