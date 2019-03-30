import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setJwtCookie, getUser } from "../../services/AuthService";
class CreateGroup extends Component {
  state = {
    formData: {
      name: null,
      city: null,
      leader: null,
      founded: null,
      description: null,
      contact_number: null,
      email: null,
      type: null
    },
    err: null
  };

  handleLoginRequest = group => {
    let url = `${apiUrl}/api/group`;

    console.log(group.name);
    console.log(url);
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: group.name,
        city: group.name,
        leader: getUser().email,
        founded: group.founded,
        description: group.description,
        contact_number: group.contact_number,
        email: group.email,
        type: group.type
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) this.setState({ err: data.error });
        else {
          setJwtCookie(data.token);
          this.props.changeActivePage("home");
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
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>create new group</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name of the group</label>
            <input
              name="name"
              className="form-control"
              type="name"
              onChange={this.handleChange}
            />
            <label>Which city are you in? </label>
            <input
              name="city"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>When the group was founded? </label>
            <input
              name="founded"
              type="date"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Tell us about the group </label>
            <input
              name="description"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>group's number </label>
            <input
              name="contact_number"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Group's email </label>
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>what kind of volunteer group are you? </label>
            <input
              name="type"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            create group
          </button>
        </form>
      </div>
    );
  }
}

export default CreateGroup;
