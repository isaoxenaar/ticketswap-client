import request from "superagent";
import { baseUrl } from "./constants";
export const JWT = "JWT";
function newLogin(payload) {
  console.log("this is payload", payload);
  return {
    type: JWT,
    payload
  };
}
export const checkLogin = data => dispatch => {
  console.log("This is working too", data);
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      console.log("this is response", response);
      const action = newLogin(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
