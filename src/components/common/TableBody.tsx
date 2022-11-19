import { ChangeEvent, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useCommentsDbQuery } from "../../store/Api";
interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TableBody({ onChange }: Props): JSX.Element {
  const applicants = useSelector((state: any) => state.entities.applicants);
  const stage = useSelector((state: any) => state.entities.stage);
  const searchQuery = useSelector((state: any) => state.entities.searchquery);
  const {
    data: comments = [],
    isLoading,
    isSuccess,
  } = useCommentsDbQuery("comments");
  console.log("comments", comments);
  console.log("stage", stage);
  console.log("searchquery", searchQuery);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  let filteredApplicant = [];
  //@ts-ignore
  let filteredApplicants = [];

  if (searchQuery) {
    filteredApplicants = applicants.filter((a: any) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (stage !== "APPLIED") {
    let NewApplicationsFromDb = comments.filter(
      (application: any) => application.categoryId.name === stage
    );
    console.log("NewApplicationsFromDb", applicants);
    for (const a of NewApplicationsFromDb) {
      filteredApplicant = applicants.filter(
        (applicant: any) => applicant.contact_id === a.contact_id
      );
      //@ts-ignore
      filteredApplicants = filteredApplicants.concat(filteredApplicant);
    }
  } else filteredApplicants = applicants;

  return (
    <table>
      <Container>
        {filteredApplicants.map((applicant: any) => (
          <Tr key={applicant.answer_id}>
            <>
              <TdEmail>
                {
                  <form onSubmit={handleSubmit}>
                    <input
                      type="checkbox"
                      onChange={onChange}
                      value={applicant.email}
                      name={applicant.email}
                    />
                  </form>
                }
              </TdEmail>
              <TdName>
                <Link
                  to={`/dashboard/${applicant.contact_id}`}
                  style={{ color: "#58eac1", textDecoration: "none" }}
                >
                  {applicant.name}
                </Link>
              </TdName>
              <TdCreated>
                {applicant.created_at} ({applicant.status})
              </TdCreated>

              <TdStage>
                {comments.map((c: any) => {
                  if (c.contact_id === applicant.contact_id) {
                    return c.categoryId.name;
                  }
                })}
              </TdStage>
              <TdComment>
                <i className="fa-regular fa-trash-can"></i>
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
  max-height: 30rem;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-areas:
    "mail name comment"
    "mail created stage";
  grid-template-columns: 2rem 18rem 6rem;
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
