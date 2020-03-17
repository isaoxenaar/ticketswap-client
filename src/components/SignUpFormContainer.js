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
      <div>
        <SignUpForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
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

export default connect(mapStateToProps, { addUser })(SignUpContainer);
