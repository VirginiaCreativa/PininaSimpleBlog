import React from 'react';
import Firme from './Firme';
import Aux from '../../hoc/Aux/Aux';

const SobreMi = ({ children }) => (
  <Aux>
    <div>{children}</div>
    <Firme />
  </Aux>
);

export default SobreMi;
