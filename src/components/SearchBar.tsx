import styled from "styled-components";

interface Props {
  value: string;
  onChange: (searchQuery: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Sök på namn..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

const Input = styled.input`
  width: 180px;
  padding: 8px;
  border: none;
  border-radius: 20px;
  margin-right: -40px;
`;
