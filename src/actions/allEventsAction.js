import request from "superagent";
import { baseUrl } from "./constants";

export const ALL_EVENTS = "ALL_EVENTS";

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();

  const { events } = state;

  if (!events.length) {
    request(`${baseUrl}/event`)
      .then(response => {
        const action = allEvents(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
