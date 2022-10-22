import { useContext, FormEvent } from "react";
import { Link } from "react-router-dom";
import ApplicantsContext from "../../context/ApplicantsContext";
import EmailContext from "../../context/EmailContext";
import DataContext from "../../context/DataContext";
import IApplicant from "../../types/IApplicant";
import { IVideoask } from "../../types/IVideoAsk";
import { IEmail } from "../../types/IEmail";
import styled from "styled-components";

function TableBody(): JSX.Element {
  const applicants = useContext(ApplicantsContext) as IApplicant[];
  const data = useContext(DataContext) as IVideoask[];
  const { onChange } = useContext(EmailContext) as IEmail;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Tbody>
        {data.map((Data: IVideoask) => (
          <tr key={Data.answer_id}>
            <Container>
              <td>
                <form onSubmit={handleSubmit}>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    value={Data.email}
                    name={Data.email}
                  />
                </form>
              </td>
              <Td>
                <Link to={"/application/:id"}>{Data.name}</Link>
              </Td>
              <TdAge>{Data.phone_number}</TdAge>
              <a>{Data.created_at}</a>
              <TdCommentIcon>
                <i className="fa-regular fa-comment" />
              </TdCommentIcon>
              <Td>{Data.email}</Td>
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