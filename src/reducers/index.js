import { combineReducers } from "redux";
import signedUpUsers from "./userReducer";
import loggedInUser from "./loginReducer";
import events from "./eventReducer";
import tickets from "./ticketReducer";
import comments from "./commentReducer";
import thisUser from "./thisUserReducer";

export default combineReducers({
  tickets,
  comments,
  events,
  signedUpUsers,
  loggedInUser,
  thisUser
});
