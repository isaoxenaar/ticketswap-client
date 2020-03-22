import React from "react";
//add reset button

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
              value={this.props.values.name}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            pictureurl
            <input
              placeholder="pictureurl"
              name="pictureurl"
              value={this.props.values.pictureurl}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            description
            <input
              placeholder="description"
              name="description"
              value={this.props.values.description}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            eventdates
            <input
              placeholder="enddate"
              name="enddate"
              value={this.props.values.enddate}
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
