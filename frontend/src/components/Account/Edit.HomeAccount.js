import React, { useState, useEffect } from "react";
import EditAccount from "./Edit.Account";
import { useParams } from "react-router-dom";
import { getAccount } from "../_utils/auth/auth.functions"



const HomeAccount = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [account, setAccount] = useState([]);
  const { id } = useParams();


  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

  async function fetchAccount(){
    getAccount(id)
      .then((res) => res.json())
      .then(
        (result) => {
            console.log(result);
          setAccount(result);
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
  }

  useEffect(() => {
    fetchAccount()
  }, []);

  const handlePost = () => {
    fetchAccount()
  }

  // const handlePost = () => {
  //   fetchAccount()
  // }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      account &&
      <React.Fragment>
        {/* <PostMessage onPost={handlePost} /> */}
        <section className="row justify-content-center">
          {/* {account.map((message) => (
            <React.Fragment key={message.id}> */}
              <EditAccount {...account} onPost={handlePost} />
              {/* <Message title={message.title} content={message.content} createdAt={message.createdAt} userName={message.User.name}  /> */}
            {/* </React.Fragment>
          ))} */}
        </section>
        {/* <UserMessages/> */}
      </React.Fragment>
      
      
    );
  }
};
export default HomeAccount;
