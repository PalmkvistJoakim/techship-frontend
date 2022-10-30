import path from "path";
import { useContext } from "react";
import styled from "styled-components";
import SortContext from "../../context/SortContext";
import { ISort, ISorts } from "../../types/ISort";
import { IColumns } from "../ApplicantsTable";

const columns: string[] = [
  "email",
  "comment",
  "name",
  "stage.name",
  "created_at",
  "status",
];

function TableHeader() {
  const { sortColumn, onSort, onSortOrder } = useContext(SortContext) as ISorts;

  const raiseSort = (path: string) => {
    if (sortColumn.path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = sortColumn.path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  // const renderSortIcon = () => {
  //   class = sortColumn.order === "asc" ? (
  //     <i onClick={() => onSortOrder("desc")} className="fa-solid fa-sort-up" />
  //   ) : (
  //     <i onClick={() => onSortOrder("asc")} className="fa-solid fa-sort-down" />
  //   );}

  // if (sortColumn.order === "desc")
  //   return (
  //     <i
  //       onClick={() => onSortOrder("asc")}
  //       className="fa-solid fa-sort-down"
  //     />
  //   );
  // if (sortColumn.order === "asc")
  //   return (
  //     <i
  //       onClick={() => onSortOrder("desc")}
  //       className="fa-solid fa-sort-up"
  //     />
  //   );

  return (
    <>
      <select onChange={(e) => raiseSort(e.target.value)}>
        {columns.map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>
      {/* {renderSortIcon()} */}
    </>
  );
}

export default TableHeader;

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
