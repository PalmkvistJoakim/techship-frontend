import path from "path";
import { useContext } from "react";
import styled from "styled-components";
import SortContext from "../../context/SortContext";
import { ISort, ISorts } from "../../types/ISort";
import { IColumns } from "../ApplicantsTable";

interface Props {
  columns: IColumns[];
}

function TableHeader({ columns }: Props) {
  const { sortColumn, onSort } = useContext(SortContext) as ISorts;

  const raiseSort = (sortColumn: ISort) => {
    if (sortColumn.path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = sortColumn.path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  // const renderSortIcon = () => {
  //   if (sortColumn.order === "asc")
  //     return <i className="fa-solid fa-sort-down" />;

  //   return <i className="fa-solid fa-sort-up" />;
  // };

  return (
    <>
      <select
        onChange={(e) =>
          raiseSort({
            path: e.target.value,
            order: sortColumn.order,
          })
        }
      >
        {columns.map((column) => (
          <option key={column.path} value={column.path}>
            {column.path}
          </option>
        ))}
      </select>
      <i
        onClick={() =>
          raiseSort({
            path: sortColumn.path,
            order: "desc",
          })
        }
        className="fa-solid fa-sort-down"
      />
      <i
        onClick={() =>
          raiseSort({
            path: sortColumn.path,
            order: "asc",
          })
        }
        className="fa-solid fa-sort-up"
      />
    </>
  );
}

export default TableHeader;
