import PropTypes from "prop-types";
import React from "react";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h1>Welcome {props.username}</h1>;
  //   } else {
  //     return <h2>Please Log in to continue.</h2>;
  //   }
  //   return props.isLoggedIn ? (
  //     <h1>Welcome {props.username}</h1>
  //   ) : (
  //     <h1>Please Log in to continue.</h1>
  //   );
  const welcomeMessage = <h1>Welcome {props.username}</h1>;

  const loginMessage = <h1>Please Log in to continue.</h1>;

  return props.isLoggedIn ? welcomeMessage : loginMessage;
}

UserGreeting.Proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: true,
  username: "Guest",
};

export default UserGreeting;
