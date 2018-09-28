import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../Aux/Aux';
import NavItem from './NavigationItem';
import classes from './Navigations.scss';

const Header = ({ navAlign }) => (
  <Aux>
    <ul
      className={[
        bootstrap.nav,
        bootstrap['flex-column'],
        classes.Navigations,
      ].join(' ')}
    >
      <NavItem navAlign={navAlign} toLink="/" activeClassName={false}>
        Home
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/sobre" activeClassName>
        Sobre de mí
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/ensenanza" activeClassName>
        Enseñanza
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/estilodevida" activeClassName>
        Estilo de Vida
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/contactos" activeClassName>
        Contactos
      </NavItem>
    </ul>
  </Aux>
);

export default Header;
