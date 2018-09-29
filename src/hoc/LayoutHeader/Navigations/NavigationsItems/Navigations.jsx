import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../Aux/Aux';
import NavItem from './NavigationItem';
import classes from './Navigations.scss';

const Header = ({ navAlign, listSpace, onSideout }) => (
  <Aux>
    <ul
      className={[
        bootstrap.nav,
        bootstrap['flex-column'],
        classes.Navigations,
      ].join(' ')}
      style={{ marginTop: listSpace + 'px' }}
    >
      <NavItem
        navAlign={navAlign}
        toLink="/"
        activeClassName={false}
        onSideout={onSideout}
      >
        Home
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/sobre" onSideout={onSideout}>
        Sobre de mí
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/ensenanza" onSideout={onSideout}>
        Enseñanza
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/estilodevida" onSideout={onSideout}>
        Estilo de Vida
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/contactos" onSideout={onSideout}>
        Contactos
      </NavItem>
    </ul>
  </Aux>
);

export default Header;
