import React from "react";
import { connect } from "react-redux";
import { getTickets } from "../actions/allTicketsAction";
import { getEvents } from "../actions/allEventsAction";
import { getUsers } from "../actions/allUsersAction";
import { getComments } from "../actions/allCommentsAction";

class FraudeRisk extends React.Component {
  componentDidMount = () => {
    this.props.getTickets();
    this.props.getEvents();
    this.props.getUsers();
    this.props.getComments();
  };

  render() {
    const thisEventId = this.props.thisEventId;
    const thisTicket = this.props.thisTicket;
    let color = { color: "" };

    let fraudeRisk = 5;

    const onlyTicketByAuthor = this.props.tickets.filter(ticket => {
      return ticket.userId == thisTicket.userId;
    });

    const ticketsThisEvent = this.props.tickets.filter(ticket => {
      return ticket.eventId == thisEventId;
    });

    const priceAllTickets = ticketsThisEvent.reduce(
      (totalPrice, currentTicket) => {
        const total = parseFloat(currentTicket.price) + totalPrice;
        return total;
      },
      0
    );
    console.log("price all tickets", priceAllTickets);

    const average = priceAllTickets / ticketsThisEvent.length;
    const onePercent = average / 100;
    const percentage = thisTicket.price / onePercent;
    console.log("all values average", average, onePercent, percentage);

    const commentsThisTicket = this.props.comments.filter(comment => {
      return comment.ticketId == thisTicket.id;
    });

    if (onlyTicketByAuthor.length === 1) {
      fraudeRisk = fraudeRisk + 10;
    }
    console.log("onlyTicket", onlyTicketByAuthor, fraudeRisk);

    if (thisTicket.price < average) {
      fraudeRisk = fraudeRisk + percentage;
    } else if (thisTicket.price > average && percentage <= 10) {
      fraudeRisk = fraudeRisk - percentage;
    } else if (thisTicket.price > average && percentage > 10) {
      fraudeRisk = fraudeRisk + 10;
    }
    console.log("fraudeRisk met average", fraudeRisk, average, percentage);

    if (commentsThisTicket.length > 3) {
      fraudeRisk = fraudeRisk + 5;
    }
    console.log("fraudeRisk met length", commentsThisTicket, fraudeRisk);

    if (fraudeRisk >= 70) {
      color = { color: "red" };
    }
    if (fraudeRisk < 70 && fraudeRisk >= 30) {
      color = { color: "orange" };
    }
    if (fraudeRisk < 30) {
      color = { color: "green" };
    }
    console.log("fraudeRisk met color", color);

    if (fraudeRisk < 5) {
      fraudeRisk = 5;
    }
    if (fraudeRisk > 95) {
      fraudeRisk = 95;
    }
    fraudeRisk = fraudeRisk.toFixed(0);

    return (
      <main>
        <h2
          style={color}
        >{`The FraudeRisk for this ticket is ${fraudeRisk} %`}</h2>
      </main>
    );
  }
}
const mapDispatchToProps = { getEvents, getTickets, getUsers, getComments };

function mapStateToProps(state) {
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FraudeRisk);

// const timeCreatedLong = thisTicket.createdAt;
// const timeT = timeCreatedLong.indexOf(T);
// console.log(timeT);
// const timeCreated = timeCreatedLong.
// //     // if(timeCreated >= 9 && <= 17)
// //     // {
// //     //      fraudeRisk = fraudeRisk - 10

// //     // // // }
// //     // // // else {
// //     // // //   fraudeRisk = fraudeRisk + 10
// //     // // // }
