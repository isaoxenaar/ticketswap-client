import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/createEventAction";
import EventForm from "./EventForm";

class CreateEventContainer extends React.Component {
  state = {
    name: "",
    pictureurl: "",
    description: "",
    enddate: ""
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
    return (
      <div>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        {}
      </div>
    );
  }
}

const mapDispatchToProps = { createEvent };

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
