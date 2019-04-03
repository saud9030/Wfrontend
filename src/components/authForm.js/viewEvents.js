import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setJwtCookie, getUser } from "../../services/AuthService";

class ViewEvent extends Component {
  state = {
    events: [],
    name: "",
    activeEvent: null
  };

  componentDidMount() {
    let url = `${apiUrl}/api/events`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("hello");
        console.log(res.events);
        console.log(this.state.events);
        this.setState({ events: res.events });
        console.log(this.state.events);
        console.log("here is the fetch", res.event);
        console.log(this.state.events);
      });
  }
  unattend = ({ currentTarget }) => {
    let eventID = currentTarget.value;
    let url = `${apiUrl}/user/${getUser().id}/event/${eventID}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
  };
  attend = ({ currentTarget }) => {
    let eventID = currentTarget.value;
    let url = `${apiUrl}/user/${getUser().id}/events`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user_id: getUser().id, vevent_id: eventID })
    });

    // console.log("done");
    // console.log(id);
  };

  render() {
    let something = [];
    something = this.state.events.map(event => {
      const userIds = event.Attendees.map(attendee => attendee.user_id);
      // to check if the user is already attending this event or not
      const userIsInEvent = userIds.includes(getUser().id);
      return (
        <React.Fragment>
          <tr>
            <td>{event.name}</td>
            <td>{event.location}</td>
            <td>{event.date}</td>
            <td>
              {userIsInEvent ? (
                <button onClick={this.unattend} value={event.id}>
                  unattend
                </button>
              ) : (
                <button onClick={this.attend} value={event.id}>
                  attend
                </button>
              )}
            </td>
            <td />
          </tr>
        </React.Fragment>
      );
    });

    return (
      <div>
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">location</th>
              <th scope="col">date</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>{something}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewEvent;
