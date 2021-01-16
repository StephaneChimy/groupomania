import logo from "../../images/icon.png";
import {logout} from "../../_utils/auth/auth.functions";
import {getIdFromCookie} from "../../_utils/auth/auth.functions";
import { useHistory } from "react-router-dom";

const LoggedHeader = ({ onLogout }) => {
  const idFromCookie = getIdFromCookie();
  const history = useHistory();

  const onClickLogout = (e) => {
    e.preventDefault();
    logout();
    onLogout();
    history.push("/");
  };

  return (
    <header className="container-fluid p-0">
      <nav className="d-flex align-items-center navbar-light bg-light navbar-expand-lg justify-content-between px-5">
        <a className="navbar-brand" href="/">
          <img src={logo} width={80} height={80} alt="logo of the company Groupomania" />
        </a>

        <div>
          <a className="navbar-brand" href={"/account/" + idFromCookie}>
            Account
          </a>
          <a className="navbar-brand" href="/login" onClick={onClickLogout}>
            Logout
          </a>
        </div>
      </nav>
    </header>
  );
};

export default LoggedHeader;
