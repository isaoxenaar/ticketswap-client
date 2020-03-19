import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            text
            <input
              placeholder="logo"
              name="logo"
              value={this.props.values.text}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <button>Add Ticket</button>
        </form>
      </div>
    );
  }
}
