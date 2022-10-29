import { createContext } from "react";
import { ISearchContext } from "../types/ISearch";

const SearchContext = createContext<ISearchContext | null>(null);

export default SearchContext;
