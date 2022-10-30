import styled from "styled-components";
import Techship from "../sveg/Techship";
import { IStage } from "../types/IStage";
import { useNavigate } from "react-router-dom";

interface Props {
  stage: IStage[];
  selectedStage: IStage;
  onSelectStage: (stage: IStage) => void;
  filteredDataCount: number;
}

function Sidebar({
  stage,
  selectedStage,
  onSelectStage,
  filteredDataCount,
}: Props) {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");
  return (
    <Container>
      <Picture>
        <Techship />
      </Picture>
      <Get>
        <Batch>
          <option>Batch</option>
        </Batch>
        <ReloadButton onClick={() => window.location.reload()}>
          <i className="fa-solid fa-download" />
          Hämta ansökningar
        </ReloadButton>
      </Get>
      <Filter>
        {stage.map((s) => (
          <LiContainer key={s._id} onClick={() => onSelectStage(s)}>
            {s.name}
          </LiContainer>
        ))}
      </Filter>
      <Navigation>
        <Number>{filteredDataCount}</Number>
        <div onClick={() => navigate("/logout")}>Logout</div>
      </Navigation>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10rem 6rem 10rem 3rem;
  grid-template-areas:
    "picture"
    "get"
    "filter"
    "navigation";
  align-content: space-between;
  row-gap: 5rem;
  justify-content: center;
  align-content: center;
`;

const Picture = styled.div`
  grid-area: picture;
  margin-top: 0.8rem;
  background-color: black;
`;

const Get = styled.div`
  grid-area: get;
  display: grid;
  align-content: space-between;
  width: 18rem;
  justify-self: center;
`;
const Batch = styled.select`
  padding: 1rem;
  width: 18rem;
  background-color: #58eac1;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
`;

const ReloadButton = styled.button`
  padding: 1rem;
  background-color: #58eac1;
  font-weight: bold;
  border: none;
  margin-top: 1rem;
  cursor: pointer;

  :hover {
    background-color: #b9e7db;
  }

  @media (width < 600px) {
    width: auto;
    margin-right: 30px;
  }

  i {
    margin-right: 5px;
    font-size: 16px;
  }
`;

const Filter = styled.div`
  margin-top: 0rem;
  grid-area: filter;
  display: row;
  max-width: 15rem;
  min-width: 13rem;
  justify-self: center;
  text-align: end;
`;

const LiContainer = styled.li`
  text-align: center;
  padding: 0.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  list-style: none;
  margin: -0.5rem;
  font-size: 1.1rem;
  font-family: "Courier New", Courier, monospace;
  padding: 0.8rem 0rem 0.8rem 0rem;

  cursor: pointer;

  :hover {
    background-color: #58eac1;
  }
`;

const Number = styled.div`
  color: #58eac1;
  text-align: end;
`;

const Navigation = styled.div`
  grid-area: navigation;
  text-align: center;
  margin-bottom: 89rem;
  div {
    margin: 5px;
    font-weight: bold;
    margin-right: 20px;

    cursor: pointer;

    :hover {
      background-color: #58eac1;
    }
  }
`;

export default Sidebar;
