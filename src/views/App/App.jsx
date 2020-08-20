import React from 'react';
import { string } from 'prop-types';

import { Sample } from '@components/Sample';

import { container, logo } from './App.module.scss';

export const App = ({ name = 'World' }) => (
  <div className={ container }>
    <Sample name={ name }/>
    <img className={ logo } src='/public/logo.svg' alt='React.js'/>
  </div>
);

App.propTypes = {
  name: string,
};
