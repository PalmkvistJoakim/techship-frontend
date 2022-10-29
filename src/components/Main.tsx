import ApplicantsTable from "./ApplicantsTable";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Sendmail } from "../services/emailService";
import EmailContext from "../context/EmailContext";

function Main() {
  const [checkEmail, setCheck] = useState<string | string[]>("");

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

  return (
    <EmailContext.Provider value={{ onChange: handleChange }}>
      <div>
        <SearchBar />
        <button type="submit" onClick={() => onSubmit()}>
          Sänd Mejl
        </button>
        <ApplicantsTable />
      </div>
    </EmailContext.Provider>
  );
}

export default Main;

const Container = styled.div`
  display: grid;
  grid-template-areas: "searchbar" "sendemailsort" "table";
  grid-template-rows: 10% 10% 10% 10% 60%;
`;
