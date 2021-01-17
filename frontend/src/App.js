import "./App.css";
import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import LoggedHeader from "./components/Header/LoggedHeader";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {isLogged} from "./_utils/auth/auth.functions";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountContainer from "./components/Account/AccountContainer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged())
  

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    
    <React.Fragment>
      {/* Toaster componant */}
      <ToastContainer position="top-center"/>
      
      {/* Header componant */}
      {isLoggedIn ? <LoggedHeader onLogout={handleLogout} /> : <Header />}
      <main className="container-fluid">
      <Switch>

        {/* Show the messagesContainer on / route */}
        <Route path="/" exact>
        {isLoggedIn ? <MessagesContainer messageQuery="getMessages" postMessage={true} />  : <Redirect to="/login" />}
        </Route>

        {/* Show rhe loginForm on /login route */}
        <Route path="/login">
          <LoginForm onLogin={handleLogin} />
        </Route>

        {/* Show the registrationForm on /signup route */}
        <Route path="/signup" component={RegistrationForm} />

        {/* Show the accountContainer on /account/:id route */}
        <Route path="/account/:id" exact>
        {isLoggedIn ? <AccountContainer onLogout={handleLogout} />: <Redirect to="/login" />}
        </Route>

        {/* Show the accountContainer with editor : true on  /account/:id/edit route */}
        <Route path="/account/:id/edit" exact>
        {isLoggedIn ? <AccountContainer onLogout={handleLogout} editor={true} />: <Redirect to="/login" />}
        </Route>

        {/* Show the messagesContainer with on messageQuery="getOneMessage" on /messages/:id route*/}
        <Route path="/messages/:id" exact>
        {isLoggedIn ? <MessagesContainer messageQuery="getOneMessage" />  : <Redirect to="/login" />}
        </Route>

      </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
