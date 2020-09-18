import React, { Component } from 'react';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import SignupPage from './components/SignUpPage/SignUpPage';
import Home from './components/HomePage/mainHome';

// declare a const App which will will be our main component which will render child components.
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id='App'>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/signup'>
              <SignupPage />
            </Route>
            <Route path='/home'/>
              <Home />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;