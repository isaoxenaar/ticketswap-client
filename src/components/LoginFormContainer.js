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
          you are logged in
          <Link to={`/events/${id}`}>Events</Link>
        </div>
      );
    } else {
      return (
        <div>
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          you have to log in
          <Link to={"/events"}>Events</Link>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps, { checkLogin })(LoginFormContainer);
