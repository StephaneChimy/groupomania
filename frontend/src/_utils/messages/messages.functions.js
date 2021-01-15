import fetchApi from "../api/api.service";
import { toastMessageDeleted } from "../toasts/messages";

// import { useState, useEffect } from "react";

// const useFetch = (initialUrl, initialParams = {}, skip = false) => {
//   const [url, updateUrl] = useState(initialUrl);
//   const [params, updateParams] = useState(initialParams);
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [refetchIndex, setRefetchIndex] = useState(0);
//   const queryString = Object.keys(params)
//     .map(
//       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
//     )
//     .join("&");
//   const refetch = () =>
//     setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);
//   useEffect(() => {
//     const fetchData = async () => {
//       if (skip) return;
//       setIsLoading(true);
//       try {
//         const response = await fetch(`${url}${queryString}`);
//         const result = await response.json();
//         if (response.ok) {
//           setData(result);
//         } else {
//           setHasError(true);
//           setErrorMessage(result);
//         }
//       } catch (err) {
//         setHasError(true);
//         setErrorMessage(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [url, params, refetchIndex]);
//   return {
//     data,
//     isLoading,
//     hasError,
//     errorMessage,
//     updateUrl,
//     updateParams,
//     refetch,
//   };
// };

const getMessages = (page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  //console.log(requestOptions);

  return fetchApi(`messages`, page, requestOptions);
};

const getAllUserMessages = (userId, page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  //console.log(requestOptions);

  return fetchApi(`messages/userMessages/${userId}`, page, requestOptions);
};

const getOneMessage = (messageId, page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  //console.log(requestOptions);

  return fetchApi(`messages/${messageId}`, page, requestOptions);
};

const deleteOneMessage = (messageId, page) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };
  //console.log(requestOptions);

  return fetchApi(`messages/${messageId}`, page, requestOptions)
  .then(() => toastMessageDeleted());
  // alert("Message supprimé !");
};

export {
  getOneMessage,
  deleteOneMessage,
  getMessages,
  getAllUserMessages,
  // useFetch,
};
