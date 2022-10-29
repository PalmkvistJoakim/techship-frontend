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

  // toogla på ikonerna. Sätt ett NamedNodeMap. Sedan ha en handler som gör en onKlick som sätter samma path, men sätter en annan order

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
