import React from 'react';
import { NavLink } from 'react-router-dom';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import { withRouter } from 'react-router';
import Aux from '../../Aux/Aux';
import classes from './Navigations.scss';

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
        <NavLink to="/" className={bootstrap['nav-link']}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sobre"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          Sobre de mí
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
          to="/contactos"
          className={bootstrap['nav-link']}
          activeClassName="is-selected"
        >
          Contactos
        </NavLink>
      </li>
    </ul>
  </Aux>
);

export default withRouter(Header);
