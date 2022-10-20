import styled from "styled-components";

function TableHeader() {
  return (
    <thead>
      <Tr>
        <ThNumber>#</ThNumber>
        <Th>Namn</Th>
        <ThAge>Tel</ThAge>
        <Th>Created</Th>
        <Th>Notis</Th>
        <Th> Email</Th>
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
  grid-template-columns: repeat(6, 1fr);
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
