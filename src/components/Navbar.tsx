import styled from "styled-components";
import Techship from "../sveg/Techship";
import { useNavigate } from "react-router-dom";
import Techshiplogo from "../sveg/Techshiplogo";
import TechshipNoanmation from "../sveg/TechshipNoanmation";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  return (
    <>
      <Container>
        {token ? (
          <>
            <Logo>
              <TechshipNoanmation width={"200px"} height={"75px"} />
            </Logo>
            <List>
              <h1 onClick={() => navigate("/dashboard")}>Dashboard</h1>
              <h1 onClick={() => navigate("/logout")}>Logga ut</h1>
            </List>
          </>
        ) : (
          <>
            <Logo>
              <Techshiplogo width={"200px"} height={"75px"} />
            </Logo>
          </>
        )}
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const Logo = styled.div`
  align-items: center;
`;

const List = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 3rem;

  h1 {
    text-decoration: underline #58eac1;
    :hover {
      cursor: pointer;
      border: none;
      font-weight: bold;
      padding: 0.8rem;
      border-radius: 0.8rem;
      background-color: #58eac1;
      transition: width 2s;
      opacity: 0.9;
    }
    :active {
      transform: scale(0.8);
    }
  }
`;
