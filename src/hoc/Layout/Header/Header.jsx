import React from 'react';
import Aux from '../../Aux/Aux';
import classes from './Header.scss';

const Header = () => (
  <Aux>
    <div className={classes.Logo}>
      <h1>PININA</h1>
      <h6>Simple Blog</h6>
    </div>
  </Aux>
);

export default Header;
