import styled from "styled-components";

function TableHeader() {
  return (
    <thead>
      <Tr>
        <ThNumber>#</ThNumber>
        <Th>Namn</Th>
        <ThAge>Ålder</ThAge>
        <Th>Status</Th>
        <Th>Notis</Th>
        <th></th>
      </Tr>
    </thead>
  );
}

const Th = styled.th`
  text-align: left;
  margin: 2px;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-collapse: collapse;
  border: 1px solid;
`;

const ThAge = styled.th`
  text-align: left;
  margin-left: 42px;
`;

const ThNumber = styled.th`
  text-align: left;
  margin-left: 8px;
`;

export default TableHeader;
