import React from 'react';
import classes from './HeadingTitle.scss';
import Aux from '../../../hoc/Aux/Aux';

const HeadeingTitle = ({ title, childen }) => (
  <Aux>
    <div className={classes.HeadeingTitle}>
      <h2>
        <span>{title}</span>
      </h2>
    </div>
    {childen}
  </Aux>
);

export default HeadeingTitle;
