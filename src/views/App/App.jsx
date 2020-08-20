import React from 'react';

import '@stylesheets';

export const App = ({ name }) =>
    <div className='container'>
      <h1>Pure react client, hello { name || 'dude' }</h1>
      <img className='logo'
           src='/public/logo.svg'
           alt='React.js'/>
    </div>;
