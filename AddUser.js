import React, { Component } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8081/users",
});
export default class AddUser extends Component {
  addUser = async (event) => {
    event.preventDefault();
    let myForm = document.getElementById("userForm");
    let formData = new FormData(myForm);
    var object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    const headers = {
      "Content-Type": "application/json",
    };
    await api
      .post("http://localhost:8081/users", json, {
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
      <div className="form-group col-md-6">
        <button
          type="button"
          className="btn form-control btn-outline-primary"
          data-toggle="modal"
          data-target="#addUser"
        >
          + Add User
        </button>
        <div
          className="modal fade"
          id="addUser"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addUserLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addUserLabel">
                  Add User
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="userForm" onSubmit={this.addUser}>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="middleName">Middle Initial</label>
                      <input
                        type="text"
                        className="form-control"
                        id="middleName"
                        name="middleName"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phnNum">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phnNum"
                      name="phnNum"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userType">User Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userType"
                      name="userType"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tin">Tin</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tin"
                      name="tin"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Add User
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
