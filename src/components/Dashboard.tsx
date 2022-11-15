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
    if (localStorage.getItem("access_token") === "Bearer null") {
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
  }, [selectedStage._id === ""]);

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
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: grid;
  grid-template-columns: min(28rem) min(57.5rem);
  grid-template-areas: "main profilepage";
`;

const MainGrid = styled.div`
  grid-area: main;
  /* border: solid red 4px; */
  margin: 0%;
  background-color: black;
`;

// //Denna är för att filtrera bort alla ansökningar utan namn
// applicants = applicants.filter((d: any) => d.name != null);

// //Denna är för att göra om datumet mer läsbart än det videoask skickar
// applicants.map(
//   (d: any) => (d.created_at = new Date(d.created_at).toLocaleString())
// );

// // Denna är till för att lägga till properties stage. Den sätter var tredje ej antagen, techship School, techship programme. DEN SKA BORT NÄR VI KOPPLAT MOT DATABAS
// applicants.map((d: any) => {
//   if (applicants.indexOf(d) % 4 === 0)
//     d.stage = { _id: "5b21ca3eeb7f6fbccd471822", name: "Techship Programme" };
//   if (applicants.indexOf(d) % 4 === 1)
//     d.stage = { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej antagen" };
//   if (applicants.indexOf(d) % 4 === 2)
//     d.stage = { _id: "5b21ca3eeb7f6fbccd471826", name: "Techship School" };
//   if (applicants.indexOf(d) % 4 === 3)
//     d.stage = { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej antagen" };
// });

// let [...filteredData] = selectedStage._id
//   ? applicants.filter((d: any) => d.stage._id === selectedStage._id)
//   : applicants;
// if (selectedStage.name === "Antagna") {
//   filteredData = applicants.filter((d: any) => d.stage.name !== "Ej antagen");
// }
