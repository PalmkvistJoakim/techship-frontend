import { useContext } from "react";
import styled from "styled-components";
import SortContext from "../../context/SortContext";
import { ISorts } from "../../types/ISort";
import { IColumns } from "../ApplicantsTable";

interface Props {
  columns: IColumns[];
}

function TableHeader({ columns }: Props) {
  console.log("columns", columns);
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

  const renderSortIcon = (column: IColumns) => {
    if (sortColumn.path !== column.path) return null;

    if (sortColumn.order === "asc")
      return <i className="fa-solid fa-sort-down" />;

    return <i className="fa-solid fa-sort-up" />;
  };

  return (
    <thead>
      <Tr>
        {columns.map((column) => (
          <Th key={column.path} onClick={() => raiseSort(column.path)}>
            {column.label} {renderSortIcon(column)}
          </Th>
        ))}
      </Tr>
    </thead>
  );
}

const Th = styled.th`
  text-align: left;
  margin: 2px;
  padding: 4px;
  margin-left: 6px;
  cursor: pointer;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-columns: 36px 36px 244px 248px 184px 178px;
  border-collapse: collapse;
  border: 1px solid;
`;

export default TableHeader;
