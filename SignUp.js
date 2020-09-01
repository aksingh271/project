import React, { Component } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8081/users",
});
export default class SignUp extends Component {
  state = {
    xvalue: "",
  };

  addUser = (event) => {
    event.preventDefault();
    let myForm = document.getElementById("userForm");
    let formData = new FormData(myForm);
    var object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    this.setState({ xvalue: json });
    const headers = {
      "Content-Type": "application/json",
    };
    api
      .post("http://localhost:8081/users", this.state.xvalue, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  render() {
    return (
      <React.Fragment>
        <form id="userForm" onSubmit={this.addUser}>
          <h3>Add User</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              id="name"
              name="password"
              type="text"
              className="form-control"
              placeholder="First name"
              key="password"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              key="email"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Add User
          </button>
        </form>
      </React.Fragment>
    );
  }
}
