export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_EVENTS":
      return action.payload;
    case "NEW_EVENT":
      return [action.payload, ...state];
    default:
      return state;
  }
}
