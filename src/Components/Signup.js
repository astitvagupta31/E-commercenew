import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Signup() {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  function submithandler(event){
      event.preventDefault()
      setIsSubmitted(true)
  }

  // JS code for Signup form
  const renderForm = (
    <div className="form">
      <form onSubmit={submithandler}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="input-container">
          <label>Mobile Number </label>
          <input type="number" name="number" required />
        </div>
        {/* <div className="input-container">
        <input type="checkbox" name="rememberme" required />
        </div> */}
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="signup-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully Signed Up</div> : renderForm}
      </div>
    </div>
  );
}

export default Signup;