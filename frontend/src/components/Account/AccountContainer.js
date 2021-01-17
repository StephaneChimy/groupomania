import React, { useState, useEffect } from "react";
import Account from "./Account";
import AccountEdit from "./AccountEdit";
import AccountMessagesContainer from "./AccountMessagesContainer";
import { useParams } from "react-router-dom";
import { getAccount } from "../../_utils/auth/auth.functions";
import { NoUserFound } from "../Infos/NotFound";

const AccountContainer = (params) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [account, setAccount] = useState([]);
  const { id } = useParams();
  const [refetch, setRefetch] = useState(false);

  async function fetchAccount() {
    getAccount(id).then(
      (res) => {
        if (res.status === 200) {
          res.json().then((result) => {
            setAccount(result);
            setIsLoaded(true);
          });
        } else if (res.status === 404) {
          setError(404);
          setIsLoaded(true);
        } else {
          setError(res.statusText);
          setIsLoaded(true);
        }
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }

  useEffect(() => {
    fetchAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const handlePost = () => {
    fetchAccount();
  };

  const handlerDeletedAccount = () => {
    setAccount((account) => account = []);
    setIsLoaded(false);
    setRefetch(true);
  };

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
            {!params.editor ? (
              <Account
                {...account}
                onLogout={params.onLogout}
                onDeletedAccount={handlerDeletedAccount}
              />
            ) : null}
            {params.editor ? (
              <AccountEdit {...account} onPost={handlePost} />
            ) : null}
          </section>
          {!params.editor ? <AccountMessagesContainer /> : null}
        </React.Fragment>
      )
    );
  }
};
export default AccountContainer;
