import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpFormContainer";

class HomeContainer extends React.Component {
  render() {
    console.log("this page loaded");
    return (
      <div>
        <LoginFormContainer />
        <SignUpContainer />
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
