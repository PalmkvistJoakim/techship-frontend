import { useContext } from "react";
import { Link } from "react-router-dom";
import applicantsContext from "../context/applicantsContext";
import IApplicant from "../types/IApplicant";
import styled from "styled-components";

function TableBody(): JSX.Element {
  const applicants = useContext(applicantsContext) as IApplicant[];

  return (
    <Tbody>
      {applicants.map((applicant, index) => (
        <tr key={applicant._id}>
          <Container>
            <td>{index + 1}</td>
            <Td>
              <div>
                <Link to={"/application/:id"}>{applicant.name}</Link>
              </div>
            </Td>
            <TdAge>{applicant.age}</TdAge>
            <Td>{applicant.stage}</Td>
            <TdCommentIcon>
              <i className="fa-regular fa-comment" />
            </TdCommentIcon>
          </Container>
        </tr>
      ))}
    </Tbody>
  );
}

export default TableBody;

const Tbody = styled.tbody`
  display: grid;
  grid-template-rows: 1fr;
  border-collapse: collapse;
  border: 1px solid;
`;

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
