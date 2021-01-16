//Imports
import fetchApi from "../api/api.service";
import Cookies from "js-cookie";

import { userDeleted } from "../toasts/users";
import { userLogout } from "../toasts/users";

const CryptoJS = require("crypto-js");

// Variables
const REGEX = {
  NAME_REGEX: "^([p{L}]+)([p{L}- ']*)$",
  SURNAME_REGEX: "^([p{L}]+)([p{L}- ']*)$",
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
