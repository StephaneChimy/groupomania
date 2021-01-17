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
      <div className="card col-11">
        <img className="card-img-top mx-auto col-8" src={logo} alt="logo and name of the company Groupomania" />
        <div className="card-body">
          <h2 className="h5 card-title text-center">Login</h2>
          <form onSubmit={sendData}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
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
