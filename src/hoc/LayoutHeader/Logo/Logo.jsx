import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../Aux/Aux';
import classes from './Logo.scss';

const Logo = ({ sizeLogo, alignLogo, colorLogo, children }) => {
  const classStyle = {
    fontSize: sizeLogo + 'rem',
    textAlign: alignLogo,
    color: colorLogo,
  };
  return (
    <Aux>
      <div className={classes.Logo} style={classStyle}>
        <Link to="/">
          <h1 style={classStyle}>PININA</h1>
          <h6>Todo Simple</h6>
        </Link>
        {children}
      </div>
    </Aux>
  );
};

export default Logo;
