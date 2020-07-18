import reactDOM from 'react-dom';
import React from 'react';

import App from './App';

reactDOM.render(
    <React.StrictMode>
      <App name={ 'Ilya' }/>
    </React.StrictMode>,
    document.getElementById('root'));
