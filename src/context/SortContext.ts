import { createContext } from "react";
import { ISorts } from "../types/ISort";

const SortContext = createContext<ISorts | null>(null);

export default SortContext;
