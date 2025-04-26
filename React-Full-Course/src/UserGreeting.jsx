import React from "react";

function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome {props.username}</h1>;
  } else {
    return <h2>Please Log in to continue.</h2>;
  }
}

export default UserGreeting;
