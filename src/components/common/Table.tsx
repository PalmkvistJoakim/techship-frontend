import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styled from "styled-components";

function Table() {
  return (
    <TableCSS>
      <TableHeader />
      <TableBody />
    </TableCSS>
  );
}

export default Table;

const TableCSS = styled.table`
  background-color: white;
  color: black;
  border-collapse: collapse;
  border: 1px solid white;
  margin-left: 10%;

  @media (max-width: 600px) {
    width: auto;
    margin-right: 30px;
  }
`;
