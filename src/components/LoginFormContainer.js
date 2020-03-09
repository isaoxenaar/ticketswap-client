import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { checkLogin } from "../actions/loginUserAction";

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
    if (this.props.loggedInUser) {
      return (
        <div>
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          you are logged in
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
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}
export default connect(mapStateToProps, { checkLogin })(LoginFormContainer);
