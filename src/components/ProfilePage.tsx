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
              <PageHeader>
                <div>
                  <h1> {d.name.toUpperCase()} </h1>
                </div>
                <p>notis</p>
                <p>{d.status}</p>
              </PageHeader>
              {UserInfo.map((User) => (
                <>
                  <MainPage>
                    <Description>
                      <h3>Svar</h3>
                      <ol>
                        {User.input_text ? (
                          <>
                            <ol>{User.input_text}</ol>
                          </>
                        ) : null}
                      </ol>
                    </Description>
                    {User.thumbnail ? (
                      <>
                        <img src={User.thumbnail} alt="profil" />
                      </>
                    ) : (
                      //den går inte att sättas condistional för default profiler :/ måste fixas.
                      <img
                        src={"../img/profilbild.jpg"}
                        style={{ borderRadius: "50%" }}
                        alt="profil"
                      />
                    )}
                  </MainPage>
                  <Main>
                    <ContactDetails>
                      <h4>E-post:</h4>
                      <p>{d.email}</p>
                      <h4>Telefonnummer:</h4>
                      <p>{d.phone_number}</p>

                      {User.media_url ? (
                        <>
                          <ReactPlayer
                            url={User.media_url}
                            controls={true}
                            width="200px"
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </ContactDetails>
                  </Main>
                </>
              ))}
            </Container>
          );
      })}
    </>
  );
}

const Container = styled.div`
  margin: 10%;
  margin-left: 25%;
  margin-top: 3%;
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "head   headRight"
    "main   right";
  height: 100vh;
`;

const PageHeader = styled.div`
  grid-area: head;
  position: relative;
  /* display: flex;
  flex-direction: column; */
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 20px;
    }

    img {
      display: none;
    }
  }

  h1 {
    text-align: left;
    margin-left: 16%;
    margin-top: 25px;
  }

  p {
    text-align: left;
    margin-left: 16%;
    margin-right: 35%;
    margin-top: 2%;
    margin-bottom: 2%;
    border: 2px solid #40daae;
    border-radius: 10px;
    padding: 8px;
    justify-content: right;
  }
`;

//Kolla med Aladin varför det kommer en ny flex varje gång man lägger till något nytt

const MainPage = styled.div`
  grid-area: main;
  background-color: black;

  img {
    position: absolute;
    clip-path: circle(40.4% at 50% 50%);
    width: 12rem;
    height: 9rem;
    top: 15%;
    left: 22%;
    justify-content: right;
  }

  p {
    color: white;
  }
`;

const Description = styled.div`
  margin: 70px;

  h3 {
    margin-bottom: 10px;
  }
`;

const Main = styled.div`
  grid-area: right;

  h4 {
    margin-top: 10%;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 20%;
  }
`;

const ContactDetails = styled.div`
  margin: 20%;
  margin-top: 38%;
`;

export default ProfilePage;
