import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { App } from '@views';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={ App }/>
    </Switch>
  );
};
