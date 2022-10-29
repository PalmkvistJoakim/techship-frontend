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
        {/* Lägg till ochs tyla snyggt sen */}
        {/* <Span>{filteredDataCount}</Span> */}
      </Filter>
      <Navigation>Logga ut</Navigation>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 9rem 7rem 14rem 2rem;
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
  border-radius: 1rem;
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
  margin-top: 0rem;
  grid-area: filter;
  display: row;
  max-width: 15rem;
  min-width: 13rem;
  justify-self: center;
`;

const LiContainer = styled.li`
  text-align: center;
  padding: 0.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 7rem;
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

const Navigation = styled.div`
  grid-area: navigation;
`;

const Span = styled.span`
  color: #58eac1;
`;

export default Sidebar;
