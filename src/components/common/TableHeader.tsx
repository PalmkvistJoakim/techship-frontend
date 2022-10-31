import { useContext } from "react";
import { ScrollRestoration } from "react-router-dom";
import styled from "styled-components";
import SortContext from "../../context/SortContext";
import { ISort, ISorts } from "../../types/ISort";

const columns: string[] = [
  "email",
  "comment",
  "name",
  "stage.name",
  "created_at",
  "status",
];

function TableHeader() {
  const { sortColumn, onSort } = useContext(SortContext) as ISorts;

  const raiseSort = (path: string) => {
    sortColumn.path = path;
    if (sortColumn.order === "desc") {
      sortColumn.order = "asc";
    } else {
      sortColumn.order = "desc";
    }
    onSort(sortColumn);
  };

  const renderSortIcon = () => {
    if (sortColumn.order === "asc")
      return (
        <I
          onClick={() => raiseSort(sortColumn.path)}
          className="fa-solid fa-arrow-down"
        />
      );
    return (
      <I
        onClick={() => raiseSort(sortColumn.path)}
        className="fa-solid fa-arrow-up"
      />
    );
  };

  return (
    <Span>
      <Select onChange={(e) => raiseSort(e.target.value)}>
        <option>created_at</option>
        {columns.map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </Select>
      <span> {renderSortIcon()} </span>
    </Span>
  );
}

export default TableHeader;

const I = styled.i`
  font-size: medium;
  margin-left: 3px;
`;

const Select = styled.select`
  background-color: #58eac1;
`;

const Span = styled.span`
  display: flex;
  justify-content: end;
  margin-right: 15px;
  padding: 18px;
  align-self: center;
`;
