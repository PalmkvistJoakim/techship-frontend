import styled from "styled-components";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import { ISearchContext } from "../types/ISearch";

function SearchBar() {
  const { searchQuery, onChange } = useContext(SearchContext) as ISearchContext;
  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Sök..."
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

const Input = styled.input`
  width: 8rem;
  padding: 8px;
  border-radius: 2rem;
  background-color: black;
  color: #58eac1;
`;
