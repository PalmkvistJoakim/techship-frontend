import { useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { IVideoask } from "../types/IVideoAsk";
import { ISort } from "../types/ISort";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import SortContext from "../context/SortContext";
import _ from "lodash";
import { getAccessToken } from "../services/videoaskService";
import { getStage } from "../services/mockStage";
import { IStage } from "../types/IStage";
import Main from "./Main";
import SearchContext from "../context/SearchContext";

interface Props {
  data: IVideoask[];
}

function Dashboard({ data }: Props): JSX.Element {
  const [stage, setStage] = useState<IStage[]>([]);
  const [selectedStage, setSelectedStage] = useState<IStage>({
    _id: "",
    name: "Alla Ansökningar",
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<ISort>({
    path: "created_at",
    order: "desc",
  });

  useEffect(() => {
    if (localStorage.getItem("access_token") === "Bearer null") {
      getAccessToken(window.location.search);
    }
    setStage(getStage());
  }, []);

  //Denna är för att filtrera bort alla ansökningar utan namn
  data = data.filter((d) => d.name != null);

  //Denna är för att göra om datumet mer läsbart än det videoask skickar
  data.map((d) => (d.created_at = new Date(d.created_at).toLocaleString()));

  // Denna är till för att lägga till properties stage. Den sätter var tredje ej antagen, techship School, techship programme. DEN SKA BORT NÄR VI KOPPLAT MOT DATABAS
  data.map((d) => {
    if (data.indexOf(d) % 4 === 0)
      d.stage = { _id: "5b21ca3eeb7f6fbccd471822", name: "Techship Programme" };
    if (data.indexOf(d) % 4 === 1)
      d.stage = { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej antagen" };
    if (data.indexOf(d) % 4 === 2)
      d.stage = { _id: "5b21ca3eeb7f6fbccd471826", name: "Techship School" };
    if (data.indexOf(d) % 4 === 3)
      d.stage = { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej antagen" };
  });

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  const handleSelectStage = (stage: IStage) => {
    setSelectedStage(stage);
  };

  let filteredData = selectedStage._id
    ? data.filter((d) => d.stage._id === selectedStage._id)
    : data;
  if (selectedStage.name === "Antagna") {
    filteredData = data.filter((d) => d.stage.name !== "Ej antagen");
  }
  if (searchQuery) {
    filteredData = data.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleSort = (sortColumn: ISort) => {
    setSortColumn({ path: sortColumn.path, order: sortColumn.order });
  };

  const sortedData = _.orderBy(
    filteredData,
    [sortColumn.path],
    [sortColumn.order]
  );

  return (
    <Container>
      <DataContext.Provider value={sortedData}>
        <SortContext.Provider
          value={{
            sortColumn,
            onSort: handleSort,
          }}
        >
          <SearchContext.Provider
            value={{ searchQuery, onChange: handleSearch }}
          >
            <SidebarGrid>
              <Sidebar
                filteredDataCount={filteredData.length}
                stage={stage}
                selectedStage={selectedStage}
                onSelectStage={handleSelectStage}
              />
            </SidebarGrid>
            <MainGrid>
              <Main />
            </MainGrid>
          </SearchContext.Provider>
        </SortContext.Provider>
      </DataContext.Provider>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: grid;
  grid-template-columns: min(21rem) min(28rem) min(57.5rem);
  grid-template-areas: "sidebar main profilepage";
`;

const SidebarGrid = styled.div`
  grid-area: sidebar;
  grid-template-columns: 1fr;
  display: grid;
  background-color: black;
  /* border: solid red 4px; */
  margin: 0%;
`;
const MainGrid = styled.div`
  grid-area: main;
  /* border: solid red 4px; */
  margin: 0%;
  background-color: black;
`;
