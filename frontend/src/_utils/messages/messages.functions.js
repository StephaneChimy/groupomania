import fetchApi from "../api/api.service";
import { toastMessageDeleted } from "../toasts/messages";

const getMessages = (page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`messages`, page, requestOptions);
};

const getAllUserMessages = (userId, page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`messages/userMessages/${userId}`, page, requestOptions);
};

const getOneMessage = (messageId, page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`messages/${messageId}`, page, requestOptions);
};

const deleteOneMessage = (messageId, page) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`messages/${messageId}`, page, requestOptions)
  .then(() => toastMessageDeleted());
};

export {
  getOneMessage,
  deleteOneMessage,
  getMessages,
  getAllUserMessages,
};
