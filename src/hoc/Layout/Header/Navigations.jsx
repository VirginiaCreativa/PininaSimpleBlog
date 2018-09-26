import React from 'react';
import { NavLink } from 'react-router-dom';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../Aux/Aux';
import classes from './Navigations.scss';
import { withRouter } from 'react-router';

const Header = () => (
  <Aux>
    <ul
      className={[
        bootstrap.nav,
        bootstrap['flex-column'],
        classes.Navigations,
      ].join(' ')}
    >
      <li>
        <NavLink
          to="/"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ensenanza"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          Enseñanza
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/estilodevida"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          Estilo de Vida
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </Aux>
);

export default withRouter(Header);
