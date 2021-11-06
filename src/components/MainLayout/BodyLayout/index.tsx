import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../../../routes';


export const BodyLayout = () => {
  return (
    <Switch>
      {routes.map(({ children, path }) => {
        return (
          <Route
            key={path as string}
            path={path as string}
          >
            {children}
          </Route>
        );
      })}
    </Switch>
  );
};

