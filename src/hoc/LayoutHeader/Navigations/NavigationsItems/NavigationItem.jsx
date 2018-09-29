import React from 'react';
import { NavLink } from 'react-router-dom';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import { withRouter } from 'react-router';
import Aux from '../../../Aux/Aux';

const NavigationItem = ({
  toLink,
  activeClassName,
  navAlign,
  children,
  onSideout,
}) => {
  const classStyle = {
    textAlign: navAlign,
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
