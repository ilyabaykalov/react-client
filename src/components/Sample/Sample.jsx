import React from 'react';

import { sample } from './Sample.module.scss';

export const Sample = ({ name }) => {

  return (
      <h1 className={ sample }>Hello { name }</h1>
  );
};
