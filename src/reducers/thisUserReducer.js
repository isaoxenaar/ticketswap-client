export default function(state = {}, action = {}) {
  switch (action.type) {
    case "THIS_USER":
      console.log("this is this user", action.payload);
      return (state = action.payload);
    default:
      return state;
  }
}
