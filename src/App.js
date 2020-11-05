import React from 'react';
import './App.css';
import Login from './Registration/Login';
import Register from './Registration/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ForgotPassword from './Registration/ForgotPassword';
import AccountOption from './CreateAccount/AccountOption';
import AccountIndividual from './CreateAccount/AccountIndividual';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Switch>
            <Route path="/" exact={true}>
              <Login />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/accountOptionOrganisation">
              <AccountOption />
            </Route>
            <Route path="/accountOptionIndividual">
              <AccountIndividual />
            </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;