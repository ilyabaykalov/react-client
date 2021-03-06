import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '@store';

import { AppRouter } from '@router/AppRouter';
import history from '@router/history';

import '@stylesheets';

const root = (
  <StrictMode>
    <Provider store={ store }>
      <Router history={ history }>
        <AppRouter/>
      </Router>
    </Provider>
  </StrictMode>
);

ReactDOM.render(root, document.getElementById('root'));
