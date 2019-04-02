import React, { Component } from "react";
import { setJwtCookie, getUser } from "../../services/AuthService";

class RowGroup extends Component {
  state = {
    pop: "hide"
  };

  render() {
    <React.Fragment>
      <tr>
        <td>{this.props.group.name}</td>
        <td>{this.props.group.city}</td>
        <td>
          <button onClick={this.props.showGroup}>show</button>
          <div className={this.state.pop}>
            <h1>name {this.props.group.id}</h1>
            {this.props.group.city}
            -----------
            {this.props.group.id}
            <button onClick={this.props.hideGroup}> close </button>
          </div>
        </td>
        <td>
          {userIsInGroup ? (
            <button onClick={this.props.leaveGroup} value={group.id}>
              Delete
              {/* {console.log(group.city)} */}
            </button>
          ) : (
            <button onClick={this.props.joinGroup} value={group.id}>
              Join
            </button>
          )}
        </td>
      </tr>
    </React.Fragment>;
  }
}

export default RowGroup;
