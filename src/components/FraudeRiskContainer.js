// // // * if the ticket is the only ticket of the author, add 10%
// // // * if the ticket price is lower than the average ticket price for that event, that's a risk
// // // 	* if a ticket is X% cheaper than the average price, add X% to the risk
// // // 	* if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
// // // * if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
// // // * if there are >3 comments on the ticket, add 5% to the risk
// // // ​
// // // The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.

// import React, { useCallback } from "react";
// import { connect } from "react-redux";
// import { getTickets } from "../actions/allTicketsAction";
// import { getEvents } from "../actions/allEventsAction";
// import { getUsers } from "../actions/allUsersAction";
// import { getComments } from "..actions/allCommentsAction";

// class FraudeRisk extends React.Component {
// componentDidMount = () => {
// this.props.getTickets()
// this.props.getEvents();
// this.props.getUsers()
// this.props.getComments()
// };

// render() {
// const theTicket = this.props.tickets.find(ticket =>
// {
//   this.props.ticketId === ticket.id
// }
// )

// const onlyTicket = this.props.tickets.filter(ticket => {
// if(ticket.userId === this.props.)
// {
//   return ticket
// }
// })

// const average = this.props.tickets.reduce((ticket, ))

// const timeCreated = this.props.tickets.find(return createdAt, find T in string + 2letters after )

// const amountComments = comment.length

// const fraudeRisk = 5

// if(onlyTicket > 1)
// {
//   fraudeRisk = fraudeRisk + 10
// }
// if(timeCreated >= 9 && <= 17)
// {
//       fraudeRisk = fraudeRisk - 10
// }
// else {
//   fraudeRisk = fraudeRisk + 10
// }
// if(ticket.price < average) // use math.abs
// {
//   const difference = average - ticketprice
//   const onePercent = average/100
//   const percentage = one
// }

// const color = {color: ""}
// if(frauderisk > 70)
// {
//   color === {color: red}
// // // }
// // // if(frauderisk < 70 && frauderisk > 30 )
// // // {
// // //   color === {color: orange}
// // // }
// // // if(frauderisk < 30)
// // // {
// // //   color === {color: green}
// // // }

// // //     return <main><h2 style={color}>{`The FraudeRisk for this ticket is${fraudeRisk}%`}</h2></main>;

// // //   }
// // // }

// const mapDispatchToProps = { getEvents, getTickets, getUsers, getComments };

// function mapStateToProps(state) {
// console.log("this is state", state);
// return {
//   comments: state.comments,
//  tickets: state.tickets,
//   events: state.events,
//   signedUpUsers: state.signedUpUsers,
//   loggedInUser: state.loggedInUser
// };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FraudeRisk);
