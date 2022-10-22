import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { getAppplicants } from "../services/fakeApplicantsService";
import { http } from "../services/httpService";
import { Sendmail } from "../services/emailService";
import applicantsContext from "../context/ApplicantsContext";
import DataContext from "../context/DataContext";
import EmailContext from "../context/EmailContext";
import IApplicant from "../types/IApplicant";
import { IVideoask } from "../types/IVideoAsk";
import { ISort, ISorts } from "../types/ISort";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Pagination from "./common/Pagination";
import ApplicantsTable from "./ApplicantsTable";
import { Paginate } from "../utils/Paginate";
import SortContext from "../context/SortContext";
import _ from "lodash";

function Dashboard(): JSX.Element {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  let [data, setData] = useState<IVideoask[]>([]);
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  let [selectedPage, setSelectedPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<ISort>({
    path: "skapad",
    order: "asc",
  });

  useEffect(() => {
    setApplicants(getAppplicants());

    const getData = async () => {
      const { data } = await http.get("http://localhost:5000/api/videoask");
      setData(data.results);
    };
    getData();
  }, []);

  data = data.filter((d) => d.name != null);

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

  //
  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (sortColumn: ISort) => {
    setSortColumn({ path: sortColumn.path, order: sortColumn.order });
  };

  const sortedData = _.orderBy(data, [sortColumn.path], [sortColumn.order]);

  const allData: IVideoask[] = Paginate(sortedData, pageSize, selectedPage);

  return (
    <Container>
      <EmailContext.Provider value={{ checkEmail, onChange: handleChange }}>
        <DataContext.Provider value={allData}>
          <applicantsContext.Provider value={applicants}>
            <SortContext.Provider value={{ sortColumn, onSort: handleSort }}>
              <SidebarStyle>
                <Sidebar />
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
                  itemCount={data.length}
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
