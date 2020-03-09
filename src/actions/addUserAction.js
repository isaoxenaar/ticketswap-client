import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ADD_USER = "ADD_USER";
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
