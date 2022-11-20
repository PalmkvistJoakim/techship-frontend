import styled from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";
import { filterApplicant } from "../../store/filteredAplicants";
import { useSelector, useDispatch } from "react-redux";
import { FormEvent, useEffect } from "react";
import {
  useCommentsDbQuery,
  useGetApplicantIdVideaskQuery,
  useRemoveProfileBYIdMutation,
} from "../../store/Api";
import { IVideoask } from "../../types/IVideoAsk";
import { toast } from "react-toastify";

function TableBody(): JSX.Element {
  const form = localStorage.getItem("form");
  const [RemoveProfile] = useRemoveProfileBYIdMutation();
  const { data: comments } = useCommentsDbQuery("comments");
  let { data: contacts, error: isError } = useGetApplicantIdVideaskQuery(form);
  const searchQuery = useSelector((state: any) => state.entities.searchquery);
  const dispatch = useDispatch();
  const stage = useSelector((state: any) => state.entities.stage);
  const filterApplicantsFromRedux = useSelector(
    (state: any) => state.entities.filterApplicant
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log("searchQuery", searchQuery);

  useEffect(() => {
    contacts = contacts?.filter((c: IVideoask) => c.name !== null);
    let filterOneApplicant = [];
    //@ts-ignore
    let allFilteredApplicants = [];

    if (searchQuery) {
      allFilteredApplicants = contacts.filter((a: any) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (stage !== "636febaf89043be7c2d17c37") {
      let NewApplicationsFromDb = comments.filter(
        (application: any) => application.categoryId._id === stage
      );
      for (const a of NewApplicationsFromDb) {
        filterOneApplicant = contacts.filter(
          (applicant: any) => applicant.contact_id === a.contact_id
        );
        //@ts-ignore
        allFilteredApplicants =
          //@ts-ignore
          allFilteredApplicants.concat(filterOneApplicant);
      }
    } else {
      allFilteredApplicants = contacts;
    }

    dispatch(filterApplicant(allFilteredApplicants));
  }, [stage, searchQuery, contacts]);

  // function dispatchFilterApplicant(allFilteredApplicants: any) {
  //   return dispatch(filterApplicant(allFilteredApplicants));
  // }

  async function handleRemove(id: string) {
    try {
      const result = window.confirm(
        "Är du säkert du vill radera ? Profilen kan inte tas tillbaka."
      );
      if (result === true) {
        toast.success("👍 Profilen borttagen.", { theme: "dark" });
        // await RemoveProfile(id);
      } else {
        return;
      }
    } catch (error) {
      toast.error("👀 kunde inte radera!", { theme: "dark" });
    }
  }
  useEffect(() => {
    if (isError) {
      window.location.href = "/dashboard";
    }
  }, [contacts, comments, isError]);

  return (
    <table>
      <Container>
        {filterApplicantsFromRedux?.map((applicant: IVideoask) => (
          <Tr key={applicant.answer_id}>
            <>
              {/* <TdEmail>
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
              </TdEmail> */}
              <TdName>
                <Link
                  to={`/dashboard/${applicant.contact_id}`}
                  style={{ color: "#58eac1", textDecoration: "none" }}
                >
                  {applicant.name}
                </Link>
              </TdName>
              <TdCreated>
                {new Date(applicant.created_at).toLocaleString()} (
                {applicant.status})
              </TdCreated>

              <TdStage>
                {comments.map((c: any) => {
                  if (c.contact_id === applicant.contact_id) {
                    return c.categoryId.name;
                  }
                })}
              </TdStage>
              <TdComment>
                <i
                  className="fa-regular fa-trash-can"
                  style={{ color: "red", cursor: "pointer", fontSize: "14px" }}
                  onClick={() => handleRemove(applicant.respondent_id)}
                ></i>
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
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
