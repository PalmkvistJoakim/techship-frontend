import { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import {
  getAccessToken,
  GetallFormVideoask,
  GetDataFromVideoask,
} from "../services/videoaskService";
import { IStage } from "../types/IStage";
import Main from "./Main";
import { Getkommentar } from "../services/videoaskService";
import { useDispatch, useSelector } from "react-redux";
import { loadApplicant, listGroupApplicant } from "../store/applicant";
import { loadForm } from "../store/formvideoask";
import { loadComment } from "../store/comment";
import { loadStage } from "../store/stage";
import { IKomment, IVideoask } from "../types/IVideoAsk";
import { getCategoryStage } from "../services/categoryService";
import MailForm from "./MailForm";
import ProfilePage from "./ProfilePage";

function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  let ApplicationsFromDb = useSelector(
    (state: IKomment) => state.entities.comments
  );
  let applicants = useSelector((state: IVideoask) => state.entities.applicants);
  const [selectedStage, setSelectedStage] = useState<IStage>({
    _id: "",
    name: "Alla Ansökningar",
  });

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

    async function runLoadStage() {
      const stage = await getCategoryStage();
      dispatch(loadStage(stage));
    }

    async function runLoadComment() {
      const comments = await Getkommentar();
      dispatch(loadComment(comments));
    }

    runLoadComment();
    runLoadApplicant();
    runLoadStage();
  }, []);

  const handleSelectStage = (stage: IStage) => {
    setSelectedStage(stage);
  };

  if (selectedStage._id) {
    const stage = selectedStage.name;
    dispatch(listGroupApplicant({ stage, ApplicationsFromDb }));
  }
  console.log("applicants", applicants);
  console.log("stage", selectedStage.name);

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
  grid-template-columns: min(38rem) min(68rem);
  grid-template-areas: "main profilepage";
`;

const MainGrid = styled.div`
  grid-area: main;
  /* border: solid red 4px; */
`;

const ProfileGrid = styled.div`
  grid-area: profilepage;
`;
