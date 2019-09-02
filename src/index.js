import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIn from './pages/signInPage'
import SignUp from './pages/signUpPage'
import Profile from './pages/profilePage'
import Error404 from './pages/404Page'
import PrivateRoute from './components/privateRouter'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <PrivateRoute component={Profile} path="/profile" exact />
      <Route component={Error404} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
