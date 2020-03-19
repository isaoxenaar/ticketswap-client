import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTicket } from "../actions/editTicketAction";

class EditticketForm extends Component {
  state = {
    logo: "",
    price: "",
    description: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const update = {
      logo: this.state.logo,
      price: this.state.price,
      description: this.state.description
    };

    this.props.updateTicket(this.props.ticketId, update);

    console.log("submit test", this.props.ticketId, update);
  };

  onChange = event => {
    const { value, name } = event.target;
    const update = { [name]: value };

    this.setState(update);
  };

  reset = () => {
    this.setState({ url: "", title: "" });
  };

  render() {
    console.log("this.props.test:", this.props);

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          Logo Url{" "}
          <input
            type="text"
            name="url"
            onChange={this.onChange}
            value={this.state.url}
          />
        </div>
        <div>
          Price{" "}
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div>
          Description{" "}
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div>
          <button>Edit</button>
        </div>
        <button onClick={this.reset}>reset</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.tickets,
    events: state.events,
    signedUpUsers: state.signedUpUsers,
    loggedInUser: state.loggedInUser
  };
}

const mapDispatchToProps = {
  updateImage
};

export default connect(mapStateToProps, mapDispatchToProps)(EditImageForm);
