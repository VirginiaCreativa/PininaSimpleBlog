import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../Aux/Aux';
import NavItem from './NavigationItem';
import classes from './Navigations.scss';

const Header = ({ navAlign, listSpace }) => (
  <Aux>
    <ul
      className={[
        bootstrap.nav,
        bootstrap['flex-column'],
        classes.Navigations,
      ].join(' ')}
      style={{ marginTop: listSpace + 'px' }}
    >
      <NavItem navAlign={navAlign} toLink="/" activeClassName={false}>
        Home
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/sobre">
        Sobre de mí
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/ensenanza">
        Enseñanza
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/estilodevida">
        Estilo de Vida
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/contactos">
        Contactos
      </NavItem>
    </ul>
  </Aux>
);

export default Header;
