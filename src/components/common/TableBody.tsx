import styled from "styled-components";
import { Link } from "react-router-dom";
import { filterApplicant } from "../../store/filteredAplicants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  useCommentsDbQuery,
  useGetApplicantIdVideaskQuery,
  useRemoveProfileBYIdMutation,
} from "../../store/Api";
import { IVideoask } from "../../types/IVideoAsk";
import { toast } from "react-toastify";
import { IStage } from "../../types/IStage";

function TableBody(): JSX.Element {
  const dispatch = useDispatch();
  const form = localStorage.getItem("form");

  const { data: comments = [] } = useCommentsDbQuery("comments");
  const [RemoveProfile] = useRemoveProfileBYIdMutation();

  let { data: contacts = [], error: isError } =
    useGetApplicantIdVideaskQuery(form);
  const searchQuery = useSelector((state: any) => state.entities.searchquery);
  const stage = useSelector((state: IStage) => state.entities.stage);
  const filterApplicantsFromRedux = useSelector(
    (state: IVideoask) => state.entities.filterApplicant
  );

  contacts = contacts?.filter((c: IVideoask) => c.name !== null);

  useEffect(() => {
    console.log("Kommer in i Use EFFECT");
    let filterOneApplicant = [];
    //@ts-ignore
    let allFilteredApplicants = [];

    if (searchQuery) {
      console.log("Kommer in i if searchQuery", searchQuery);

      allFilteredApplicants = contacts?.filter((a: IVideoask) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (stage) {
      console.log("Kommer in i else if stage", stage);

      let NewApplicationsFromDb = comments?.filter(
        (application: IVideoask) => application.categoryId._id === stage
      );
      for (const a of NewApplicationsFromDb) {
        filterOneApplicant = contacts?.filter(
          (applicant: IVideoask) => applicant.contact_id === a.contact_id
        );

        allFilteredApplicants =
          //@ts-ignore
          allFilteredApplicants.concat(filterOneApplicant);
      }
    } else {
      console.log(contacts);
      allFilteredApplicants = contacts;
    }

    dispatch(filterApplicant(allFilteredApplicants));
  }, [stage, searchQuery, contacts.length]);

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
      <Container className="question">
        {filterApplicantsFromRedux?.map((applicant: IVideoask) => (
          <Tr
            status={
              applicant.status === "completed" ? "completed" : "dropped_out"
            }
            key={applicant.answer_id}
          >
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
                {new Date(applicant.created_at).toLocaleString()}
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
                  style={{ cursor: "pointer", fontSize: "14px" }}
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

interface BdgColor {
  status: "dropped_out" | "idle" | "completed";
}

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 1fr;
  border-collapse: collapse;
  width: 100%;
  max-height: 30rem;
  &.question {
    overflow-y: scroll;
  }

  &.question::-webkit-scrollbar {
    border-radius: 1rem;
    background-color: #737373;
    width: 6px;
  }
  &.question::-webkit-scrollbar-thumb {
    background-color: #58eac1;
    border-radius: 1rem;
  }
`;

const Tr = styled.tr<BdgColor>`
  display: grid;
  grid-template-areas:
    "mail name comment"
    "mail created stage";
  grid-template-columns: 1rem 18rem 6rem;
  grid-template-rows: 1fr 1fr;
  justify-items: stretch;
  margin-top: 80px;
  margin: 2%;
  padding-top: 0.5rem;
  /* background-color: ${(props) =>
    props.status === "completed" ? "#09814A" : "#F55D3E"}; */

  :hover {
    background-color: grey;
  }
  cursor: pointer;
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
