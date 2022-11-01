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
    const value = e.target.value + ";";
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
        <SendMail href="mailto:nazih@intensivecode.se;aliya@gmail.com?subject=Kontaktformulär - En fråga till er!">
          Sänd mejl
        </SendMail>
        <TableHeader />
        <TableBody />
      </EmailContext.Provider>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1rem 2rem 2rem;
  grid-template-areas:
    "searchbar"
    "mail sort"
    "list";
`;

const SendMail = styled.a`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #58eac1;
  border: solid black 4px;
  border-radius: 1rem;
  width: 6rem;
  height: 2rem;
  padding: 2px;
  margin-top: 1.8rem;
  font-size: larger;
  font-weight: bolder;
  color: black;
  text-decoration: none;
  justify-content: center;
  @media (width < 600px) {
    width: auto;
    margin-right: 30px;
  }
`;
