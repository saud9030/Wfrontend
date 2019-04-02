import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setJwtCookie, getUser } from "../../services/AuthService";

class ViewEvent extends Component {
  state = {
    events: [],
    name: "",
    activeEvent: null
  };
  //   // this function to show the detalis of a specific event
  //   showEvent = activeEvent => {
  //     this.setState({ activeEvent });
  //   };

  //   //this function to hide the detalis of a event if it's shown
  //   hideEvent = () => {
  //     this.setState({ activeEvent: null });
  //   };

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
  //   //this function to enable the user to leave the group
  //   leaveGroup = ({ currentTarget }) => {
  //     let groupID = currentTarget.value;
  //     let url = `${apiUrl}/user/${getUser().id}/group/${groupID}`;
  //     fetch(url, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     });
  //     // console.log("done");
  //     // console.log(id);
  //   };
  //   joinGroup = ({ currentTarget }) => {
  //     let groupID = currentTarget.value;
  //     let userID = getUser().id;
  //     console.log(groupID);
  //     console.log(userID);
  //     let url = `${apiUrl}/user/${getUser().id}/groups`;
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify({ user_id: getUser().id, group_id: groupID })
  //     });
  //     // console.log("done");
  //     // console.log(id);
  //   };
  render() {
    let something = [];
    something = this.state.events.map(event => {
      return (
        <React.Fragment>
          <tr>
            <td>{event.name}</td>
            <td>{event.location}</td>
            <td>
              <button>show</button>
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
              <th scope="col">Show</th>
            </tr>
          </thead>
          <tbody>{something}</tbody>
        </table>
        {/* <div className={this.state.pop}>
          <h1>name </h1>
          {this.state.groups.city}

          <button onClick={this.hideGroup}> close </button>
        </div> */}
      </div>
    );
  }
}

export default ViewEvent;
