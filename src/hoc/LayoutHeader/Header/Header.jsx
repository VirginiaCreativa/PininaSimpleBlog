import React from 'react';
import Aux from '../../Aux/Aux';
import classes from './Header.scss';
import Logo from '../Logo/Logo';

import Nav from '../Navigations/NavigationsItems/Navigations';

const Header = () => (
  <Aux>
    <Logo />
    <Nav />
  </Aux>
);

export default Header;
