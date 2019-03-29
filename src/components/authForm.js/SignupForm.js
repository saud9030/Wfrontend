import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setJwtCookie, setUser } from "../../services/AuthService";
class SignupForm extends Component {
  state = {
    formData: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      number: null,
      gender: null,
      occupation: null,
      bio: null
    },
    err: null
  };

  handleLoginRequest = user => {
    let url = `${apiUrl}/sign-up`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ credentials: user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) this.setState({ err: data.error });
        else {
          setJwtCookie(data.token);
          setUser(data.user);
          this.props.onSignin();
        }
      })
      .catch(e => console.log(e));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.handleLoginRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    console.log(currentTarget.name);
    console.log(currentTarget.value);
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
    console.log(formData);
  };

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>PLEASE SIGNUP</h1>
        {this.state.err ? (
          <div className="alert alert-warning"> {this.state.err} </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>name </label>
            <input
              name="name"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>email </label>
            <input
              name="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              name="password"
              className="form-control"
              type="password"
              onChange={this.handleChange}
            />

            <label>Password Confirmation</label>
            <input
              name="password_confirmation"
              className="form-control"
              type="password"
              onChange={this.handleChange}
            />
            <label>number </label>
            <input
              name="number"
              className="form-control"
              onChange={this.handleChange}
            />

            <label>gender </label>
            <select
              class="custom-select"
              size="2"
              name="gender"
              onClick={this.handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <label>occupation </label>
            <input
              name="occupation"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>bio</label>
            <input
              name="bio"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
