import styled from "styled-components";
import Techship from "../sveg/Techship";
import { IStage } from "../types/IStage";

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
        <Span>{filteredDataCount}</Span>
      </Filter>
      <Navigation>Login</Navigation>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 20% 10% 30% 10%;
  grid-template-areas:
    "picture"
    "get"
    "filter"
    "navigation";
  align-content: space-between;
  row-gap: 10%;
  justify-content: center;
  align-content: center;
`;

const Picture = styled.div`
  grid-area: picture;
  background-color: black;
`;

const Get = styled.div`
  grid-area: get;
  display: grid;
  align-content: space-between;
`;

const Batch = styled.select`
  padding: 12px;
  background-color: #58eac1;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
`;

const ReloadButton = styled.button`
  padding: 12px;
  background-color: #58eac1;
  font-weight: bold;
  border: none;
  border-radius: 10px;
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
  grid-area: filter;
  border: 1px solid #58eac1;
  border-radius: 2rem;
`;

const LiContainer = styled.li`
  text-align: center;
  padding: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  list-style: none;
  cursor: pointer;

  :hover {
    background-color: #58eac1;
  }
`;

const Navigation = styled.div`
  grid-area: navigation;
`;

const Span = styled.span`
  color: #58eac1;
`;

export default Sidebar;
