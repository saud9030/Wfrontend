import React from "react";
import { arch } from "os";

// import pic2 from "./picture2.JPG";

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
      <React.Fragment>
        {/* <div class="container">
          <div class="row">
            <div class="col align-self-start" />
            <div class="col align-self-center">here</div>
            <div class="col align-self-end" />
          </div>
        </div> */}
        <div>
          <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 "
                  src="https://www.kfshrc.edu.sa/store/headline/5900.png"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 "
                  src="http://www.alhayat.com/uploads/images/2018/06/10/15633.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 "
                  src="https://www.alyaum.com/uploads/images/2018/08/28/434336.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
          <div class="container buttonContainer">
            <button
              id="createButton"
              type="button"
              class="btn btn-outline-light btn-lg"
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
            <button
              id="showButton"
              type="button"
              class="btn btn-outline-light btn-lg"
              // onClick={() => changeActivePage("api/groups")}
              onClick={() => {
                if (user) {
                  changeActivePage("api/groups/event");
                } else {
                  changeActivePage("sign-up");
                }
              }}
            >
              see events
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Home;
