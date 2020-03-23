import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/addUserAction";
import SignUpForm from "./SignUpForm";

class SignUpContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
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
        <h3>Sign Up, to start adding your own events, tickets and comments.</h3>
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
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, { addUser })(SignUpContainer);
