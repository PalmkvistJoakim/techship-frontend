import { useContext, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import applicantsContext from "../Context/ApplicantsContext";
import IApplicant from "../types/IApplicant";
import styled from "styled-components";

interface Props {
  setCheck: (checkEmail: string | string[]) => void;
  checkEmail: any;
}

function TableBody({ setCheck, checkEmail }: Props): JSX.Element {
  const applicants = useContext(applicantsContext) as IApplicant[];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setCheck([...checkEmail, value]);
    } else {
      setCheck(value);
    }
  };

  return (
    <>
      <Tbody>
        {applicants.map((applicant) => (
          <tr key={applicant._id}>
            <Container>
              <td>
                <form onSubmit={handleSubmit}>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    value={applicant.email}
                    name={applicant.email}
                  />
                </form>
              </td>
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
              <Td>{applicant.email}</Td>
            </Container>
          </tr>
        ))}
      </Tbody>
    </>
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
  grid-template-columns: repeat(6, 184px);
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
