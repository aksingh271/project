import React, { Component } from "react";
export default class TinGrid extends Component {
  render() {
    return (
      <div className="form-group col-md-12">
        <table className=" table table-striped">
          <thead>
            <tr>
              <th scope="col">TIN</th>
              <th scope="col">Provider Name</th>
              <th scope="col">TIN Access Level</th>
              <th scope="col">NPI</th>
              <th scope="col">NPI Name</th>
              <th scope="col">Plan Type</th>
              <th scope="col">Email Notification</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123456789</td>
              <td>Health First Family Care Center</td>
              <td>
                <select id="selectAccess" className="form-control ">
                  <option>Select Access</option>
                  <option defaultValue>Admin</option>
                  <option>General</option>
                </select>
              </td>
              <td>987653211</td>
              <td>General Hospital in the General Area of</td>
              <td>Paid</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </td>
            </tr>
            <tr>
              <td>123456789</td>
              <td>Health First Family Care Center</td>
              <td>
                <select id="selectAccess" className="form-control ">
                  <option>Select Access</option>
                  <option defaultValue>Admin</option>
                  <option>General</option>
                </select>
              </td>
              <td>987653211</td>
              <td>General Hospital in the General Area of</td>
              <td>Paid</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
