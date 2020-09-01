import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp.js";
import MyProfile from "./MyProfile";
import Home from "./Home";
import ManageUsers from "./ManageUsers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="/home">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/myprofile">
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manageUser">
                  Manage User
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/sign-up">
                  Sign Up <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sign-in">
                  Delete User
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="auth-inner ">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/manageUser" component={ManageUsers} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />{" "}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
