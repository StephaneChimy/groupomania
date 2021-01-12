import React, { useState, useEffect } from "react";
// import TeaserMessage from "../Messages/TeaserMessage";
import Message from "../Messages/Message";
// import Messages from "../Messages/TeaserMessage";
import { useParams } from "react-router-dom";
import { getAllUserMessages } from "../_utils/messages/messages.functions";
import { NoMessageFound } from "../Infos/NotFound";
import FadeIn from "react-fade-in";
import InfiniteScroll from "react-infinite-scroll-component";

const UsersMessages = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

  async function fetchMessages() {
    getAllUserMessages(id, page).then(
      (res) => {
        if (res.status === 200) {
          res.json().then((result) => {
            setMessages([...messages, ...result.messages]);
            setTotalItems(result.totalItems);
            console.log(result);
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
    fetchMessages();
  }, [page]);

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
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      messages &&
      messages.length > 0 && (
        <React.Fragment>
          <InfiniteScroll
            dataLength={totalItems}
            next={() => setPage(+1)}
            hasMore={true}
          >
            <section className="row justify-content-center">
              {messages.map((message) => (
                <React.Fragment key={message.id}>
                  <FadeIn className="col-11 mb-3" transitionDuration={2000}>
                    <Message {...message} teaserMessage={true} />
                  </FadeIn>
                </React.Fragment>
              ))}
            </section>
          </InfiniteScroll>
        </React.Fragment>
      )
    );
  }
};
export default UsersMessages;
