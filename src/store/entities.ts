import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import stageReducer from "./stage";
import searchqueryReducer from "./searchQuery";
import filterApplicantReducer from "./filteredAplicants";

export default combineReducers({
  contacts: contactsReducer,
  stage: stageReducer,
  searchquery: searchqueryReducer,
  filterApplicant: filterApplicantReducer,
});
