import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  GetDataFromVideoask,
  GetUserIdVideoask,
  RemoveProfile,
} from "../services/videoaskService";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useForm } from "../hooks/useForm";
import { IprofileAdd } from "../types/IStage";
import Joi from "joi";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "../store/contacts";
import { toast } from "react-toastify";
import { IContactId, IVideoask } from "../types/IVideoAsk";
import { loadApplicant } from "../store/applicant";
import {
  useCommentsDbQuery,
  useCommentsAddMutation,
  useCommentsRemoveMutation,
  useGetCategoriesQuery,
} from "../store/Api";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

const schema = Joi.object({
  kommentar: Joi.string().label("Kommentar"),
});
function ProfilePage() {
  const dispatch = useDispatch();
  const {
    data: comments = [],
    isLoading,
    isSuccess,
  } = useCommentsDbQuery("comments");
  const [addComment] = useCommentsAddMutation();
  const [RemoveComment] = useCommentsRemoveMutation();

  const applicants = useSelector(
    (state: IVideoask) => state.entities.applicants
  );
  const contacts = useSelector((state: IContactId) => state.entities.contacts);
  const { data: Category } = useGetCategoriesQuery("category");
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
  const { id } = useParams();

  useEffect(() => {
    async function handleUserInfo() {
      const contacts = await GetUserIdVideoask(id);
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
  }, [id]); //answers

  async function doSubmit() {
    if (id) {
      const commentsView = {
        contact_id: id,
        kommentar: body.kommentar,
        categoryId: stage,
      };
      try {
        await addComment(commentsView);
        toast.success("👍 Kommentar har lagts till", { theme: "dark" });
      } catch (error) {
        toast.error("👀 något gick fel.", { theme: "dark" });
      }
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await RemoveComment(id);
      toast.success("👍 Kommentar borttagen.", { theme: "dark" });
    } catch (error) {
      toast.error("👀 kunde inte radera!", { theme: "dark" });
    }
  };

  const handleRemoveProfile = async (id: string) => {
    try {
      toast.success(`👍 Användaren borttagen`, { theme: "dark" });
      window.setInterval(handleRefresh, 2000);
    } catch (error) {
      toast.error("👀 något gick fel.", { theme: "dark" });
    }
  };
  function handleRefresh() {
    window.location.href = "/dashboard";
  }

  console.log("redux comment", comments);
  return (
    <>
      {applicants.map((d: IVideoask) => {
        if (id === d.contact_id)
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
                    <Dropdown>
                      {renderInput("kommentar", "Kommentar...", "text")}
                      <select
                        onChange={(e) => setStage(e.target.value)}
                        value={stage}
                      >
                        <option value="" disabled={true}>
                          Välj Stage
                        </option>
                        {Category?.map((s: any) => (
                          <option key={s._id} value={s._id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      {renderButton("Spara")}
                    </Dropdown>
                  </form>
                </div>
                {comments?.map((c: any) => {
                  if (c.contact_id === id) {
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
  grid-template-columns: 32rem 42rem;
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
    }

    .form {
      form {
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
