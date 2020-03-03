import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Game from './Game';

const App = () => (
  <>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/game" component={Game} />
  </>
);

export default App;
