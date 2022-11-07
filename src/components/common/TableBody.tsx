import { useContext, FormEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { IVideoask } from "../../types/IVideoAsk";
import styled from "styled-components";
import EmailContext from "../../context/EmailContext";
import { IEmail } from "../../types/IEmail";
import { Link } from "react-router-dom";
import _ from "lodash";
import { IKomment } from "../../types/IVideoAsk";
import {
  GenerateKomment,
  GetUserIdVideoask,
  GetkommentarById,
} from "../../services/videoaskService";

function TableBody(): JSX.Element {
  const data = useContext(DataContext) as IVideoask[];

  //Denna har jag satt här, men den behvöer flyttas upp till APP, där
  //profilepage renderas, och därmed tas bort från profilepage.

  const [comment, setComment] = useState<IKomment[]>([]);

  const { onChange } = useContext(EmailContext) as IEmail;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const params = useParams();

  useEffect(() => {
    const fetchComment = async () => {
      setComment(await GetkommentarById());
    };
    fetchComment();
  });

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
              <TdName>
                <Link
                  to={`/dashboard/${d.contact_id}`}
                  style={{ color: "#58eac1", textDecoration: "none" }}
                >
                  {d.name}
                </Link>
              </TdName>
              <TdCreated>
                {d.created_at} ({d.status})
              </TdCreated>

              <TdStage>
                {comment.map((c) => {
                  if (c.contact_id === d.contact_id) {
                    return c.stage;
                  }
                })}
              </TdStage>
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
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 1fr;
  border-collapse: collapse;
  width: 100%;
  overflow-y: scroll;
  max-height: 36.5rem;
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
  margin-bottom: 0.5rem;
`;

const TdName = styled.td`
  grid-area: name;
  font-weight: bold;
  display: row;
  grid-template-rows: 100%;
  font-size: 1.5rem;
`;

const TdCreated = styled.td`
  grid-area: created;
  display: grid;
  grid-template-rows: 100%;
  font-size: x-small;
  font-weight: 100;
  font-size: 0.8rem;
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
  font-size: 1.05rem;
`;

const TdComment = styled.td`
  grid-area: comment;
  display: grid;
  grid-template-columns: 60%;
  justify-self: end;
`;
