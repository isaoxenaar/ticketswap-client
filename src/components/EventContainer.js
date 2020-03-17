import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createEvent } from "../actions/createEventAction";
import { getEvents } from "../actions/allEventsAction";
import EventForm from "./EventForm";

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
    console.log("this is events", this.props.events);
    console.log("this is jwt in eventform", this.props.loggedInUser);

    const eventList = this.props.events.map(event => {
      return (
        <div>
          <img
            style={{ width: "200px", height: "200px" }}
            src={event.pictureurl}
            alt="not found"
          />
          <h3>{event.name}</h3>
          <h4>{event.enddate}</h4>
          <h5>{event.description}</h5>
        </div>
      );
    });

    const page = this.props.events.length / 9;

    if (this.props.events.length <= 9) {
      if (this.props.loggedInUser) {
        return (
          <main>
            {" "}
            <EventForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
            {eventList}
          </main>
        );
      } else {
        return <main>{eventList}</main>;
      }
    } else {
      if (this.props.loggedInUser) {
        return (
          <main>
            {" "}
            <EventForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
            {eventList}
            <Link to={`/events/${page}`}>more events</Link>
          </main>
        );
      } else {
        return (
          <main>
            {eventList}
            <Link to={`/events/${page}`}>more events</Link>
          </main>
        );
      }
    }
  }
}

const mapDispatchToProps = { createEvent, getEvents };

function mapStateToProps(state) {
  console.log("this is state", state);
  return {
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventContainer);
