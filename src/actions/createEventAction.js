import request from "superagent";
import { baseUrl } from "./constants";

export const NEW_EVENT = "NEW_EVENT";
function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}

export const createEvent = data => (dispatch, getState) => {
  const state = getState();
  const { loggedInUser } = state;
  console.log("this is user in createevent", loggedInUser);
  request
    .post(`${baseUrl}/event`)
    .set("Authorization", `Bearer ${loggedInUser}`)
    .send(data)
    .then(response => {
      const action = newEvent(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
