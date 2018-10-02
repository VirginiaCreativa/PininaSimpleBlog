import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import classes from './HeadingTitle.scss';
import Aux from '../../../hoc/Aux/Aux';

const HeadeingTitle = ({ title, detailsHead }) => {
  let details;

  if (detailsHead === 1) {
    details = (
      <ul className={bootstrap['list-unstyled']}>
        <li className={bootstrap['list-inline-item']}>item 1</li>
        <li className={bootstrap['list-inline-item']}>item 2</li>
        <li className={bootstrap['list-inline-item']}>item 3</li>
      </ul>
    );
  } else if (detailsHead === 2) {
    details = (
      <div className={classes.detailsAdv}>
        <ul className={bootstrap['list-unstyled']}>
          <li className={bootstrap['list-inline-item']}>item 1</li>
          <li className={bootstrap['list-inline-item']}>item 2</li>
        </ul>
        <ul className={bootstrap['list-unstyled']}>
          <li className={bootstrap['list-inline-item']}>item 3</li>
          <li className={bootstrap['list-inline-item']}>item 4</li>
          <li className={bootstrap['list-inline-item']}>item 5</li>
        </ul>
      </div>
    );
  } else {
    details = null;
  }

  return (
    <Aux>
      <div className={classes.HeadeingTitle}>
        <h2>
          <span>{title}</span>
        </h2>
      </div>
      <div className={classes.Details}>{details}</div>
    </Aux>
  );
};

export default HeadeingTitle;
