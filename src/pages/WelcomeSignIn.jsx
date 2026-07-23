import React from "react";
import Welcome from "../components/Welcome";
import SignIn from "../components/SignIn";

const WelcomeSignIn = () => {
  return (
    <div className="flex">
      <Welcome />
      <SignIn />
    </div>
  );
};

export default WelcomeSignIn;
