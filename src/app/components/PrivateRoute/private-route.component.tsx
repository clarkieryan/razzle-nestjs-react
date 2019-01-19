import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AuthContext } from '../../helpers/auth';

export default function PrivateRoute(props: RouteProps) {
  const { spotifyToken } = useContext(AuthContext);
  if (!spotifyToken) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}
