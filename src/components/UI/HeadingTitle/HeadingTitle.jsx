import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import classes from './HeadingTitle.scss';
import Aux from '../../../hoc/Aux/Aux';

import { CURRENT_MESES } from '../../../scripts/config';

const HeadeingTitle = ({ title, detailsHead }) => {
  let details;

  if (detailsHead === 1) {
    details = (
      <ul className={bootstrap['list-unstyled']}>
        <li className={bootstrap['list-inline-item']}>
          <i className="far fa-clock" />
          {CURRENT_MESES}
        </li>
        <li className={bootstrap['list-inline-item']}>
          <i className="far fa-eye" />
          <span className={classes.Count}>15</span>
          vista
        </li>
        <li className={bootstrap['list-inline-item']}>
          <i className="fas fa-share-alt" />
          compartir
        </li>
      </ul>
    );
  } else if (detailsHead === 2) {
    details = (
      <div className={classes.detailsAdv}>
        <ul className={bootstrap['list-unstyled']}>
          <li className={bootstrap['list-inline-item']}>item 1</li>
          <li className={bootstrap['list-inline-item']}>
            <i className="far fa-clock" />
            Item
          </li>{' '}
        </ul>
        <ul className={bootstrap['list-unstyled']}>
          <li className={bootstrap['list-inline-item']}>
            <i className="far fa-eye" />
            Item
          </li>
          <li className={bootstrap['list-inline-item']}>
            <i className="far fa-comments" />
            item 2
          </li>
          <li className={bootstrap['list-inline-item']}>
            <i className="fas fa-share-alt" />
            item 3
          </li>
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
