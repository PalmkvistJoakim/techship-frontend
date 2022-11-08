import { combineReducers } from "redux";
import applicantReducer from "./applicant";
import contactsReducer from "./contacts";
import formReducer from "./formvideoask";
import commentReducer from "./comment";
import stageReducer from "./stage";

export default combineReducers({
  applicants: applicantReducer,
  contacts: contactsReducer,
  forms: formReducer,
  comments: commentReducer,
  stage: stageReducer,
});
