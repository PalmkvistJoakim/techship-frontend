import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IContactId, IVideoask } from "../types/IVideoAsk";
import {
  GenerateKomment,
  GetUserIdVideoask,
  GetkommentarById,
} from "../services/videoaskService";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useForm } from "../components/hooks/useForm";
import { IprofileAdd, StageType } from "../types/IStage";
import Joi from "joi";
import { http } from "../services/httpService";

interface Props {
  data: IVideoask[];
}

interface IKomment {
  _id: string;
  contact_id: string;
  createdAt: string;
  stage: string;
  kommentar: string;
}
const StageArray = ["APPLIED", "TECHSHIP_SCHOOL", "TECHSHIP_PROGRAMME"];

const schema = Joi.object({
  kommentar: Joi.string().label("Kommentar"),
});
function ProfilePage({ data }: Props) {
  const [UserInfo, setUserInfo] = useState<IContactId[]>([]);
  const [stage, setStage] = useState<string>(StageType.applied);
  const [comment, setComment] = useState<IKomment[]>([]);
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
    const handleUserInfo = async () => {
      try {
        setUserInfo(await GetUserIdVideoask(params.id));
      } catch (error) {
        console.log(error);
      }
    };
    handleUserInfo();
  }, [params.id]);

  useEffect(() => {
    const fetchComment = async () => {
      if (params.id) {
        setComment(await GetkommentarById());
      }
    };
    fetchComment();
  }, [params.id]);

  async function doSubmit() {
    if (params.id) {
      try {
        await GenerateKomment(params.id, body.kommentar, stage);
        window.location.reload();
      } catch (error) {
        console.log("couldnt add kommentar", error);
      }
    }
  }

  const handleDelete = async (id: string) => {
    const OrignalPost = [...comment];
    const Comment = comment.filter((c) => c._id !== id);
    setComment(Comment);

    try {
      await http.delete(`http://localhost:5000/api/application/${id}`);
    } catch (error) {
      setComment(OrignalPost);
    }
  };

  console.log(UserInfo);

  return (
    <>
      {data.map((d) => {
        if (params.id === d.contact_id)
          return (
            <Continer>
              <Userinfo
                status={d.status === "completed" ? "completed" : "dropped_out"}
              >
                <div>
                  {comment.map((c) => {
                    if (c.contact_id === params.id) {
                      return (
                        <CommentStyle>
                          <div>
                            {c.kommentar}{" "}
                            <Icon
                              className="fa-solid fa-delete-left"
                              onClick={() => handleDelete(c._id)}
                            />
                          </div>

                          <div> {c.stage} </div>
                        </CommentStyle>
                      );
                    }
                  })}
                </div>
                <h1>{d.name.toUpperCase()}</h1>
                <p> {d.created_at}</p>
                <p className="email">{d.email}</p>
                <p>{d.phone_number}</p>
                <p className="status">{d.status.toUpperCase()}</p>
                <Dropdown>
                  <select onChange={(e) => setStage(e.target.value)}>
                    <option value="" disabled={true}>
                      Välj Stage
                    </option>
                    {StageArray.map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Dropdown>
              </Userinfo>
              <Sidebar>
                {UserInfo.map((User) => (
                  <>
                    <div>
                      {User.media_url ? (
                        <ReactPlayer
                          url={User.media_url}
                          controls={true}
                          width="300px"
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <Question>
                      <ul>
                        <li> {User.input_text}</li>
                      </ul>
                    </Question>
                  </>
                ))}
                <div className="form">
                  <form onSubmit={handleSubmit(doSubmit)}>
                    {renderInput(
                      "kommentar",
                      "Fyll i ditt kommentar",
                      "kommentar...",
                      "text"
                    )}
                    {renderButton("Spara")}
                  </form>
                </div>
              </Sidebar>
            </Continer>
          );
      })}
    </>
  );
}

export default ProfilePage;

interface StausColor {
  status: "dropped_out" | "idle" | "completed";
}

const Continer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas:
    "userinfo sidebar sidebar"
    "userinfo sidebar sidebar ";
`;
const Userinfo = styled.div<StausColor>`
  grid-area: userinfo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  list-style: none;
  font-weight: bold;
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
  }
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  height: 100vh;

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
`;

const Question = styled.div`
  ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    margin-right: 20px;
    justify-content: space-between;
    font-weight: bold;

    li {
      margin-top: 5rem;
      font-size: 1.3rem;
    }
  }
`;

const Dropdown = styled.div`
  select {
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
`;
