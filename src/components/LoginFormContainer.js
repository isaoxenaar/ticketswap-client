import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { checkLogin } from "../actions/loginUserAction";
import { thisUser } from "../actions/thisUserAction";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.checkLogin(this.state);
    this.props.thisUser(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const thisUserArray = this.props.signedUpUsers.filter(user => {
      return user.email === this.state.email;
    });
    const thisUser = thisUserArray[0];
    if (this.props.loggedInUser) {
      return (
        <div>
          <Link to={`/events/${thisUser.id}`}>Events</Link>
          <h2>{`Welcome back, ${this.state.email}`}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            You are not logged in, log in (or signup first if you have not yet)
            to create events, tickets and leave comments. You can browse the
            available events and tickets, without an account.
          </h3>
          <Link to={"/events"}>Events</Link>
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    }
  }
}

const mapDispatchToProps = { checkLogin, thisUser };

function mapStateToProps(state) {
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
