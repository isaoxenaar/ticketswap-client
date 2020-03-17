import { combineReducers } from "redux";
import signedUpUsers from "./addUserReducer";
import loggedInUser from "./loginReducer";
import events from "./createEventReducer";

export default combineReducers({
  events,
  signedUpUsers,
  loggedInUser
});
