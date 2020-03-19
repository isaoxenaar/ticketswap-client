import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { checkLogin } from "../actions/loginUserAction";
import { Link } from "react-router-dom";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.checkLogin(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("What is this", this.props.loggedInUser);
    const id = this.props.loggedInUser;
    if (this.props.loggedInUser) {
      return (
        <div>
          <Link to="/events">Events</Link>
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

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps, { checkLogin })(LoginFormContainer);
