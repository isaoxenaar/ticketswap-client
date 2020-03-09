import { combineReducers } from "redux";
import signedUpUsers from "./addUserReducer";
import loggedInUser from "./loginReducer";

export default combineReducers({
  signedUpUsers,
  loggedInUser
});
