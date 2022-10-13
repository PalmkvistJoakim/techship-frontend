import TableBody from "./common/TableBody";
import TableHeader from "./common/TableHeader";
import styled from "styled-components";
import { useContext } from "react";
import IApplicant from "../types/IApplicant";
import applicantsContext from "../context/ApplicantsContext";

function Table() {
  const applicants = useContext(applicantsContext) as IApplicant[];

  return (
    <>
      <TableCSS>
        <TableHeader />
        <TableBody />
      </TableCSS>
    </>
  );
}

export default Table;

const TableCSS = styled.table`
  position: absolute;
  top: 200px;
  left: 400px;
  border-collapse: collapse;
  border: 1px solid;
`;
