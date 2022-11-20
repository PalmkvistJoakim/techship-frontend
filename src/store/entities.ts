import { combineReducers } from "redux";
import applicantReducer from "./applicant";
import contactsReducer from "./contacts";
import formReducer from "./formvideoask";
import stageReducer from "./stage";
import searchqueryReducer from "./searchQuery";
import filteredApplicantsReducer from "./filteredAplicants.ts";

export default combineReducers({
  applicants: applicantReducer,
  contacts: contactsReducer,
  forms: formReducer,
  stage: stageReducer,
  searchquery: searchqueryReducer,
  filteredApplicants: filteredApplicantsReducer,
});
