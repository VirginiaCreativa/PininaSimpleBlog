import React from 'react';
import Aux from '../../Aux/Aux';
import classes from './Logo.scss';

const Logo = ({ sizeLogo, alignLogo }) => {
  const classStyle = {
    fontSize: sizeLogo + 'rem',
    textAlign: alignLogo,
  };
  return (
    <Aux>
      <div className={classes.Logo} style={classStyle}>
        <h1 style={classStyle}>PININA</h1>
        <h6>Simple Blog</h6>
      </div>
    </Aux>
  );
};

export default Logo;
