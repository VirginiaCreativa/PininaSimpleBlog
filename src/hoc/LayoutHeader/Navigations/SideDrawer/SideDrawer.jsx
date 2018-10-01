import React from 'react';
import Aux from '../../../Aux/Aux';
import Backgrop from '../../../../components/UI/Backgrop/Backgrop';
import Logo from '../../Logo/Logo';
import Navigations from '../NavigationsItems/Navigations';
import Footer from '../../Footer/Footer';
import classes from './SideDrawer.scss';

const SideDrawer = ({ toggleNavbar, onClosed, onSideout }) => {
  let attachedToggle = [classes.SideDrawer, classes.Close].join(' ');
  if (toggleNavbar) {
    attachedToggle = [classes.SideDrawer, classes.Open].join(' ');
  }
  return (
    <Aux>
      <Backgrop backgropShow={toggleNavbar} clicked={onClosed} />
      <div className={attachedToggle}>
        <div className={classes.Center}>
          <Logo sizeLogo="3.825" alignLogo="center" colorLogo="#fff" />
          <Navigations
            navAlign="center"
            navSize="1.125"
            listSpace="30"
            onSideout={onSideout}
          />
          <Footer redAlign="center" />
        </div>
      </div>
    </Aux>
  );
};

export default SideDrawer;
