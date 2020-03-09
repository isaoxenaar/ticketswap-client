import request from "superagent";
const baseUrl = "http:/localhost:4000";

export const JWT = "JWT";
function newLogin(payload) {
  return {
    type: JWT,
    payload
  };
}
export const checkLogin = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = newLogin(response.body.jwt);
      console.log("this is response", response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
