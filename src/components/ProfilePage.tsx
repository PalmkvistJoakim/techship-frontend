import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IContactId, IVideoask } from "../types/IVideoAsk";
import { GetUserIdVideoask } from "../services/videoaskService";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import VideoAsk from "../sveg/VideoAsk";

interface Props {
  data: IVideoask[];
}
function ProfilePage({ data }: Props) {
  const [UserInfo, setUserInfo] = useState<IContactId[]>([]);
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

  console.log(UserInfo);

  return (
    <>
      {data.map((d) => {
        if (params.id === d.contact_id)
          return (
            <Container>
              <Info>
                <Personal>
                  {d.name.toUpperCase()}, (ålder)
                  <br />
                  {d.created_at}
                  <br />
                  {d.email}
                  <br />
                  {d.phone_number}
                </Personal>
                <Stage>
                  {d.stage.name}
                  <button>Techship Programme</button>
                  <button>Techship School</button>
                  <button>Ej Antagen</button>
                </Stage>
                <Adress>Adress</Adress>
                <Comment>Kommentar av Aliya</Comment>
              </Info>
              {UserInfo.map((User) => (
                <>
                  <Media>
                    {User.media_url ? (
                      <ReactPlayer
                        url={User.media_url}
                        controls={true}
                        width="300px"
                      />
                    ) : (
                      <></>
                    )}
                    <button>
                      Till Profil
                      <VideoAsk />
                    </button>
                  </Media>
                  <Description>
                    {User.input_text ? <>{User.input_text}</> : null}
                  </Description>
                </>
              ))}
            </Container>
          );
      })}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 22rem 22rem;
  grid-template-columns: 29rem 29rem;
  grid-template-areas:
    "info media"
    "description media";
`;

const Info = styled.div`
  grid-area: info;
  display: grid;
  background-color: black;
  grid-template-columns: 14.5rem 14.5rem;
  grid-template-rows: 8rem 3rem 11rem;
  grid-template-areas:
    "personal stage"
    "adress stage"
    "comment comment";
`;

const Personal = styled.div`
  grid-area: personal;
  display: flex;
  align-items: center;
  border: solid #58eac1 1px;
  line-height: 18px;
  /* background-color: black; */
`;
const Stage = styled.div`
  grid-area: stage;
  border: solid #58eac1 1px;
  /* background-color: black; */

  button {
    width: 11rem;
    background-color: #58eac1;
    display: block;
    border: none;
    margin: 1.5rem;
    cursor: pointer;

    :hover {
      background-color: #b9e7db;
    }
  }
`;
const Adress = styled.div`
  grid-area: adress;
  border: solid #58eac1 1px;
  /* background-color: black; */
`;
const Comment = styled.div`
  grid-area: comment;
  font-size: large;
  display: flex;
  align-items: center;
  border: solid #58eac1 1px;
  /* background-color: black; */
`;

//Kolla med Aladin varför det kommer en ny flex varje gång man lägger till något nytt

const Media = styled.div`
  grid-area: media;
  justify-self: center;
  align-self: end;
  /* border: solid #58eac1 1px; */

  button {
    width: 18rem;
    background-color: #58eac1;
    margin: 3.5rem;
  }
`;

const Video = styled.div``;

const Description = styled.div`
  grid-area: description;
  background-color: black;
  font-size: small;
  display: flex;
  align-items: center;
  border: solid #58eac1 1px;
`;

export default ProfilePage;
