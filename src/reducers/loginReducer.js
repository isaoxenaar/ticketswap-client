export default function(state = "", action = {}) {
  switch (action.type) {
    case "JWT":
      console.log("this is JWT", action.payload);
      return (state = action.payload);
    default:
      return state;
  }
}
