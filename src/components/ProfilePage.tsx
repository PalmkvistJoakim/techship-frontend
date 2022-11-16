import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  GenerateKomment,
  GetDataFromVideoask,
  GetUserIdVideoask,
  handleDeleteKomment,
  RemoveProfile,
} from "../services/videoaskService";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useForm } from "../hooks/useForm";
import { IprofileAdd } from "../types/IStage";
import Joi from "joi";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "../store/contacts";
import { deleteComment } from "../store/comment";
import { toast } from "react-toastify";
import { IContactId, IKomment, IVideoask } from "../types/IVideoAsk";
import { ICategory } from "../store/stage";
import { loadApplicant } from "../store/applicant";

const schema = Joi.object({
  kommentar: Joi.string().label("Kommentar"),
});
function ProfilePage() {
  const dispatch = useDispatch();
  const applicants = useSelector(
    (state: IVideoask) => state.entities.applicants
  );
  const contacts = useSelector((state: IContactId) => state.entities.contacts);
  const comments = useSelector((state: IKomment) => state.entities.comments);
  const stages = useSelector((state: ICategory) => state.entities.stage);
  const [answers, setAnswers] = useState<IContactId>();
  const [stage, setStage] = useState<string>("");
  const {
    data: body,
    renderInput,
    handleSubmit,
    renderButton,
  } = useForm<IprofileAdd>(
    {
      kommentar: "",
    },
    schema
  );
  const params = useParams();

  useEffect(() => {
    async function handleUserInfo() {
      const contacts = await GetUserIdVideoask(params.id);
      dispatch(loadContacts(contacts));
      setAnswers(contacts);
    }

    async function runLoadApplicant() {
      const form = localStorage.getItem("form");
      if (form) {
        const applicants = await GetDataFromVideoask(form);
        dispatch(loadApplicant(applicants));
      }
    }
    runLoadApplicant();
    handleUserInfo();
  }, []); //answers

  async function doSubmit() {
    const { id } = params;
    if (id) {
      try {
        await GenerateKomment(id, body.kommentar, stage);
      } catch (error) {
        toast.error("🦄 något gick fel.", { theme: "dark" });
      }
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await handleDeleteKomment(id);
    } catch (error) {
      toast.error("🦄 kunde inte radera!", { theme: "dark" });
    }
    dispatch(deleteComment(id));
  };

  const handleRemoveProfile = async (id: string) => {
    try {
      toast.success(`🦄 User was successed removed`, { theme: "dark" });
      window.setInterval(handleRefresh, 2000);
    } catch (error) {
      toast.error("🦄 något gick fel.", { theme: "dark" });
    }
  };
  function handleRefresh() {
    window.location.href = "/dashboard";
  }

  return (
    <>
      {applicants.map((d: IVideoask) => {
        if (params.id === d.contact_id)
          return (
            <Container>
              <Userinfo
                status={d.status === "completed" ? "completed" : "dropped_out"}
              >
                <h1>{d.name.toUpperCase()}</h1>
                <p> {d.created_at}</p>
                <p className="email"> {d.email}</p>
                <p>{d.phone_number}</p>
                <p className="status">{d.status.toUpperCase()}</p>
                {/* <Button onClick={() => handleRemoveProfile(d.respondent_id)}>
                  Remove Profile
                </Button> */}
                <div className="form">
                  <form onSubmit={handleSubmit(doSubmit)}>
                    {renderInput("kommentar", "Kommentar...", "text")}
                    <Dropdown>
                      <select
                        onChange={(e) => setStage(e.target.value)}
                        value={stage}
                      >
                        <option value="" disabled={true}>
                          Välj Stage
                        </option>
                        {stages.map((s: ICategory) => (
                          <option key={s._id} value={s._id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      {renderButton("Spara")}
                    </Dropdown>
                  </form>
                </div>
                {comments.map((c: any) => {
                  if (c.contact_id === params.id) {
                    return (
                      <CommentStyle>
                        <div key={c._id}>
                          {c.kommentar}
                          <Icon
                            className="fa-solid fa-delete-left"
                            onClick={() => handleDelete(c._id)}
                          />
                        </div>

                        <div> {c.categoryId.name} </div>
                      </CommentStyle>
                    );
                  }
                })}
              </Userinfo>
              <Question>
                {contacts.map((User: any) => (
                  <>
                    {User.media_url ? (
                      <li>
                        <ReactPlayer
                          url={User.media_url}
                          controls={true}
                          width="300px"
                        />
                      </li>
                    ) : (
                      <li key={User.contact_id}> {User?.input_text}</li>
                    )}
                  </>
                ))}
              </Question>
            </Container>
          );
      })}
    </>
  );
}

export default ProfilePage;

interface StausColor {
  status: "dropped_out" | "idle" | "completed";
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 20rem 48rem;
  grid-template-areas: "userinfo answer";
`;
const Userinfo = styled.div<StausColor>`
  grid-area: userinfo;
  display: block;
  justify-content: center;
  justify-self: center;
  list-style: none;
  font-weight: bold;
  max-height: 60rem;
  line-height: 3rem;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 14px;

    &.email {
      font-size: 16px;
      font-weight: bold;
    }
    &.status {
      color: ${(props) => (props.status === "completed" ? "green" : "red")};
    }
    div {
      display: flex;
      justify-content: center;
    }

    .form {
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const Question = styled.ul`
  grid-area: answer;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  overflow-y: scroll;
  max-height: 40rem;
  display: grid;
  list-style: none;
  row-gap: 2rem;
  font-weight: bold;

  li {
    font-size: 1.3rem;
    margin-right: 5rem;
    margin-left: 5rem;
  }
`;

const Dropdown = styled.div`
  display: grid;
  gap: 12px;
  justify-content: center;
  select {
    margin-top: 10px;
    border: none;
    padding: 10px;
    border-radius: 2rem;
    font-size: 13px;
    font-weight: 700;
    text-align: center;

    option {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const Icon = styled.i`
  font-size: 20px;
  color: red;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const CommentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

// const Button = styled.button`
//   cursor: pointer;
//   border: none;
//   place-self: center;
//   margin-top: 30px;
//   font-weight: bold;
//   padding: 0.8rem;
//   width: 90px;
//   border-radius: 1rem;
//   background-color: red;
//   color: white;
//   transition: width 2s;

//   :hover {
//     opacity: 0.8;
//   }
//   :active {
//     transform: scale(0.8);
//   }
// `;
