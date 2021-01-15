import functions from "../../_utils/_functions";
import {
  getEmailFromCrypto,
  deleteAccount,
} from "../../_utils/auth/auth.functions";
import { useHistory } from "react-router-dom";

const Account = ({ ...account }) => {
  const history = useHistory();

  const onClickDeleteAccount = (e) => {
    e.preventDefault();
    account.onLogout();
    deleteAccount(account.id).then(() => history.push("/"));
  };
  return (
    <div className="col-11 mb-3">
      <div className="card">
        <div className="card-header">
          <div className="justify-content-between align-items-center">
            <div className="justify-content-between align-items-center">
              <div className="ml-2">
                <div className="h5 m-0">@{account.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o" />
            {/* {(Date.now() - Date.parse(message.createdAt))} */}
            {" Membre depuis le " +
              functions.convertDateForHuman(account.createdAt)}
          </div>

          <h5 className="card-title">Informations:</h5>

          {/* <p className="card-text">Id : {account.id}</p> */}

          <p className="card-text">Nom : {account.name}</p>
          <p className="card-text">Prénom: {account.surname}</p>
          <p className="card-text">
            Email: {getEmailFromCrypto(account.email)}
          </p>
        </div>
        <div className="card-footer">
          {/* <a href="#" className="card-link">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comment
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-mail-forward"></i> Share
          </a> */}

          {account.canEdit === true && (
            <a
              href={"/account/" + account.id + "/edit"}
              className="card-link text-dark"
            >
              <i className="fa fa-edit"></i> Edit
            </a>
          )}
          {account.canEdit === true && (
            <a
              href="/"
              className="card-link text-danger"
              onClick={onClickDeleteAccount}
            >
              <i className="fa fa-ban"></i> Erase
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
