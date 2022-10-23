import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { getAppplicants } from "../services/mockApplicants";
import { http } from "../services/httpService";
import { Sendmail } from "../services/emailService";
import applicantsContext from "../context/ApplicantsContext";
import DataContext from "../context/DataContext";
import EmailContext from "../context/EmailContext";
import IApplicant from "../types/IApplicant";
import { IVideoask } from "../types/IVideoAsk";
import { ISort } from "../types/ISort";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Pagination from "./common/Pagination";
import ApplicantsTable from "./ApplicantsTable";
import { Paginate } from "../utils/Paginate";
import SortContext from "../context/SortContext";
import _ from "lodash";
import { getAccessToken } from "../services/videoaskService";
import { IStatus } from "../types/IStatus";
import { getStatus } from "../services/mockStatus";

function Dashboard(): JSX.Element {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  let [data, setData] = useState<IVideoask[]>([]);
  const [status, setStatus] = useState<IStatus[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<IStatus>({
    _id: "",
    name: "Alla Ansökningar",
  });
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [pageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  let [selectedPage, setSelectedPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<ISort>({
    path: "skapad",
    order: "asc",
  });

  const handleToken = () => {
    let parameters = new URLSearchParams(window.location.search);
    const code = parameters.get("code");
    localStorage.setItem("code", code || "");
    getAccessToken(code);
  };

  const GetDataFromVideoask = async () => {
    const token = localStorage.getItem("access_token");
    const { data } = await http.get(
      "https://api.videoask.com/forms/5625efd6-e7e9-4b5c-ac78-f2a7b429e79c/contacts?limit=200&offset=0",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    try {
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleToken();
    GetDataFromVideoask();
    setApplicants(getAppplicants());
    setStatus(getStatus());
  }, []);

  //Denna är för att filtrera bort alla ansökningar utan namn
  data = data.filter((d) => d.name != null);

  //Denna är för att göra om datumet mer läsbart än det videoask skickar
  data.map((d) => (d.created_at = new Date(d.created_at).toLocaleString()));

  // Denna är till för att lägga till properties status. Den sätter var tredje ej antagen, techship School, techship programme
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

  console.log(data);

  const onSubmit = () => {
    Sendmail(checkEmail);
    console.log(checkEmail);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      // @ts-ignore
      setCheck([...checkEmail, value]);
    } else {
      setCheck(value);
    }
  };

  const handlePagePlus = () => {
    setSelectedPage(selectedPage + 1);
  };

  const handlePageMinus = () => {
    setSelectedPage(selectedPage - 1);
  };

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  const handleSelectStatus = (status: IStatus) => {
    setSelectedStatus(status);
    setSelectedPage(1);
  };

  let filteredData = selectedStatus._id
    ? data.filter((d) => d.stage._id === selectedStatus._id)
    : data;
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

  const allData: IVideoask[] = Paginate(sortedData, pageSize, selectedPage);

  return (
    <Container>
      <EmailContext.Provider value={{ checkEmail, onChange: handleChange }}>
        <DataContext.Provider value={allData}>
          <applicantsContext.Provider value={applicants}>
            <SortContext.Provider value={{ sortColumn, onSort: handleSort }}>
              <SidebarStyle>
                <Sidebar
                  status={status}
                  selectedStatus={selectedStatus}
                  onSelectStatus={handleSelectStatus}
                />
              </SidebarStyle>
              <Main>
                <Wrapper>
                  <button type="submit" onClick={() => onSubmit()}>
                    Send Email
                  </button>
                  <SearchBar value={searchQuery} onChange={handleSearch} />
                </Wrapper>
                <ApplicantsTable />
                <Pagination
                  itemCount={filteredData.length}
                  pageSize={pageSize}
                  selectedPage={selectedPage}
                  onPagePlus={handlePagePlus}
                  onPageMinus={handlePageMinus}
                />
              </Main>
            </SortContext.Provider>
          </applicantsContext.Provider>
        </DataContext.Provider>
      </EmailContext.Provider>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 58%;
  margin-left: 10%;

  @media (max-width: 600px) {
    width: auto;
    position: absolute;
    right: 0;
    top: 20%;
  }

  button {
    width: auto;
    padding: 12px;
    background-color: #58eac1;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
      background-color: #b9e7db;
    }

    @media (width < 600px) {
      width: auto;
      margin-right: 30px;
    }
  }
`;
