import React, { Component } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8081/users",
});
export default class MyProfile extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    api.get("/").then((res) => {
      this.setState({ users: res.data });
    });
  }
  getUserList = () => {
    const user = this.state.users.map((user) => (
      <li>
        {user.lastName}, {user.firstName} {user.middleName}
      </li>
    ));
    return user;
  };
  render() {
    // const user = this.state.users ? <div>{this.state.users.id}</div> : null;

    return (
      <div>
        {" "}
        <ul>{this.getUserList()}</ul>
      </div>
    );
  }
}
