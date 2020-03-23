import React from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions/allEventsAction";

class NineEventsContainer extends React.Component {
  componentDidMount = () => {
    this.props.getEvents();
  };
  nextPage = () => {
    x = 9;
    while (this.props.eventList.length > 9) {}
  };
  render() {
    if (this.props.eventList.length > 9) {
      return <button onClick={this.nextPage}>next</button>;
    } else {
      return <div>{eventList}</div>;
    }
  }
}
const mapDispatchToProps = { getEvents, getTickets, getUsers, getComments };

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FraudeRisk);
