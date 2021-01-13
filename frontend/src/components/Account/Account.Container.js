import React, { useState, useEffect } from "react";
import Account from "./Account";
// import UserMessages from "./UsersMessages";
import MessagesContainer from "../Messages/MessagesContainer";
import { useParams } from "react-router-dom";
import { getAccount } from "../_utils/auth/auth.functions";
import { NoUserFound } from "../Infos/NotFound";

const HomeAccount = ({ onLogout }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [account, setAccount] = useState([]);
  const { id } = useParams();

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

  async function fetchAccount() {
    getAccount(id).then(
      (res) => {
        if (res.status === 200) {
          res.json().then((result) => {
            //console.log(result);
            setAccount(result);
            //console.log(messages);
            setIsLoaded(true);
          });
        } else if (res.status === 404) {
          setError(404);
          setIsLoaded(true);
        } else {
          //console.log(res.statusText);
          setError(res.statusText);
          setIsLoaded(true);
        }
      },
      // Remarque : il faut gérer les erreurs ici plutôt que dans
      // un bloc catch() afin que nous n’avalions pas les exceptions
      // dues à de véritables bugs dans les composants.
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }

  useEffect(() => {
    fetchAccount();
  }, []);

  // const handlePost = () => {
  //   fetchAccount()
  // }
  if (error && error === 404) {
    return (
      <div>
        <NoUserFound />
      </div>
    );
  } else if (error) {
    return <div>Erreur : {error}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      account && (
        <React.Fragment>
          <section className="row justify-content-center">
            <Account {...account} onLogout={onLogout} />
          </section>
          <MessagesContainer messageQuery="getAllUserMessages" />
        </React.Fragment>
      )
    );
  }
};
export default HomeAccount;
