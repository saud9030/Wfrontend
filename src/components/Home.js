import React from "react";
import { arch } from "os";

// if user logged, then user is able to create new group
// const authenticatedOptions = (changeActivePage, user) => (
//   <React.Fragment>
//     <button
//       type="button"
//       class="btn btn-primary btn-lg"
//       onClick={
//         () =>
//           // if (user) {
//           changeActivePage("api/group")
//         // } else {
//         //   changeActivePage("sign-up");
//         // }
//       }
//     >
//       create new group
//     </button>
//   </React.Fragment>
// );
// // if there is no user, then it goes to signup page ** later on create signup/signin page
// const unauthenticatedOptions = changeActivePage => (
//   <React.Fragment>
//     <button
//       type="button"
//       class="btn btn-primary btn-lg"
//       onClick={() => changeActivePage("sign-up")}
//     >
//       create new group
//     </button>
//   </React.Fragment>
// );

const Home = ({ user, changeActivePage, active }) => {
  console.log(active);
  if (active === "home") {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => {
            if (user) {
              changeActivePage("api/group");
            } else {
              changeActivePage("sign-up");
            }
          }}
        >
          create group
        </button>
        <button type="button" class="btn btn-primary btn-lg">
          see events
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
