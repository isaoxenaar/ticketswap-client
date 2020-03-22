import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createComment } from "../actions/addCommentAction";
import { getComments } from "../actions/allCommentsAction";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";

import CommentForm from "./CommentForm";
//add loading part.
class CommentContainer extends React.Component {
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

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;

    this.props.createComment({
      author: this.state.author,
      text: this.state.text,
      ticketId: id
    });

    this.setState({
      author: "",
      text: "",
      ticketId: ""
    });
  };

  render() {
    console.log("this is jwt in comment", this.props.loggedInUser);
    const commentList = this.props.comments.map(comment => {
      return (
        <div>
          <h3>
            author: {comment.author} comment: {comment.text} user id:{" "}
            {comment.userId}
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
