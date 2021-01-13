import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import LoggedHeader from "./components/Header/LoggedHeader";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Home from "./components/Home/Home";
import {isLogged} from "./components/_utils/auth/auth.functions";
import MessagesContainer from "./components/Messages/MessagesContainer";
import HomeAccount from "./components/Account/HomeAccount";
import EditHomeAccount from "./components/Account/Edit.HomeAccount";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import SomeoneElseAccount from "./components/Account/SomeoneElseAccount";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged())

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    
    <Router>
      <ToastContainer position="top-center"/>
      {isLoggedIn ? <LoggedHeader onLogout={handleLogout} /> : <Header />}
      {/* <Header /> */}
      <main className="container-fluid">
      <Switch>

        <Route path="/" exact>
        {isLoggedIn ? <Home />  : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <LoginForm onLogin={handleLogin} />
        </Route>

        <Route path="/signup" component={RegistrationForm} />

        <Route path="/account/:id" exact>
        {isLoggedIn ? <HomeAccount onLogout={handleLogout} />: <Redirect to="/login" />}
        </Route>

        <Route path="/account/:id/edit" exact>
        {isLoggedIn ? <EditHomeAccount />: <Redirect to="/login" />}
        </Route>

        <Route path="/messages/:id" exact>
        {isLoggedIn ? <MessagesContainer messageQuery="getOneMessage" />  : <Redirect to="/login" />}
        </Route>

        

        {/* <Route path="/Account" exact component={Account} /> */}
      </Switch>
      </main>
    </Router>
  );
};

export default App;
