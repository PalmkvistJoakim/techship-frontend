import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Continer>
      <Logo onClick={() => navigate("/")}>
        <h1 className="Tech"> Tech</h1>
        <h3 className="ship"> Ship</h3>
        <i className="fa-solid fa-rocket" />
      </Logo>
      <RightItems>
        <div onClick={() => navigate("/dashboard")}>Dashboard</div>
        <div onClick={() => navigate("/login")}>Login</div>
      </RightItems>
    </Continer>
  );
}

export default Navbar;

const Continer = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  background-color: black;
  color: white;
  justify-content: space-between;
  align-items: center;
  grid-area: 1/2;
`;

const Logo = styled.div`
  display: flex;
  cursor: pointer;

  h1 {
    font-size: 24px;
    color: rgb(88, 234, 193);
  }

  h3 {
    padding: 5px;
    font-size: 16px;
  }

  i {
    font-size: 20px;
    color: #58eac1;
  }
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  div {
    margin: 5px;
    align-items: center;
    font-weight: bold;
    margin-right: 20px;

    cursor: pointer;
  }
`;
