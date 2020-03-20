import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            author
            <input
              placeholder="userId"
              name="userId"
              value={this.props.values.userId}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <label>
            text
            <input
              placeholder="text"
              name="text"
              value={this.props.values.text}
              onChange={this.props.onChange}
              type="text"
            />
          </label>
          <button>Add Comment</button>
        </form>
      </div>
    );
  }
}
