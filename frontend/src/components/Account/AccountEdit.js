import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getEmailFromCrypto, REGEX } from "../../_utils/auth/auth.functions";
import { userModified } from "../../_utils/toasts/users";

const EditAccount = ({ ...account }) => {
  const { id } = useParams();
  const [emailValue, setEmailValue] = useState(
    getEmailFromCrypto(account.email)
  );
  const [firstnameValue, setFirstnameValue] = useState(account.name);
  const [surnameValue, setSurnameValue] = useState(account.surname);

  const SendData = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name: firstnameValue,
        surname: surnameValue,
      }),
    };
    fetch(`http://localhost:3000/api/auth/account/${id}`, requestOptions)
      .then((response) => {
        console.log(response.json());
        if (response.ok) {
          userModified();
          account.onPost();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="col-11 mb-3">
      <div className="card">
        <div className="card-header">
          <div className="justify-content-between align-items-center">
            <div className="justify-content-between align-items-center">
              <div className="ml-2">
                <div className="h5 m-0">@{account.name}</div>
                <div className="h7 text-muted">{account.name} {account.surname}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="h5 card-title text-center">Edit Profile</h2>

          <form onSubmit={SendData}>
            <div className="form-group">
              <label htmlFor="nom">nom</label>
              <input
                id="nom"
                name="nom"
                type="text"
                className="form-control"
                placeholder="Nom"
                pattern={REGEX.NAME_REGEX}
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
                pattern={REGEX.SURNAME_REGEX}
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
                readOnly={true}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                pattern={REGEX.PASSWORD_REGEX}
                title="Minimum de 4 lettres et 1 chiffre"
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </form>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export default EditAccount;
