import _ from "lodash";
import styled from "styled-components";

interface Props {
  pageSize: number;
  selectedPage: number;
  itemCount: number;
  onPageMinus: () => void;
  onPagePlus: () => void;
}

function Pagination({
  pageSize,
  selectedPage,
  itemCount,
  onPageMinus,
  onPagePlus,
}: Props) {
  const pageCount = Math.ceil(itemCount / pageSize);
  console.log(itemCount);
  const pages = _.range(1, pageCount + 1);

  const leftArrow = "<<";
  const rightArrow = ">>";

  if (pageCount === 0) return <></>;

  return (
    <Ul>
      <Button disabled={selectedPage === 1} onClick={() => onPageMinus()}>
        {leftArrow}
      </Button>
      <Button>{selectedPage}</Button>
      <Button disabled={selectedPage == pageCount} onClick={() => onPagePlus()}>
        {rightArrow}
      </Button>
    </Ul>
  );
}

export default Pagination;

const Button = styled.button`
  cursor: pointer;
  background-color: #58eac1;
  margin: 3px;
  padding: 7px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
`;

const Ul = styled.ul`
  margin-left: 112px;
  margin-top: 6px;
`;
