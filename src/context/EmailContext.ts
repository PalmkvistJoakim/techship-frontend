import { createContext } from "react";
import { IEmail } from "../types/IEmail";

const EmailContext = createContext<IEmail | null>(null);

export default EmailContext;
