import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setJwtCookie, getUser } from "../../services/AuthService";

class ViewGroups extends Component {
  state = {
    groups: [],
    name: ""
  };

  componentDidMount() {
    let url = `${apiUrl}/api/groups`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ groups: res.group });
        console.log("here is the fetch", res.group);
        console.log(this.state.groups);
      });

    //   .then(data => {
    //     let groups = data.list.map(group => {
    //       return (
    //         <div>
    //           <h3>{group.name}</h3>
    //         </div>
    //       );
    //     });
    //     this.setState({ groups: groups });
    //   });
  }
  leaveGroup = ({ currentTarget }) => {
    let groupID = currentTarget.value;
    let url = `${apiUrl}/user/${getUser().id}/group/${groupID}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
      //   body: JSON.stringify({ user_id: getUser().id, group_id: groupID })
    });
    // console.log("done");
    // console.log(id);
  };
  joinGroup = ({ currentTarget }) => {
    let groupID = currentTarget.value;
    let userID = getUser().id;
    console.log(groupID);
    console.log(userID);
    let url = `${apiUrl}/user/${getUser().id}/groups`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user_id: getUser().id, group_id: groupID })
    });
    // console.log("done");
    // console.log(id);
  };
  render() {
    let something = [];
    // if (this.state.groups.length > 0) {
    something = this.state.groups.map(group => {
      const userIds = group.UserGroups.map(userGroup => userGroup.user_id);
      // to check if the user is already a member of this group or not
      const userIsInGroup = userIds.includes(getUser().id);
      return (
        <tr>
          {/* <th scope="row">1</th> */}
          <td>{group.name}</td>
          <td>{group.city}</td>
          <td>
            <button>show</button>
          </td>
          <td>
            {userIsInGroup ? (
              <button onClick={this.leaveGroup} value={group.id}>
                Delete
                {console.log(group.id)}
              </button>
            ) : (
              <button onClick={this.joinGroup} value={group.id}>
                Join
              </button>
            )}
          </td>
        </tr>
      );
    });
    //   console.log("this mine", something[0]);
    // } else console.log("dd");

    return (
      <div>
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Show</th>
              <th scope="col">join</th>
            </tr>
          </thead>
          <tbody>{something}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewGroups;
