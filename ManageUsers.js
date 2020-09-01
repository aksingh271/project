import React, { Component } from "react";
import Buttons from "./Buttons";
import AddUser from "./AddUser";
import TinGrid from "./TinGrid";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8081/users",
});
export default class ManageUsers extends Component {
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
      <li className="list-group-item list">
        {user.lastName}, {user.firstName} {user.middleName}
      </li>
    ));
    return user;
  };
  render() {
    return (
      <div className="container">
        <div>
          <p>
            <strong>More users and options with Optum Pay</strong>
          </p>
          <p>
            During the 60 day free trial of Optum Pay, you have the ability to
            add unlimited users. Keep in mind that once the free trial is over,
            you are limited to only 2 users. If your practice requires more than
            2 users, activate Optum Pay today. Get started.
          </p>
          <hr></hr>
          &nbsp;
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <button
                  type="button"
                  className="btn form-control dropdown-toggle"
                >
                  User List
                </button>
              </div>
              <AddUser />
            </div>
            <ul
              className="list-group overflow-auto"
              data-spy="scroll"
              data-offset="0"
            >
              {this.getUserList()}
            </ul>
          </div>
          <div className="col-sm">
            <form>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="fName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fName"
                    defaultValue="Steve"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="mName">Middle Initial</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mName"
                    defaultValue="E"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lName"
                  defaultValue="Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phNo">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phNo"
                  defaultValue="123-123-1234"
                />
              </div>
              <div className="form-group">
                <label htmlFor="usrTyp">User Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="usrTyp"
                  defaultValue="Provider"
                />
              </div>
            </form>
          </div>
          <div className="col-sm">
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="emailVal">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailVal"
                    defaultValue="stevesmith@gmail.com"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="reEmail">Retype Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="reEmail"
                    defaultValue="stevesmith@gmail.com"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="status">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    defaultValue="Active"
                  />
                </div>
                <label htmlFor="selectTin">Add a TIN</label>
                <div className="form-row col-md-12">
                  <div className="form-group col-md-8">
                    <select id="selectTin" className="form-control ">
                      <option defaultValue>Select TIN</option>
                      <option>123456789</option>
                      <option>912898894</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    id="addTin"
                    className="form-group col-md-4 btn btn-outline-primary"
                  >
                    + Add TIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <TinGrid />
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <Buttons />
        </div>
      </div>
    );
  }
}
