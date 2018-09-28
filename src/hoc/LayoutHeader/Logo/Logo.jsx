import React from 'react';
import Aux from '../../Aux/Aux';
import classes from './Logo.scss';

const Logo = ({ sizeTitle }) => {
  const classStyle = {
    fontSize: sizeTitle + 'rem',
  };
  return (
    <Aux>
      <div className={classes.Logo}>
        <h1 style={classStyle}>PININA</h1>
        <h6>Simple Blog</h6>
      </div>
    </Aux>
  );
};

export default Logo;
