import styled from "styled-components";

function SearchBar() {
  return (
    <div className="search">
      <Input type="text" placeholder="Sök efter namn?" />
    </div>
  );
}

export default SearchBar;

const Input = styled.input`
  left: 280px;
  top: 260px;
  padding-right: 772px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
