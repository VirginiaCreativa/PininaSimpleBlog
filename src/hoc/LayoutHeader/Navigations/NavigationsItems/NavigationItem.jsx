import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../Aux/Aux';

const NavigationItem = ({
  toLink,
  activeClassName,
  navAlign,
  children,
  onSideout,
  navSize,
}) => {
  const classStyle = {
    textAlign: navAlign,
    fontSize: navSize + 'rem',
  };
  return (
    <Aux>
      <li>
        <NavLink
          to={toLink}
          className={bootstrap['nav-link']}
          style={classStyle}
          activeClassName={activeClassName ? 'is-selected' : ' '}
          onClick={onSideout}
        >
          {children}
        </NavLink>
      </li>
    </Aux>
  );
};

export default withRouter(NavigationItem);
