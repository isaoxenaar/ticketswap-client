import request from "superagent";
import { baseUrl } from "./constants";

export const ALL_TICKETS = "ALL_TICKETS";

function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const getTickets = () => (dispatch, getState) => {
  const state = getState();

  const { tickets } = state;

  if (!tickets.length) {
    request(`${baseUrl}/ticket`)
      .then(response => {
        const action = allTickets(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
