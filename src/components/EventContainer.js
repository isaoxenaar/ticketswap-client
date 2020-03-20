import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createEvent } from "../actions/createEventAction";
import { getEvents } from "../actions/allEventsAction";
import EventForm from "./EventForm";

//filter by date
//max 9 per page .next button

class CreateEventContainer extends React.Component {
  state = {
    name: "",
    pictureurl: "",
    description: "",
    enddate: ""
  };
  componentDidMount = () => {
    this.props.getEvents();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent({
      name: this.state.name,
      pictureurl: this.state.pictureurl,
      description: this.state.description,
      enddate: this.state.enddate
    });

    this.setState({
      name: "",
      pictureurl: "",
      description: "",
      enddate: ""
    });
  };

  render() {
    const eventList = this.props.events.map(event => {
      return (
        <div>
          <Link to="/event">
            <img
              style={{ width: "200px", height: "200px" }}
              src={event.pictureurl}
              alt="not found"
            />
          </Link>
          <h3>{event.name}</h3>
        </div>
      );
    });

    if (this.props.loggedInUser) {
      return (
        <main>
          <h3>create a new event here</h3>
          <EventForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          {eventList}
        </main>
      );
    } else {
      return (
        <main>
          <h3>
            These are the current events, browse and if you want to create and
            event, log in.
          </h3>
          {eventList}
        </main>
      );
    }
  }
}

const mapDispatchToProps = { createEvent, getEvents };

function mapStateToProps(state) {
  return {
    comments: state.comments,
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventContainer);
