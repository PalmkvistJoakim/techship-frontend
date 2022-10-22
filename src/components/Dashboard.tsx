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
import styled from "styled-components";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Pagination from "./common/Pagination";
import ApplicantsTable from "./ApplicantsTable";
import { Paginate } from "../utils/Paginate";

function Dashboard(): JSX.Element {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  let [data, setData] = useState<IVideoask[]>([]);
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [pageSize, setPageSize] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const filteredData = data.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const allData: IVideoask[] = Paginate(filteredData, pageSize, selectedPage);

  return (
    <Container>
      <EmailContext.Provider value={{ checkEmail, onChange: handleChange }}>
        <DataContext.Provider value={allData}>
          <applicantsContext.Provider value={applicants}>
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
