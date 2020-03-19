import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/createTicketAction";
import { getTickets } from "../actions/allTicketsAction";
import TicketCreateForm from "./TicketCreateForm";
import FraudeRisk from "./FraudeRiskContainer";

class TicketContainer extends React.Component {
  state = {
    logo: "",
    description: "",
    price: ""
  };
  componentDidMount = () => {
    console.log("this is tickets");
    this.props.getTickets();
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
    return (
      <div>
        hello world
        <TicketCreateForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <FraudeRisk />
      </div>
    );
  }
}

const mapDispatchToProps = { createTicket, getTickets };

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
