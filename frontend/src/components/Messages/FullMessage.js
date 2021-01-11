import React, { useState, useEffect } from "react";
import Message from "./Message";
//import PostMessage from "../Messages/PostMessage";
import { useParams } from "react-router-dom";
import { getOneMessage } from "../_utils/messages/messages.functions";
import { NoMessageFound } from "../Infos/NotFound";

const FullMessage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

  const fetchMessage = () => {
    getOneMessage(id).then(
      (res) => {
        if (res.status === 200) {
          res.json().then((result) => {
            //console.log(result);
            setMessages(result);
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
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  //   const handlePost = () => {
  //     fetchMessages()
  //   }

  if (error && error === 404) {
    return (
      <div>
        <NoMessageFound />
      </div>
    );
  } else if (error) {
    return <div>Erreur : {error}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      messages && (
        <React.Fragment>
          {/* <PostMessage onPost={handlePost} /> */}
          <section className="row justify-content-center">
            <div className="col-12 mb-3">
              <Message {...messages} />
            </div>
          </section>
        </React.Fragment>
      )
    );
  }
};
export default FullMessage;
