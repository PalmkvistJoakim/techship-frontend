import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styled from "styled-components";
import { IColumns } from "../ApplicantsTable";

interface Props {
  columns: IColumns[];
}

function Table({ columns }: Props) {
  return (
    <TableCSS>
      <TableHeader columns={columns} />
      <TableBody columns={columns} />
    </TableCSS>
  );
}

export default Table;

const TableCSS = styled.table`
  background-color: #2c2c2c79;
  color: white;
  font-weight: bold;
  border-collapse: collapse;
  border: 1px solid white;
  margin-left: 10%;

  @media (max-width: 600px) {
    width: auto;
    margin-right: 30px;
  }
`;
