import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../actions/allUsersAction";
import { createTicket } from "../actions/createTicketAction";
import { getTickets } from "../actions/allTicketsAction";
import TicketCreateForm from "./TicketCreateForm";
import EditTicketForm from "./TicketEditForm";

//add loading in render
class TicketContainer extends React.Component {
  state = {
    logo: "",
    description: "",
    price: "",
    eventId: ""
  };

  componentDidMount = () => {
    this.props.getTickets();
    this.props.getUsers();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    console.log("this is params", id);
    this.props.createTicket({
      logo: this.state.logo,
      description: this.state.description,
      price: this.state.price,
      eventId: id
    });

    this.setState({
      logo: "",
      description: "",
      price: "",
      eventId: ""
    });
  };

  render() {
    const ticketList = this.props.tickets.map(ticket => {
      if (this.props.loggedInUser) {
        return (
          <div key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`}>
              <img src={ticket.logo} alt="not found" />
            </Link>
            <p>description of ticket: {ticket.description}</p>
            <p>price of ticket: $ {ticket.price}</p>
            <EditTicketForm ticketId={ticket.id} />
          </div>
        );
      } else {
        return (
          <div key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`}>
              <img src={ticket.logo} alt="not found" />
            </Link>
            <p>description of ticket: {ticket.description}</p>
            <p>price of ticket: $ {ticket.price}</p>
          </div>
        );
      }
    });

    //   const getPokemonById = (pokemons, id) => {
    //     const poke2 = pokemons.find((pokemon) => {
    //         return pokemon.id === id
    //     })
    //     return poke2;
    // }

    const theEvent = this.props.events.find(event => {
      return event.id === this.props.match.params.id;
    });
    console.log("is this the event", theEvent);

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
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);
