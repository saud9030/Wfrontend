import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setJwtCookie, getUser } from "../../services/AuthService";

class ViewGroups extends Component {
  state = {
    groups: []
  };

  componentDidMount() {
    let url = `${apiUrl}/api/groups`;
    console.log("here");
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
  joinGroup = ({ currentTarget }) => {
    let groupID = currentTarget.value;
    let url = `${apiUrl}/user/${getUser().id}/groups`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user_id: getUser().id, group_id: groupID })
    });
    console.log("done");
    // console.log(id);
  };
  render() {
    let something = [];
    // if (this.state.groups.length > 0) {
    something = this.state.groups.map(group => (
      <tr>
        {/* <th scope="row">1</th> */}
        <td>{group.name}</td>
        <td>{group.city}</td>
        <td>show</td>
        <td>
          <button onClick={this.joinGroup} value={group.id}>
            Join
          </button>
        </td>
      </tr>
    ));
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
