import React from 'react';
import Aux from '../../../Aux/Aux';
import Logo from '../../Logo/Logo';
import Navigations from '../NavigationsItems/Navigations';
import Footer from '../../Footer/Footer';
import classes from './SideDrawer.scss';

const SideDrawer = () => (
  <Aux>
    <div className={classes.SideDrawer}>
      <div className={classes.Center}>
        <Logo sizeLogo="3.825" alignLogo="center" colorLogo="#fff" />
        <Navigations navAlign="center" />
        <Footer />
      </div>
    </div>
  </Aux>
);
export default SideDrawer;
