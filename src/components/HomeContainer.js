import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpFormContainer";
import EventContainer from "./EventContainer";

class HomeContainer extends React.Component {

  componentDidMount()
  
  render() {
    return (
      <main>
        <marquee>
          <h1>TICKETSWAP by Isa</h1>
        </marquee>
        <h2>These users are currently signed up and able to contribute:</h2>
        {this.props.signedUpUsers.map(user => {
          return (
            <li key={user.password}>
              User Email: {user.email} User Id: {user.id}
            </li>
          );
        })}
        <LoginFormContainer />
        <SignUpContainer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps)(HomeContainer);
