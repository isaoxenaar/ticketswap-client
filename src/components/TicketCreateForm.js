import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            logo
            <input
              placeholder="logo"
              name="logo"
              value={this.props.values.logo}
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
            price
            <input
              placeholder="price"
              name="price"
              value={this.props.values.price}
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
