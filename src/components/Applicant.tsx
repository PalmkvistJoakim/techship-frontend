import IApplicant from "../types/IApplicant";
import styled from "styled-components";

interface Props extends IApplicant {
  index: number;
}

function Applicant({ name, age, stage, _id, index }: Props): JSX.Element {
  return (
    <Container>
      <td>{index + 1}</td>
      <Td>{name}</Td>
      <TdAge>{age}</TdAge>
      <Td>{stage}</Td>
      <TdCommentIcon>
        <i className="fa-regular fa-comment" />
      </TdCommentIcon>
    </Container>
  );
}

export default Applicant;

const Td = styled.td`
  text-align: left;
`;

const Container = styled.tr`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid;
  padding: 8px;
`;

const TdCommentIcon = styled.td`
  text-align: left;
  margin-left: 16px;
`;

const TdAge = styled.td`
  text-align: left;
  margin-left: 42px;
`;
