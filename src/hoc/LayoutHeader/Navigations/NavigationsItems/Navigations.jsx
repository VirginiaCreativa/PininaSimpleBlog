import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../Aux/Aux';
import NavItem from './NavigationItem';
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
      <NavItem toLink="/" activeClassName={false}>
        Home
      </NavItem>
      <NavItem toLink="/sobre" activeClassName>
        Sobre de mí
      </NavItem>
      <NavItem toLink="/ensenanza" activeClassName>
        Enseñanza
      </NavItem>
      <NavItem toLink="/estilodevida" activeClassName>
        Estilo de Vida
      </NavItem>
      <NavItem toLink="/contactos" activeClassName>
        Contactos
      </NavItem>
    </ul>
  </Aux>
);

export default Header;
