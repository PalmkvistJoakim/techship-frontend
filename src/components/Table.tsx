import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";
import styled from "styled-components";
import { Sendmail } from "../services/emailService";
import { useState } from "react";
import SearchBar from "./SearchBar";

function Table(): JSX.Element {
  const [checkEmail, setCheck] = useState<string | string[]>("");

  const onSubmit = () => {
    Sendmail(checkEmail);
    console.log(checkEmail);
  };

  return (
    <Container>
      <Warrper>
        <button type="submit" onClick={() => onSubmit()}>
          Send Email
        </button>
        <SearchBar />
      </Warrper>
      <TableCSS>
        <TableHeader />
        <TableBody setCheck={setCheck} checkEmail={checkEmail} />
      </TableCSS>
    </Container>
  );
}

export default Table;

const Container = styled.div`
  margin-top: 5%;
`;

const TableCSS = styled.table`
  background-color: white;
  color: black;
  top: 300px;
  left: 280px;
  border-collapse: collapse;
  border: 1px solid white;
  margin-left: 20%;
`;

const Warrper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 58%;
  border: 2px solid white;
  margin-left: 20%;

  @media (max-width: 1280) {
    width: 100%;
  }

  button {
    width: 120px;
    padding: 12px;
    /* right: 27%;
  top: 27%; */
    background-color: #58eac1;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;

    :hover {
      background-color: #b9e7db;
    }
  }
`;
