import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../Aux/Aux';
import classes from './Footer.scss';

const Footer = () => (
  <Aux>
    <div className={classes.Redes}>
      <ul
        className={[
          bootstrap['list-unstyled'],
          bootstrap['justify-content-end'],
        ].join(' ')}
      >
        <li className={bootstrap['list-inline-item']}>
          <a href="https://www.instagram.com/virginia.creativa/">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li className={bootstrap['list-inline-item']}>
          <a href="https://www.linkedin.com/in/virginiavelasquezsoto/">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li className={bootstrap['list-inline-item']}>
          <a href="https://github.com/VirginiaCreativa">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </div>
    <div className={classes.Info}>
      <p>
        Dev by
        <span> @Virginia.Creativa</span>
      </p>
      <p>Colombia @2018</p>
    </div>
  </Aux>
);

export default Footer;
