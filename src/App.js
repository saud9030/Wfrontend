import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import CreatGroupForm from "./components/authForm.js/CreateGroupForm";
import Home from "./components/Home";
import ViewGroups from "./components/authForm.js/viewGroups";
import ViewEvents from "./components/authForm.js/viewEvents";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

// import Profile from "./components/Profile";
class App extends Component {
  state = {
    user: null,
    activePage: "home"
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = activePage => {
    this.setState({ activePage });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("home");
  };
  onSignout = () => {
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    return (
      <div id="mainDiv">
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
        <Home
          user={user}
          changeActivePage={this.changeActivePage}
          active={activePage}
        />

        <div className="container">
          {/* {activePage === "home" ? <Home /> : ""} */}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "/api/groups" ? (
            <ViewGroups changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "api/group" ? (
            <CreatGroupForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "api/groups" ? (
            <ViewEvents changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {/* when the user log in , user will go to the home page **home should be changed when there is something to show in profile */}
          {/* {activePage === "profile" ? <Home /> : ""} */}
        </div>

        <footer class="page-footer font-small cyan darken-3">
          <div class="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="#">Wasel</a>
          </div>
          <span> created by Saud Almutairi </span>
          <div>
            <a href="https://twitter.com/saud95t">
              <img className="contactMe" src={twitter} alt="myTwitterPage" />
            </a>
            <a href="https://github.com/saud9030">
              <img className="contactMe" src={github} alt="myGithubPage" />
            </a>
            <a href="https://www.linkedin.com/saud8almutairi/">
              <img className="contactMe" src={linkedin} alt="myLinkedinPage" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
