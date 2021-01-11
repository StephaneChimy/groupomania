import logo from "../../images/icon.png";

const Header = () => {
  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-light bg-light navbar-expand-lg scrolling-navbar justify-content-around">
        <a className="navbar-brand" href="/">
          <img src={logo} width={80} height={80} alt="logo of the company Groupomania" />
        </a>

        <div>
          <a className="navbar-brand" href="/signup">
            Register
          </a>
          <a className="navbar-brand" href="/login">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
