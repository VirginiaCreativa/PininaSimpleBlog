import React from 'react';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import Aux from '../../../Aux/Aux';
import Logo from '../../Logo/Logo';
import SideDrawer from './SideDrawer';
import classes from './HeaderSiderawer.scss';

const HeaderSidedrawer = ({ onShow, toggleNavbar, onClosed, onSideout }) => {
  let toggleMenu = [classes.btnMenu];
  if (toggleNavbar) toggleMenu = [classes.btnMenu, classes.On].join(' ');
  return (
    <Aux>
      <div
        className={[
          classes.HeaderSidedrawer,
          bootstrapGrid['d-block'],
          bootstrapGrid['d-sm-auto'],
          bootstrapGrid['d-md-none'],
        ].join(' ')}
      >
        <Logo sizeLogo="4.75" alignLogo="center">
          <div
            className={classes.Navbar}
            style={{ zIndex: toggleNavbar ? '400' : '100' }}
          >
            <button className={toggleMenu} type="button" onClick={onShow}>
              <span />
            </button>
          </div>
        </Logo>
        <SideDrawer
          toggleNavbar={toggleNavbar}
          onClosed={onClosed}
          onSideout={onSideout}
        />
      </div>
    </Aux>
  );
};
export default HeaderSidedrawer;
