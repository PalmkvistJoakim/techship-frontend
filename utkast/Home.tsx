import styled from "styled-components";
import TopHome from "./TopHome";

function Home(): JSX.Element {
  return (
    <>
      <Continer>
        <TopHome />
      </Continer>
    </>
  );
}

export default Home;

const Continer = styled.div`
  position: relative;
`;
