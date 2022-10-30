import styled from "styled-components";
import TeamSveg from "../src/sveg/TeamSveg";
import { useNavigate } from "react-router-dom";

function TopHome(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Warpper>
        <SvegTeamStyled>
          <TeamSveg />
        </SvegTeamStyled>
        <Continer>
          <h1>
            Ett exklusivt <span> program</span> för alla som har driv.
          </h1>
          <p style={{ marginTop: "50px" }}>
            Vi skapar förutsättningar för alla oavsett bakgrund att nå sin fulla
            <br />
            potential med hjälp av entreprenörskap, innovation och teknik.
          </p>

          <button onClick={() => navigate("/Dashboard")}> Dashboard </button>
        </Continer>
      </Warpper>
    </>
  );
}

export default TopHome;

const Warpper = styled.div`
  height: 500px;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;

  /* @media (max-width: 667px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 20%;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } */

  video {
    display: flex;
    width: 40%;
    height: 100vh;
    margin-left: 10%;
    z-index: 1;
  }
`;

const Continer = styled.div`
  position: absolute;
  color: white;
  bottom: 30%;
  right: 10%;
  top: 30%;

  h1 {
    font-size: 30px;

    span {
      color: rgb(88, 234, 193);
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    position: absolute;
    background-color: rgb(88, 234, 193);
    color: black;
    font-weight: bold;
    border: none;
    padding: 10px;
    margin-top: 20px;
    left: 30%;
    cursor: pointer;
  }
`;

const SvegTeamStyled = styled.div`
  display: flex;
  width: 700px;
  height: 500px;
  margin-left: 100px;

  /* @media (max-width: 667px) {
    flex-direction: row;
    margin-top: 95%;
    width: 300px;
  }
  @media (max-width: 1603px) {
    display: none;
  } */
`;
