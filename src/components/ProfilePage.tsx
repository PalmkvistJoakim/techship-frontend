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

  return <Container></Container>;
}

const Container = styled.div``;

const PageHeader = styled.div``;

//Kolla med Aladin varför det kommer en ny flex varje gång man lägger till något nytt

const MainPage = styled.div``;

const Description = styled.div``;

const Main = styled.div``;

const ContactDetails = styled.div``;

export default ProfilePage;

// return (
//   <>
//     {data.map((d) => {
//       if (params.id === d.contact_id)
//         return (
//           <Container>
//             <PageHeader>
//               <div>
//                 <h1> {d.name.toUpperCase()} </h1>
//               </div>
//               <p>notis</p>
//               <p>{d.status}</p>
//             </PageHeader>
//             {UserInfo.map((User) => (
//               <>
//                 <MainPage>
//                   <Description>
//                     <h3>Svar</h3>
//                     <ol>
//                       {User.input_text ? (
//                         <>
//                           <ol>{User.input_text}</ol>
//                         </>
//                       ) : null}
//                     </ol>
//                   </Description>
//                   {User.thumbnail ? (
//                     <>
//                       <img src={User.thumbnail} alt="profil" />
//                     </>
//                   ) : (
//                     //den går inte att sättas condistional för default profiler :/ måste fixas.
//                     <img
//                       src={"../img/profilbild.jpg"}
//                       style={{ borderRadius: "50%" }}
//                       alt="profil"
//                     />
//                   )}
//                 </MainPage>
//                 <Main>
//                   <ContactDetails>
//                     <h4>E-post:</h4>
//                     <p>{d.email}</p>
//                     <h4>Telefonnummer:</h4>
//                     <p>{d.phone_number}</p>

//                     {User.media_url ? (
//                       <>
//                         <ReactPlayer
//                           url={User.media_url}
//                           controls={true}
//                           width="200px"
//                         />
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                   </ContactDetails>
//                 </Main>
//               </>
//             ))}
//           </Container>
//         );
//     })}
//   </>
// )
