import React, { useCallback } from "react";
import { connect } from "react-redux";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";

class FraudeRisk extends React.Component {
  componentDidMount = () => {
    this.props.getTickets();
    this.props.getEvents();
    this.props.getUsers();
  };

  render() {
    // this.props.tickets.filter(ticket =>
    //     {
    //         ticket.userId === user.id
    //     }
    return <main>{`The FraudeRisk for this ticket is`}</main>;
  }
}

const mapDispatchToProps = { getEvents, getTickets, getUsers };

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FraudeRisk);
