import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";
import styled from "styled-components";

function Table() {
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
  background-color: white;
  color: black;
  top: 300px;
  left: 400px;
  border-collapse: collapse;
  border: 1px solid white;
`;
