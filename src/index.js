import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { Provider } from 'react-redux';
import { store } from '@store';

import { AppRouter } from '@router/AppRouter';
import history from '@router/history';

import '@stylesheets';

ReactDOM.render(
    <StrictMode>
      <Provider store={ store }>
        <Router history={ history }>
          <AppRouter/>
        </Router>
      </Provider>
    </StrictMode>,
    document.getElementById('root')
);
