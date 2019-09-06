import React from 'react';
import './App.css';
import SignIn from './pages/SignInPage'
import SignUp from './pages/SignUpPage'
import Profile from './pages/ProfilePage'
import Home from './pages/Home'
import Error404 from './pages/Error404Page'

import PrivateRoute from './components/privateRouter'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/signUp" component={SignUp} />
    <PrivateRoute component={Profile} path="/profile" exact />
    <Route component={Error404} />
    </Switch>
  </Router>
  )
  
}

export default App;
