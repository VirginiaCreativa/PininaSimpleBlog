import React from 'react';
import Aux from '../../../Aux/Aux';
import Logo from '../../Logo/Logo';
import Navigations from '../NavigationsItems/Navigations';
import Footer from '../../Footer/Footer';
import classes from './SideDrawer.scss';

const SideDrawer = ({ toggleNavbar }) => {
  const attachedClose = [classes.SideDrawer, classes.Close].join(' ');
  const attachedOpen = [classes.SideDrawer, classes.Open].join(' ');
  return (
    <Aux>
      <div className={toggleNavbar ? attachedOpen : attachedClose}>
        <div className={classes.Center}>
          <Logo sizeLogo="3.825" alignLogo="center" colorLogo="#fff" />
          <Navigations navAlign="center" listSpace="40" />
          <Footer redAlign="center" />
        </div>
      </div>
    </Aux>
  );
};

export default SideDrawer;
