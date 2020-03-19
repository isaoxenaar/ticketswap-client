import request from "superagent";
import { baseUrl } from "./constants";

export const ALL_COMMENTS = "ALL_COMMENTS";

function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload
  };
}

export const getComments = () => (dispatch, getState) => {
  const state = getState();

  const { comments } = state;

  if (!comments.length) {
    request(`${baseUrl}/comment`)
      .then(response => {
        const action = allComments(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
