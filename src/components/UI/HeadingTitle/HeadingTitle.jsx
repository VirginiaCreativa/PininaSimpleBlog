import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import classes from './HeadingTitle.scss';
import Aux from '../../../hoc/Aux/Aux';

import { CURRENT_MESES } from '../../../scripts/config';

const HeadeingTitle = ({ title, detailsHead, categDetails }) => {
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
          vistas
        </li>
        <li
          className={[bootstrap['list-inline-item'], classes.Compartir].join(
            ' ',
          )}
        >
          <i className="fas fa-share-alt" />
          <span>compartir</span>
          <div className={classes.toggleCompart}>
            <ul className={bootstrap['list-unstyled']}>
              <li>
                <a href="/">
                  <i className="fab fa-facebook-square" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in" />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-whatsapp" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="far fa-envelope" />
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    );
  } else if (detailsHead === 2) {
    details = (
      <div className={classes.detailsAdv}>
        <ul
          className={[bootstrap['list-unstyled'], classes.BaseAdv1].join(' ')}
        >
          <li className={bootstrap['list-inline-item']}>
            <div className={classes.Categoria}>Blog</div>
          </li>
          <li className={bootstrap['list-inline-item']}>
            <i className="far fa-clock" />
            {CURRENT_MESES}
          </li>
        </ul>
        <ul
          className={[bootstrap['list-unstyled'], classes.BaseAdv2].join(' ')}
        >
          <li className={bootstrap['list-inline-item']}>
            <i className="far fa-eye" />
            <span className={classes.Count}>15</span>
            vistas
          </li>
          <li className={bootstrap['list-inline-item']}>
            <i className="fas fa-comments" />
            <span className={classes.Count}>3</span>
            comentarios
          </li>
          <li
            className={[bootstrap['list-inline-item'], classes.Compartir].join(
              ' ',
            )}
          >
            <i className="fas fa-share-alt" />
            <span>compartir</span>
            <div className={classes.toggleCompart}>
              <ul className={bootstrap['list-unstyled']}>
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-square" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin-in" />
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-whatsapp" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="far fa-envelope" />
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
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
