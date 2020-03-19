export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_EVENTS":
      return action.payload;
    case "NEW_EVENT":
      console.log("this is new event", action.payload);
      return [action.payload, ...state];
    default:
      return state;
  }
}
