import React from 'react';
import { string } from 'prop-types';

import { sample } from './Sample.module.scss';

export const Sample = ({ name }) =>
    <h1 className={ sample }>Hello { name }</h1>;

Sample.propTypes = {
  name: string.isRequired
};
