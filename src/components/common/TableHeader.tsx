import path from "path";
import { useContext } from "react";
import { ScrollRestoration } from "react-router-dom";
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
    <span>
      <select onChange={(e) => raiseSort(e.target.value)}>
        <option>created_at</option>
        {columns.map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>
      <span> {renderSortIcon()} </span>
    </span>
  );
}

export default TableHeader;
<<<<<<< HEAD

// const renderAndRaiseSortIcon = () => {
//   if (sortColumn.path === "Sortera...") return null;
//   if (sortColumn.order === "desc")
//     return (
//       <i
//         onClick={() => onSortOrder("asc")}
//         className="fa-solid fa-sort-down"
//       />
//     );
//   if (sortColumn.order === "asc")
//     return (
//       <i
//         onClick={() => onSortOrder("desc")}
//         className="fa-solid fa-sort-up"
//       />
//     );
// };

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

const I = styled.i`
  font-size: medium;
  margin-top: 1rem;
`;
=======
>>>>>>> 847c623b713dc8d17945c83dd37fdd2b5db325e2
