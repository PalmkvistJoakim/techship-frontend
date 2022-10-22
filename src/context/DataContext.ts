import { createContext } from "react";
import { IVideoask } from "../types/IVideoAsk";

const DataContext = createContext<IVideoask[]>([]);

export default DataContext;
