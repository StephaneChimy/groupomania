import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/icon-above-font.png";
import {isLogged} from "../../_utils/auth/auth.functions";
import { userConnected } from "../../_utils/toasts/users";

const LoginForm = ({ onLogin }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (history && isLogged()) {
      history.push("/");
    }
  }, [history]);

  //useEffect(() => {
  // POST request using fetch inside useEffect React hook

  const sendData = (e) => {
    e.preventDefault();
    console.log(emailValue, passwordValue);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    };
    console.log(requestOptions);

    fetch("http://localhost:3000/api/auth/login", requestOptions)
      //.then((response) => console.log(response))
      .then((response) => {
        if (response.status === 200) {
          // Redirect
          history.push("/");
          // Will update Header state
          onLogin();
          userConnected();
        }
      })
      .catch((error) => console.log(error));
  };

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  return (
    <section className="row mx-auto justify-content-center">
      <div className="card col-8">
        <img className="card-img-top mx-auto col-8" src={logo} alt="logo of the company Groupomania" />
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={sendData}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
