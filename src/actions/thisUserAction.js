import request from "superagent";
import { baseUrl } from "./constants";

export const THIS_USER = "THIS_USER";

function keepThisUser(payload) {
  return {
    type: THIS_USER,
    payload
  };
}

export const thisUser = data => dispatch => {
  const action = keepThisUser(data);
  dispatch(action);
};
