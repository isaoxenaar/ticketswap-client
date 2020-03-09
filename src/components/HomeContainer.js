import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpFormContainer";

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <LoginFormContainer />
        <SignUpContainer />
        {this.props.signedUpUsers.map(user => {
          return <p key={user.password}>{user.email}</p>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(HomeContainer);
