import React, { Component } from "react";
import { connect } from "react-redux";
import { updateImage } from "../actions/edit_Image";

class EditImageForm extends Component {
  state = {
    url: "",
    title: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const update = {
      url: this.state.url,
      title: this.state.title
    };

    this.props.updateImage(this.props.imageId, update);

    console.log("submit test", this.props.imageId, update);
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
          Url{" "}
          <input
            type="text"
            name="url"
            onChange={this.onChange}
            value={this.state.url}
          />
        </div>
        <div>
          Title{" "}
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
