import React from 'react';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import Aux from '../../../Aux/Aux';
import Logo from '../../Logo/Logo';
import SideDrawer from './SideDrawer';
import classes from './HeaderSiderawer.scss';

const HeaderSidedrawer = ({ onShow, toggleNavbar, onClosed, onSideout }) => (
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
        <div className={classes.Navbar}>
          <button className={classes.btnMenu} type="button" onClick={onShow} />
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
export default HeaderSidedrawer;
