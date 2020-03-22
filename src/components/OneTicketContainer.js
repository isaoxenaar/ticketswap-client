import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getComments } from "../actions/allCommentsAction";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";

import CommentContainer from "./CommentContainer";
import FraudeRiskContainer from "./FraudeRiskContainer";

class OneTicketContainer extends React.Component {
  state = {
    author: "",
    text: "",
    ticketId: ""
  };

  componentDidMount = () => {
    this.props.getEvents();
    this.props.getTickets();
    this.props.getComments();
    this.props.getUsers();
  };

  render() {
    console.log("this is jwt in comment", this.props.loggedInUser);
    return (
      <div>
        <CommentContainer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getComments,
  getTickets,
  getUsers,
  getEvents
};

function mapStateToProps(state) {
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OneTicketContainer);
