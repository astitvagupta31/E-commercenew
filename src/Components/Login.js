import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserService from "../Services/UserService";
import {useDispatch} from "react-redux"
import { Navigate } from "react-router-dom";

import "./styles.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  //   setIsSubmitted(true);}

    const loginHandler = (event) => {
      event.preventDefault();
  
      UserService.loginUser({ username: username, password: password }).then((res) => {
        if (res.data != "") {
          localStorage.setItem("token", res.data.token);
          useDispatch({ type: "logged", value: true });
          Navigate("/list");
        } else {
          useDispatch({ type: "logged", value: false });
        }
      });
    };

  // JS code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={loginHandler}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" id="username" required onChange={usernamechange}/>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" id="password" name="password" required onChange={passwordchange}/>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;