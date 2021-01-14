import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/icon-above-font.png";
import { userRegistered } from "../_utils/toasts/users";

const RegistrationForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [firstnameValue, setFirstnameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const history = useHistory();

  const SendData = (e) => {
    e.preventDefault();
    console.log(emailValue, passwordValue, firstnameValue, surnameValue);
    //useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name: firstnameValue,
        surname: surnameValue,
        email: emailValue,
        password: passwordValue,
      }),
    };
    fetch("http://localhost:3000/api/auth/signup", requestOptions)
      .then((response) => {
        console.log(response.json());
        if (response.ok) {
          // Redirection to the wall of messages
          userRegistered();
          history.push("/");
        }
      })
      .catch((error) => console.log(error));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
  };

  return (
    <section className="row mx-auto justify-content-center">
      <div className="card col-8">
        <img
          className="card-img-top mx-auto col-8"
          src={logo}
          alt="logo of the company Groupomania"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Register</h5>

          <form onSubmit={SendData}>
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                id="nom"
                name="nom"
                type="text"
                className="form-control"
                placeholder="Nom"
                value={firstnameValue}
                required
                onChange={(event) => setFirstnameValue(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                className="form-control"
                placeholder="Prénom"
                value={surnameValue}
                required
                onChange={(event) => setSurnameValue(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailValue}
                required
                onChange={(event) => setEmailValue(event.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                This email can be visible by other users.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={passwordValue}
                required
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
