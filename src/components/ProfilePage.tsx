import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IContactId, IVideoask } from "../types/IVideoAsk";
import { GetUserIdVideoask } from "../services/videoaskService";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

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
                  Länk <br />
                  {d.name.toUpperCase()}, Ålder
                  <br />
                  {d.created_at}
                  <br />
                  {d.email}
                  <br />
                  {d.phone_number}
                </Personal>
                <Stage>{d.stage.name}</Stage>
                <Adress>Adress</Adress>
                <Comment>Kommentar</Comment>
              </Info>
              {UserInfo.map((User) => (
                <>
                  <Media>
                    {User.media_url ? (
                      <ReactPlayer
                        url={User.media_url}
                        controls={true}
                        width="200px"
                      />
                    ) : (
                      <></>
                    )}
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
  grid-template-columns: 28.5rem 28.5rem;
  grid-template-areas:
    "info media"
    "description description";
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
  background-color: black;
`;
const Stage = styled.div`
  grid-area: stage;
  background-color: black;
`;
const Adress = styled.div`
  grid-area: adress;
  background-color: black;
`;
const Comment = styled.div`
  grid-area: comment;
  background-color: black;
`;

//Kolla med Aladin varför det kommer en ny flex varje gång man lägger till något nytt

const Media = styled.div`
  grid-area: media;
  background-color: black;
`;

const Description = styled.div`
  grid-area: description;
  background-color: black;
`;

const Main = styled.div``;

const ContactDetails = styled.div``;

export default ProfilePage;
