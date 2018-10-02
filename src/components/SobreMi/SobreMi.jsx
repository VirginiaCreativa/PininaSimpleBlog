import React from 'react';
import Firme from './Firme';
import Aux from '../../hoc/Aux/Aux';

const SobreMi = ({ children }) => (
  <Aux>
    <section>{children}</section>
    <Firme />
  </Aux>
);

export default SobreMi;
