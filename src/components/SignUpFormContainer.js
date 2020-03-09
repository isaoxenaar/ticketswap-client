import React from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { addUser } from "../actions/addUserAction";
class SignUpContainer extends React.Component {
  state = { email: "", password: "" };
  onSubmit = event => {
    event.preventDefault();
    console.log("this is state in onSubmit", this.state);
    this.props.addUser(this.state);
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { addUser })(SignUpContainer);
