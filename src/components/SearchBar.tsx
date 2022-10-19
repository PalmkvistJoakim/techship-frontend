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
  width: 180px;
  padding: 5px;
  border: none;
  border-radius: 20px;
`;
