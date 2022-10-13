import { useEffect, useState } from "react";
import { getAppplicants } from "./services/fakeApplicantsService";
import IApplicant from "./types/IApplicant";
import Table from "./components/Table";
import applicantsContext from "./context/ApplicantsContext";

function Items() {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);

  useEffect(() => {
    setApplicants(getAppplicants());
  }, []);

  return (
    <>
      <applicantsContext.Provider value={applicants}>
        <Table />
      </applicantsContext.Provider>
    </>
  );
}

export default Items;
