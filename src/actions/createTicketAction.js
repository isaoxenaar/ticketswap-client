import request from "superagent";
import { baseUrl } from "./constants";

export const NEW_TICKET = "NEW_TICKET";
function newTicket(payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = data => (dispatch, getState) => {
  const state = getState();
  const { loggedInUser } = state;
  console.log("this is user in createevent", loggedInUser);
  request
    .post(`${baseUrl}/ticket`)
    .set("Authorization", `Bearer ${loggedInUser}`)
    .send(data)
    .then(response => {
      const action = newTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
