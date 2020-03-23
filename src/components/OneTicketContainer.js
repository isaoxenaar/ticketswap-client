import React from "react";
import { connect } from "react-redux";

import { getComments } from "../actions/allCommentsAction";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";

import CommentContainer from "./CommentContainer";
import FraudeRisk from "./FraudeRiskContainer";

class OneTicketContainer extends React.Component {
  componentDidMount = () => {
    this.props.getEvents();
    this.props.getTickets();
    this.props.getComments();
    this.props.getUsers();
  };

  render() {
    const thisTicketArray = this.props.tickets.filter(ticket => {
      return ticket.id == this.props.match.params.id;
    });
    const thisTicket = thisTicketArray[0];

    return (
      <div>
        <img src={thisTicket.logo} alt="not found" />
        <h3>
          price: {thisTicket.price} description: {thisTicket.description}
        </h3>
        <CommentContainer
          passedTicketId={this.props.match.params.id}
          passedEventId={thisTicket.eventId}
        />
        <FraudeRisk thisTicket={thisTicket} thisEventId={thisTicket.eventId} />
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
