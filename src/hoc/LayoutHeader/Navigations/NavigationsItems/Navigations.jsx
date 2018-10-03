import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../Aux/Aux';
import NavItem from './NavigationItem';
import classes from './Navigations.scss';

const Header = ({ navAlign, navSize, listSpace, onSideout }) => (
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
        navSize={navSize}
      >
        Home
      </NavItem>
      <NavItem
        navAlign={navAlign}
        toLink="/sobremi"
        onSideout={onSideout}
        navSize={navSize}
      >
        Sobre mí
      </NavItem>
      <NavItem
        navAlign={navAlign}
        toLink="/massignificado"
        onSideout={onSideout}
        navSize={navSize}
      >
        + Significados
      </NavItem>
      <NavItem
        navAlign={navAlign}
        toLink="/cursos"
        onSideout={onSideout}
        navSize={navSize}
      >
        Cursos
      </NavItem>
      <NavItem
        navAlign={navAlign}
        toLink="/blog"
        onSideout={onSideout}
        navSize={navSize}
      >
        Blog
      </NavItem>
      <NavItem
        navAlign={navAlign}
        toLink="/contactos"
        onSideout={onSideout}
        navSize={navSize}
      >
        Contactos
      </NavItem>
    </ul>
  </Aux>
);

export default Header;
