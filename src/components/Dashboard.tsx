import { useEffect, useState } from "react";
import { getAppplicants } from "../services/fakeApplicantsService";
import IApplicant from "../types/IApplicant";
import Table from "../components/Table";
import applicantsContext from "../Context/ApplicantsContext";
import Sidebar from "../components/Sidebar";
import SearchBar from "./SearchBar";

function Items(): JSX.Element {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);

  useEffect(() => {
    setApplicants(getAppplicants());
  }, []);

  return (
    <>
      <applicantsContext.Provider value={applicants}>
        <Sidebar />
        <Table />
        <SearchBar />
      </applicantsContext.Provider>
    </>
  );
}

export default Items;
