import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Auth from './Auth';
import Game from './Game';
import LandingPage from './Landing';

import 'normalize.css';
import './App.css';

const App = () => (
  <>
    <Route exact path="/" component={LandingPage} />
    <Route path="/auth" component={Auth} />
    <PrivateRoute path="/game" component={Game} />
  </>
);

export default App;
