import React from "react";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            login email
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.state}
              type="text"
            />
          </label>
          <label>
            login password
            <input
              placeholder="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.state}
              type="text"
            />
          </label>
          <button>add</button>
        </form>
      </div>
    );
  }
}
