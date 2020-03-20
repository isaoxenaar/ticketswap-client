import superagent from "superagent";

export const CHANGE_TICKET = "CHANGE_TICKET";

function changeTicket(newTicket) {
  return {
    type: CHANGE_TICKET,
    payload: newTicket
  };
}

export function updateTicket(id, update) {
  return async function(dispatch) {
    try {
      const response = await superagent
        .put(`http://localhost:4001/ticket/${id}`)
        .send(update);

      const action = changeTicket(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}
