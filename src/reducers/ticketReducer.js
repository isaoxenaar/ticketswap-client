export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_TICKETS":
      return action.payload;
    case "NEW_TICKET":
      return [action.payload, ...state];
    case "CHANGE_TICKET":
      const newState = state.map(ticket => {
        const condition = ticket.id === action.payload.id;

        if (condition) {
          return action.payload;
        }
        return ticket;
      });

      return newState;
    default:
      return state;
  }
}
