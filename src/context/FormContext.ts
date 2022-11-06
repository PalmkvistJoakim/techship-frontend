import { createContext } from "react";
import { IForm } from "../types/IVideoAsk";

export const FormContext = createContext<IForm[]>([]);
