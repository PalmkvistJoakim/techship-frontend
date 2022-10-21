import { useEffect, useState } from "react";
import { getAppplicants } from "../services/fakeApplicantsService";
import IApplicant from "../types/IApplicant";
import Table from "../components/Table";
import applicantsContext from "../context/applicantsContext";

import Sidebar from "../components/Sidebar";
import SearchBar from "./SearchBar";
import styled from "styled-components";

function Items(): JSX.Element {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);

  useEffect(() => {
    setApplicants(getAppplicants());
  }, []);

  return (
    <Continer>
      <applicantsContext.Provider value={applicants}>
        <SidebarStyle>
          <Sidebar />
        </SidebarStyle>
        <Main>
          <Table />
        </Main>
      </applicantsContext.Provider>
    </Continer>
  );
}

export default Items;

const Continer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-areas:
    "sidebar main"
    "sidebar main ";
`;

const SidebarStyle = styled.div`
  grid-area: sidebar;
`;
const Main = styled.div`
  grid-area: main;
`;
