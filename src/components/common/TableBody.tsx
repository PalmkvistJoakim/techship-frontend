import Applicant from "../Applicant";
import { useContext } from "react";
import applicantsContext from "../../context/ApplicantsContext";
import IApplicant from "../../types/IApplicant";
import styled from "styled-components";

function TableBody(): JSX.Element {
  const applicants = useContext(applicantsContext) as IApplicant[];

  return (
    <Tbody>
      {applicants.map((applicant, index) => (
        <div key={applicant._id}>
          <Applicant {...applicant} index={index} />
        </div>
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
