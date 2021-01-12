import React, { useState, useEffect, Component } from "react";
// import TeaserMessage from "../Messages/TeaserMessage";
import Message from "../Messages/Message";
import PostMessage from "../Messages/PostMessage";
import { getMessages } from "../_utils/messages/messages.functions";
import FadeIn from "react-fade-in";
// import InfiniteScroll from "react-infinite-scroller";
import InfiniteScroll from 'react-infinite-scroll-component';


const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

  const fetchMessages = () => {
    getMessages(page)
      .then((res) => res.json())
      .then(
        (result) => {
          setMessages([...messages, ...result.messages]);
          setTotalItems(result.totalItems);
          console.log(result);
          setIsLoaded(true);
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
    fetchMessages();
  }, [page]);
  
  

  const handlePost = () => {
    setPage((page) => { page = 0});
    setMessages(messages.splice(0, messages.length));
    console.log("MESSAGES :" + messages);
    console.log(page);
    // fetchMessages();
  };

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      messages && ( //messages.length > 0 &&
        <React.Fragment>
          <PostMessage onPost={handlePost} />
          <InfiniteScroll
            dataLength={totalItems}
            next={() => setPage(+1)}
            hasMore={true}
          >
            <section className="row justify-content-center">
              {messages.map((message) => (
                  <FadeIn key={message.id} className="col-11 mb-3" transitionDuration={2000}>
                    <Message {...message} teaserMessage={true} />
                  </FadeIn>
              ))}
            </section>
          </InfiniteScroll>
        </React.Fragment>
      )
    );
  }
};
export default Home;
