import { useContext, FormEvent } from "react";
import DataContext from "../../context/DataContext";
import { IVideoask } from "../../types/IVideoAsk";
import styled from "styled-components";
import { IColumns } from "../ApplicantsTable";
import EmailContext from "../../context/EmailContext";
import { IEmail } from "../../types/IEmail";

import _ from "lodash";

function TableBody(): JSX.Element {
  const data = useContext(DataContext) as IVideoask[];

  const renderCell = (data: IVideoask, column: IColumns) => {
    if (column.content) return column.content(data);
    return _.get(data, column.path);
  };

  const { onChange } = useContext(EmailContext) as IEmail;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <table>
      <Container>
        {data.map((d) => (
          <Tr key={d.answer_id}>
            <>
              <TdEmail>
                {
                  <form onSubmit={handleSubmit}>
                    <input
                      type="checkbox"
                      onChange={onChange}
                      value={d.email}
                      name={d.email}
                    />
                  </form>
                }
              </TdEmail>
              <TdName>{d.name}</TdName>
              <TdCreated>
                {d.created_at} ({d.status})
              </TdCreated>
              <TdStage>{d.stage.name}</TdStage>
              <TdComment>
                <i className="fa-regular fa-comment" />
              </TdComment>
            </>
          </Tr>
        ))}
      </Container>
    </table>
  );
}

export default TableBody;

const Container = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-rows: 1fr;
  border-collapse: collapse;
  width: 27rem;
  overflow-y: scroll;
  max-height: 39rem;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-areas:
    "mail name comment"
    "mail created stage";
  grid-template-columns: 2rem 12.5rem 10rem;
  grid-template-rows: 1fr 1fr;
  justify-items: stretch;
  margin-top: 80px;
  margin: 2%;
  padding-top: 0.5rem;
  :hover {
    background-color: grey;
  }
  cursor: pointer;
`;

const TdEmail = styled.td`
  grid-area: mail;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
`;

const TdName = styled.td`
  grid-area: name;
  font-weight: bold;
  display: row;
  grid-template-rows: 100%;
  font-size: 1.18rem;
`;

const TdCreated = styled.td`
  grid-area: created;
  display: grid;
  grid-template-rows: 100%;
  font-size: x-small;
  font-weight: 100;
`;

const TdStage = styled.td`
  grid-area: stage;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  margin-right: 0%;
  font-size: 12px;
  justify-self: end;
  font-weight: bold;
`;

const TdComment = styled.td`
  grid-area: comment;
  display: grid;
  grid-template-columns: 60%;
  justify-self: end;
`;
