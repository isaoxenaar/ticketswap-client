import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../actions/allUsersAction";
import { createTicket } from "../actions/createTicketAction";
import { getTickets } from "../actions/allTicketsAction";
import TicketCreateForm from "./TicketCreateForm";
import EditTicketForm from "./TicketEditForm";

class TicketContainer extends React.Component {
  state = {
    logo: "",
    description: "",
    price: ""
  };

  componentDidMount = () => {
    console.log("this is tickets");
    this.props.getTickets();
    this.props.getUsers();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    console.log("this is event");
    event.preventDefault();
    this.props.createTicket({
      logo: this.state.logo,
      description: this.state.description,
      price: this.state.price
    });

    this.setState({
      logo: "",
      description: "",
      price: ""
    });
  };

  render() {
    console.log("this is tickets in render", this.props.tickets);

    const ticketList = this.props.tickets.map(ticket => {
      return (
        <div>
          <Link to="/ticket">
            <img src={ticket.logo} alt="not found" />
          </Link>
          <p>description of ticket: {ticket.description}</p>
          <p>price of ticket: {ticket.price}</p>
          <EditTicketForm ticketId={ticket.id} />
        </div>
      );
    });

    if (this.props.loggedInUser) {
      return (
        <main>
          <h3>create a new ticket for this event here.</h3>
          <TicketCreateForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          {ticketList}
        </main>
      );
    } else {
      return (
        <main>
          <h3>these tickets are for sale at the moment</h3>
          {ticketList}
        </main>
      );
    }
  }
}

const mapDispatchToProps = { createTicket, getTickets, getUsers };

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);
