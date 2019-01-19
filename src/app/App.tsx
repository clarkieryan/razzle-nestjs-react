import * as React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import PrivateRoute from './components/PrivateRoute';

import Home from './scenes/home/Home';
import Player from './scenes/player/';

import './App.css';
import { AuthProvider } from './helpers/auth';

const App = () => (
  <AuthProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/player" component={Player} />
    </Switch>
  </AuthProvider>
);

export default App;
