import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            name
            <input
              placeholder="name"
              name="name"
              value={this.props.state}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            pictureurl
            <input
              placeholder="pictureurl"
              name="pictureurl"
              value={this.props.state}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            description
            <input
              placeholder="description"
              name="description"
              value={this.props.state}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            eventdates
            <input
              placeholder="enddate"
              name="enddate"
              value={this.props.state}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <button>Add Event</button>
        </form>
      </div>
    );
  }
}
