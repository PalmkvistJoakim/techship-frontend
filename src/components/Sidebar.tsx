import styled from "styled-components";
import { IStatus } from "../types/IStatus";

interface Props {
  status: IStatus[];
  selectedStatus: IStatus;
  onSelectStatus: (status: IStatus) => void;
}

function Sidebar({ status, selectedStatus, onSelectStatus }: Props) {
  return (
    <Container>
      {status.map((s) => (
        <LiContainer key={s._id} onClick={() => onSelectStatus(s)}>
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
  margin-top: 50%;
`;

const LiContainer = styled.div`
  text-align: center;
  background-color: #0c0c0c7a;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #58eac1;
  }
`;

export default Sidebar;
