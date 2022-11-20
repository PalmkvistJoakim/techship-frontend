import { useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import {
  getAccessToken,
  GetDataFromVideoask,
} from "../services/videoaskService";
import Main from "./Main";
import { useDispatch } from "react-redux";
import { loadApplicant } from "../store/applicant";
import ProfilePage from "./ProfilePage";

function Dashboard(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      getAccessToken(window.location.search);
    }
    async function runLoadApplicant() {
      const form = localStorage.getItem("form");
      if (form) {
        const applicants = await GetDataFromVideoask(form);
        dispatch(loadApplicant(applicants));
      }
    }

    runLoadApplicant();
  }, []);

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
