//Imports
import fetchApi from "../api/api.service";
import Cookies from "js-cookie";

import { userLogout } from "../toasts/users";

const CryptoJS = require("crypto-js");

// Variables
const REGEX = {
  NAME_REGEX: "^([\\p{L}]+)([\\p{L}\\- ']*)$",
  SURNAME_REGEX: "^([\\p{L}]+)([\\p{L}\\- ']*)$",
  TITLE_REGEX: "^([\\p{L}]+)([\\p{L}\\- ',]*)$",
  // Here minimum 4 characters, at least one letter and one number
  // This needs to be changed in production with a minimum of 8 characters and a maximum.
  PASSWORD_REGEX: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{4,}$",
};

//Functions
function getEmailFromCrypto(email) {
  let DecryptedEmail = CryptoJS.AES.decrypt(
    email,
    "Secret Passphrase"
  ).toString(CryptoJS.enc.Utf8);
  return DecryptedEmail;
}

function isLogged() {
  const loggedIn = Cookies.get("groupomania");
  if (loggedIn === "true") {
    return true;
  } else {
    return false;
  }
}

function getIdFromCookie() {
  const groupomaniaId = Cookies.get("groupomaniaId");
  if (groupomaniaId) {
    return groupomaniaId;
  } else {
    return false;
  }
}

function logout(page) {
  Cookies.remove("groupomania");
  Cookies.remove("groupomaniaId");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  console.log(requestOptions);
  return fetchApi("auth/logout", page, requestOptions)
    .then((response) => {
      console.log(response.json());
      if (response.ok) {
        userLogout();
      }
    })
    .catch((error) => console.log(error));
}

const getAccount = (accountId, page) => {
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  return fetchApi(`auth/account/${accountId}`, page, requestOptions);
};

const deleteAccount = (accountId, page) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`auth/account/${accountId}`, page, requestOptions)
    
};

export {
  getEmailFromCrypto,
  REGEX,
  getAccount,
  deleteAccount,
  getIdFromCookie,
  isLogged,
  logout,
};
