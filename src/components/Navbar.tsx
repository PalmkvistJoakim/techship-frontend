import styled from "styled-components";
import Techship from "../sveg/Techship";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  return (
    <>
      <Container>
        {token === "Bearer null" ? (
          <></>
        ) : (
          <>
            <Logo>
              <Techship width={"60px"} height={"50px"} />
            </Logo>
            <List>
              <button onClick={() => navigate("/dashboard")}>Dashboard</button>
              <button onClick={() => navigate("/logout")}>Logout</button>
            </List>
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

  button {
    cursor: pointer;
    border: none;
    font-weight: bold;
    padding: 0.8rem;
    border-radius: 2rem;
    background-color: #58eac1;
    transition: width 2s;

    :hover {
      opacity: 0.8;
    }
    :active {
      transform: scale(0.8);
    }
  }
`;
