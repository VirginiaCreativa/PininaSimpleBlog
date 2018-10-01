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
      <NavItem navAlign={navAlign} toLink="/sobremi" onSideout={onSideout}>
        Sobre mí
      </NavItem>
      <NavItem
        navAlign={navAlign}
        toLink="/massignificados"
        onSideout={onSideout}
      >
        + Significados
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/cursos" onSideout={onSideout}>
        Cursos
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/blog" onSideout={onSideout}>
        Blog
      </NavItem>
      <NavItem navAlign={navAlign} toLink="/contactos" onSideout={onSideout}>
        Contactos
      </NavItem>
    </ul>
  </Aux>
);

export default Header;
