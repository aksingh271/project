import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Delete User</h3>

        <div className="form-group">
          <label>Delet user having user id</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter user id"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    );
  }
}
