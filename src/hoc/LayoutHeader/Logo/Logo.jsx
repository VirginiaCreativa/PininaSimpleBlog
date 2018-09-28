import React from 'react';
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
        <h1 style={classStyle}>PININA</h1>
        <h6>Simple Blog</h6>
        {children}
      </div>
    </Aux>
  );
};

export default Logo;
