import React from "react";
import { connect } from "react-redux";
import { createComment } from "../actions/addCommentAction";
import { getComments } from "../actions/allCommentsAction";
import CommentForm from "./CommentForm";

class CommentContainer extends React.Component {
  state = {
    author: "",
    text: "",
    ticketId: "",
    eventId: ""
  };

  componentDidMount = () => {
    this.props.getComments();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.createComment({
      author: this.state.author,
      text: this.state.text,
      ticketId: this.props.passedTicketId,
      eventId: this.props.passedEventId
    });

    this.setState({
      author: "",
      text: "",
      ticketId: "",
      eventId: ""
    });
  };

  render() {
    const commentList = this.props.comments.map(comment => {
      return (
        <div>
          <h3>
            author:{comment.author} comment: {comment.text} user id:{" "}
            {comment.userId}
          </h3>
        </div>
      );
    });
    if (!this.props.comments) {
      return <div>LOADING</div>;
    } else if (this.props.loggedInUser) {
      return (
        <main>
          <h3>create a new comment here</h3>
          <CommentForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          <h3>comments</h3>
          {commentList}
        </main>
      );
    } else {
      return (
        <main>
          <h3>Comments, if you want to say something log in</h3>
          {commentList}
        </main>
      );
    }
  }
}

const mapDispatchToProps = {
  createComment,
  getComments
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
