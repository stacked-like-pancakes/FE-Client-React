import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
