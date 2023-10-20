import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

export default rootReducer;
