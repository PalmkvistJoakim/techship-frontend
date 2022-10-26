import styled from "styled-components";
import { IStage } from "../types/IStage";

interface Props {
  stage: IStage[];
  selectedStage: IStage;
  onSelectStage: (stage: IStage) => void;
}

function Sidebar({ stage, selectedStage, onSelectStage }: Props) {
  return (
    <Container>
      {stage.map((s) => (
        <LiContainer key={s._id} onClick={() => onSelectStage(s)}>
          {s.name}
        </LiContainer>
      ))}
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
  width: 130%;
  margin-left: 40px;
`;

const LiContainer = styled.li`
  text-align: center;
  background-color: #0c0c0c7a;
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

export default Sidebar;
