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
        <I className="fa-regular fa-comment" />
      </TdCommentIcon>
      <button> Delete </button>
    </Container>
  );
}

export default Applicant;

const Td = styled.td`
  text-align: left;
`;

const Container = styled.tr`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid;
  padding: 8px;

  button {
    background-color: #e82525;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin: 0;
    padding: 5px;
    margin-left: 20px;
    box-shadow: silver;
    :hover {
      background-color: #fb685d;
    }
  }
`;

const TdCommentIcon = styled.td`
  text-align: left;
  margin-left: 16px;
`;

const TdAge = styled.td`
  text-align: left;
  margin-left: 42px;
`;

const I = styled.i`
  cursor: pointer;
  margin-top: 4px;
`;
