import React from 'react';

import './style.scss';

const App = ({ name }) => {
  return (
      <div className='container'>
        <h1>Pure react application</h1>
        <h2>Hello { name }</h2>
        <img className='logo'
             src='/public/logo.svg'
             alt='React.js'/>
      </div>
  );
};

export default App;
