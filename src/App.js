import React, { Component } from "react";
import "./App.css";
import { getUser } from "./services/AuthService";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    user: null
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    console.log(user);
    if (user) {
      this.setState({ user });
    }
  }
  validateGroup = () => {
    if (this.state.user !== null) {
      //move to the create page
    } else {
      return console.log("wasel");
    }
  };
  onLogin = () => {
    this.setState({ user: getUser() });
  };
  render() {
    return (
      // <div className="container-fluid">
      //   <div className="container">
      //     {this.state.user ? (
      //       <h1>profile</h1>
      //     ) : (
      //       <LoginForm onLogin={this.onLogin} />
      //     )}
      //   </div>
      // </div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            WASEL
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  groups
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={this.validateGroup}
        >
          create new group
        </button>
        <button type="button" class="btn btn-secondary btn-lg">
          volunteer with us
        </button>
      </div>
    );
  }
}

export default App;
