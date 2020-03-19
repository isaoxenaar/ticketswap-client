// has one ticket by user and eventId
// has one an editform for the ticket
// has a comment form for the ticket
// has a fraude risk calculation

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createComment } from "../actions/addCommentAction";
import { getComments } from "../actions/allCommentsAction";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";

import CommentForm from "./CommentForm";

class CommentContainer extends React.Component {
  state = {
    text: "",
    ticketId: ""
  };

  componentDidMount = () => {
    this.props.getEvents();
    this.props.getTickets();
    this.props.getComments();
    this.props.getUsers();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment({
      text: this.state.text,
      ticketId: this.state.ticketId
    });

    this.setState({
      text: "",
      ticketId: ""
    });
  };

  render() {
    const commentList = this.props.comments.map(comment => {
      return (
        <div>
          <h3>
            author: {comment.userId} comment: {comment.text}
          </h3>
        </div>
      );
    });

    if (this.props.loggedInUser) {
      return (
        <main>
          <h3>create a new comment here</h3>
          <CommentForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          {commentList}
        </main>
      );
    } else {
      return (
        <main>
          <h3>These are the comments for this ticket</h3>
          {commentList}
        </main>
      );
    }
  }
}

const mapDispatchToProps = {
  createComment,
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
