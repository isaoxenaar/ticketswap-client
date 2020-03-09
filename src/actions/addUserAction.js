import request from "superagent";
import { baseUrl } from "./constants";
export const ADD_USER = "ADD_USER";

stream = new EventSource(`${baseUrl}/stream`);

function newUser(payload) {
  return {
    type: ADD_USER,
    payload
  };
}
export const addUser = data => dispatch => {
  console.log("this is data", data);
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      console.log("this is response", response.body);
      dispatch(action);
    })
    .catch(console.error);
};
