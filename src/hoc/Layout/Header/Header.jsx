import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../Aux/Aux';
import classes from './Header.scss';

const Header = () => (
  <Aux>
    <div className={classes.Logo}>
      <h1>PININA</h1>
      <h6>Simple Blog</h6>
    </div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Aux>
);

export default Header;
