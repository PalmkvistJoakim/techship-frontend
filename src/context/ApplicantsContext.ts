import { createContext } from "react";
import IApplicant from "../types/IApplicant";

const applicantsContext = createContext<IApplicant[] | IApplicant>([]);

export default applicantsContext;
