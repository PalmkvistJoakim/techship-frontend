import { combineReducers } from "redux";
import applicantReducer from "./applicant";
import contactsReducer from "./contacts";
import formReducer from "./formvideoask";

export default combineReducers({
  applicants: applicantReducer,
  contacts: contactsReducer,
  forms: formReducer,
});
