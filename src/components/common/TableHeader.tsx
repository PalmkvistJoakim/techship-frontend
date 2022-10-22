import { useContext } from "react";
import styled from "styled-components";
import SortContext from "../../context/SortContext";
import { ISorts } from "../../types/ISort";

function TableHeader() {
  const { sortColumn, onSort } = useContext(SortContext) as ISorts;

  const raiseSort = (path: string) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "desc" ? "asc" : "desc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  return (
    <thead>
      <Tr>
        <ThMail>
          <i className="fa-solid fa-envelope" />
        </ThMail>
        <Th onClick={() => raiseSort("name")}>Namn</Th>
        <ThAge onClick={() => raiseSort("kommentar")}>Kommentar</ThAge>
        <Th onClick={() => raiseSort("created_at")}>Skapad</Th>
        <Th onClick={() => raiseSort("status")}>Status</Th>
      </Tr>
    </thead>
  );
}

const Th = styled.th`
  text-align: left;
  margin: 2px;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-collapse: collapse;
  border: 1px solid;
`;

const ThAge = styled.th`
  text-align: left;
  margin-left: 42px;
`;

const ThMail = styled.th`
  text-align: left;
  margin-left: 8px;
`;

export default TableHeader;
