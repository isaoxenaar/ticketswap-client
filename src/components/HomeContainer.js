import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import SignUpContainer from "./SignUpFormContainer";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";
import { getComments } from "../actions/allCommentsAction";

class HomeContainer extends React.Component {
  componentDidMount = () => {
    this.props.getTickets();
    this.props.getEvents();
    this.props.getUsers();
    this.props.getComments();
  };

  render() {
    return (
      <main>
        <marquee>
          <h1>TICKETSWAP by Isa</h1>
        </marquee>
        <h2>These users are currently signed up and able to contribute:</h2>
        <ul>
          {this.props.signedUpUsers.map(user => {
            return (
              <li key={user.password}>
                User Email: {user.email} User Id: {user.id}
              </li>
            );
          })}
        </ul>
        <LoginFormContainer />
        <SignUpContainer />
      </main>
    );
  }
}

const mapDispatchToProps = { getTickets, getEvents, getUsers, getComments };

function mapStateToProps(state) {
  return {
    comments: state.comments,
    tickets: state.events,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
