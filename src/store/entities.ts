import { combineReducers } from "redux";
import applicantReducer from "./applicant";
import contactsReducer from "./contacts";
import stageReducer from "./stage";
import searchqueryReducer from "./searchQuery";
import filterApplicantReducer from "./filteredAplicants";

export default combineReducers({
  applicants: applicantReducer,
  contacts: contactsReducer,
  stage: stageReducer,
  searchquery: searchqueryReducer,
  filterApplicant: filterApplicantReducer,
});
