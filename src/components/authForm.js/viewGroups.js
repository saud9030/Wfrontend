import React, { Component } from "react";
import apiUrl from "../../apiConfig";

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
  render() {
    let something = [];
    // if (this.state.groups.length > 0) {
    something = this.state.groups.map(name => <h1>{name.name}</h1>);
    //   console.log("this mine", something[0]);
    // } else console.log("dd");

    return <div>{something}</div>;
  }
}

export default ViewGroups;
