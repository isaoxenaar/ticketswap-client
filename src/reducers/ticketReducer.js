export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_TICKETS":
      return action.payload;
    case "NEW_TICKET":
      console.log("this is new ticket", action.payload);
      return [action.payload, ...state];
    default:
      return state;
  }
}
