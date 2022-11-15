import { useContext } from "react";
import styled from "styled-components";
import SortContext from "../../context/SortContext";
import { ISorts } from "../../types/ISort";
import { IVideoask } from "../../types/IVideoAsk";

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
    if (sortColumn.order === "desc")
      return (
        <Button onClick={() => raiseSort(sortColumn.path)}>
          Sort
          <I className="fa-solid fa-arrow-down" />
        </Button>
      );
    return (
      <Button onClick={() => raiseSort(sortColumn.path)}>
        Sort
        <I className="fa-solid fa-arrow-up" />
      </Button>
    );
  };

  return (
    <Span>
      <span>{renderSortIcon()} </span>
    </Span>
  );
}

export default TableHeader;

const I = styled.i`
  font-size: medium;
  margin-left: 5px;
`;

const Span = styled.span`
  display: flex;
  justify-content: end;
  align-self: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  font-weight: bold;
  padding: 0.8rem;
  border-radius: 2rem;
  background-color: #58eac1;
  transition: width 2s;

  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.8);
  }
`;
