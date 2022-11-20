import { useEffect } from "react";
import styled from "styled-components";
import { getAccessToken } from "../services/videoaskService";
import Main from "./Main";
import ProfilePage from "./ProfilePage";

function Dashboard(): JSX.Element {
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      getAccessToken(window.location.search);
      window.location.reload();
    }
  }, [token]);

  return (
    <Container>
      <MainGrid>
        <Main />
      </MainGrid>
      <ProfileGrid>
        <ProfilePage />
      </ProfileGrid>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: min(30rem) min(75rem);
  grid-template-areas: "main profilepage";
`;

const MainGrid = styled.div`
  grid-area: main;
`;

const ProfileGrid = styled.div`
  grid-area: profilepage;
`;
