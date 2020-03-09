import React from "react";
export default class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            sign-up email
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.state}
              type="text"
            />
          </label>
          <label>
            sign-up password
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
