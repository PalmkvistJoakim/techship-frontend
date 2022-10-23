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
        <Th onClick={() => raiseSort("email")}>
          <i className="fa-solid fa-envelope" />
        </Th>
        <Th onClick={() => raiseSort("kommentar")}>
          <i className="fa-solid fa-comments" />
        </Th>
        <Th onClick={() => raiseSort("name")}>Namn</Th>
        <Th onClick={() => raiseSort("status")}>Status</Th>
        <Th onClick={() => raiseSort("created_at")}>Skapad</Th>
      </Tr>
    </thead>
  );
}

const Th = styled.th`
  text-align: left;
  margin: 2px;
  padding: 2px;
  margin-left: 6px;
  cursor: pointer;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-columns: 36px 36px 244px 248px 184px;
  border-collapse: collapse;
  border: 1px solid;
`;

export default TableHeader;
