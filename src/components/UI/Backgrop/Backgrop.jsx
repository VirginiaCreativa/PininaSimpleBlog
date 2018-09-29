import React from 'react';
import classes from './Backgrop.scss';

const backgrop = ({ backgropShow, clicked, children }) =>
  backgropShow ? (
    <div className={classes.Backgrop} onClick={clicked} role="presentation">
      {children}
    </div>
  ) : null;
export default backgrop;
