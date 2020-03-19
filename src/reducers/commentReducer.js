export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_COMMENTS":
      return action.payload;
    case "NEW_COMMENT":
      console.log("this is new event comment", action.payload);
      return [action.payload, ...state];
    default:
      return state;
  }
}
