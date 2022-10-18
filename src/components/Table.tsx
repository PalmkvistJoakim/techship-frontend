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
    <>
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
    </>
  );
}

export default Table;

const TableCSS = styled.table`
  position: absolute;
  background-color: white;
  color: black;
  top: 300px;
  left: 280px;
  border-collapse: collapse;
  border: 1px solid white;
`;

const Warrper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 60%;
  right: 26%;
  top: 27%;

  button {
    width: 150px;
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
