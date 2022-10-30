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
