import styled from "styled-components";
import Techship from "../sveg/Techship";
import { IStage } from "../types/IStage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  selectedStage: IStage;
  onSelectStage: (stage: IStage) => void;
  filteredDataCount: number;
}

function Sidebar({ selectedStage, onSelectStage, filteredDataCount }: Props) {
  const navigate = useNavigate();
  const stage = useSelector((state: IStage) => state.entities.stage);

  return (
    <Container>
      <Techship width="200px" height="200px" />
      <Filter>
        {stage.map((s: any) => (
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
  }
`;

export default Sidebar;
