import React, { useCallback } from "react";
import { connect } from "react-redux";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";

class FraudeRisk extends React.Component {
  componentDidMount = () => {
    this.props.getTickets();
    this.props.getEvents();
    this.props.getUsers();
  };

  render() {
const theTicket = this.props.tickets.find()

const onlyTicket = this.props.tickets.filter(ticket => {
  if(ticket.userId === this.props.loggedInUser.id)
  {
    return ticket
  }
})

const average = this.props.tickets.reduce((ticket, ))

const timeAdded = this.props.tickets.find()

const amountComment = comment.length

const fraudeRisk = 5

if(onlyTicket > 1)
{
   fraudeRisk = fraudeRisk + 10
}
if(timeCreated )

const color = 
if(frauderisk > 70)
{
  
}

    return <main>{`The FraudeRisk for this ticket is${fraudeRisk}%`}</main>;

  }
}

const mapDispatchToProps = { getEvents, getTickets, getUsers };

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FraudeRisk);
