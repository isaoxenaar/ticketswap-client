import request from "superagent";
import { baseUrl } from "./constants";

export const NEW_COMMENT = "NEW_COMMENT";
function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = data => (dispatch, getState) => {
  const state = getState();
  const { loggedInUser } = state;

  request
    .post(`${baseUrl}/event`)
    .set("Authorization", `Bearer ${loggedInUser}`)
    .send(data)
    .then(response => {
      const action = newComment(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
