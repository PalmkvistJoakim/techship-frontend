import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Sendmail } from "../services/emailService";
import EmailContext from "../context/EmailContext";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";

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
    <Container>
      <EmailContext.Provider value={{ onChange: handleChange }}>
        <SearchBar />
        <Button type="submit" onClick={() => onSubmit()}>
          Sänd Mejl
        </Button>
        <TableHeader />
        <TableBody />
      </EmailContext.Provider>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: grid;
  grid-template-rows: 2rem 4rem 5rem;
  grid-template-areas:
    "searchbar"
    "mail sort"
    "list";
`;

const Button = styled.button`
  background-color: #58eac1;
  width: 5rem;
  padding: 4px;

  @media (width < 600px) {
    width: auto;
    margin-right: 30px;
  }
`;
