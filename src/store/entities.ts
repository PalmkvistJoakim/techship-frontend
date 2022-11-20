import { combineReducers } from "redux";
import applicantReducer from "./applicant";
import contactsReducer from "./contacts";

export default combineReducers({
  applicants: applicantReducer,
  contacts: contactsReducer,
});
