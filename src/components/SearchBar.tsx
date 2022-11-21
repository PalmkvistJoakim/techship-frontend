import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { searchQuery } from "../store/searchQuery";

function SearchBar() {
  const dispatch = useDispatch();

  const searchText = useSelector((state: any) => state.entities.searchQuery);

  const handleChange = (value: string) => {
    //@ts-ignore
    dispatch(searchQuery(value));
  };

  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Sök..."
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

const Input = styled.input`
  width: 23rem;
  margin-left: 1rem;
  padding: 8px;
  border-radius: 2rem;
  background-color: black;
  color: #58eac1;
  ::placeholder {
    font-weight: bold;
  }
`;

// function SearchBar() {
//   const dispatch = useDispatch();

//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const applicants = useSelector(
//     (state: IVideoask) => state.entities.applicants
//   );
//   const handleChange = (searchQuery: string) => {
//     if (applicants.length === 0) {
//       setSearchQuery(searchQuery);
//       toast("🦄 ingen träff, sök på namn igen.", { theme: "light" });
//       window.setInterval(handleRefresh, 2000);
//     } else {
//       setSearchQuery(searchQuery);
//       dispatch(filterApplicant(searchQuery));
//     }
//   };

//   function handleRefresh() {
//     window.location.reload();
//   }

//   return (
//     <div className="search">
//       <Input
//         type="text"
//         placeholder="Sök..."
//         value={searchQuery}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//     </div>
//   );
// }

// export default SearchBar;

// const Input = styled.input`
//   width: 20rem;
//   margin-right: 20px;
//   padding: 8px;
//   border-radius: 2rem;
//   background-color: black;
//   color: #58eac1;
// `;
