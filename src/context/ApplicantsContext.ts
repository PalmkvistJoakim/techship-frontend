import { createContext } from "react";
import IApplicant from "../types/IApplicant";

const ApplicantsContext = createContext<IApplicant[] | IApplicant>([]);

export default ApplicantsContext;
