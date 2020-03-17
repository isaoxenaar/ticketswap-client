export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_USERS":
      return action.payload;
    case "ADD_USER":
      console.log("this is addeduser", action.payload);
      return [action.payload, ...state];
    default:
      return state;
  }
}
