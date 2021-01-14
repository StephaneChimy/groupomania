//Imports
import fetchApi from "../api/api.service";
import Cookies from "js-cookie";

import { userDeleted } from "../toasts/users";
import { userLogout } from "../toasts/users";

const CryptoJS = require("crypto-js");

// Variables
const REGEX = {
  // eslint-disable-next-line no-useless-escape
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NAME_REGEX: "^([p{L}]+)([p{L}- ']*)$",
  SURNAME_REGEX: "^([p{L}]+)([p{L}- ']*)$",
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

async function logout(page) {
  Cookies.remove("groupomania");
  Cookies.remove("groupomaniaId");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  try {
    const response = await fetchApi("auth/logout", page, requestOptions);
    if (response.ok) {
      userLogout();
    }
  } catch (error) {
    return console.log(error);
  }
}

const getAccount = (accountId, page) => {
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  return fetchApi(`auth/account/${accountId}`, page, requestOptions);
};

const deleteAccount = async (accountId, page) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  await fetchApi(`auth/account/${accountId}`, page, requestOptions);
  await logout();
  return userDeleted();
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
