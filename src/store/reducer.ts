import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import { Api } from "./Api";

export default combineReducers({
  entities: entitiesReducer,
  [Api.reducerPath]: Api.reducer,
});
