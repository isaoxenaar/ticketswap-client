import React from "react";
// add reset button

export default class SignUpForm extends React.Component {
  render() {
    return (
      <main>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Signup email{" "}
            <input
              placeholder="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
              type="text"
            />{" "}
          </label>
          <label>
            Signup password{" "}
            <input
              placeholder="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
              type="text"
            />{" "}
          </label>
          <button>Sign Up</button>
        </form>
      </main>
    );
  }
}
