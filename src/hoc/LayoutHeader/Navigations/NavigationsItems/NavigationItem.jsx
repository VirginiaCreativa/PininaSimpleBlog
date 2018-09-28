import React from 'react';
import { NavLink } from 'react-router-dom';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import { withRouter } from 'react-router';
import Aux from '../../../Aux/Aux';

const NavigationItem = ({ toLink, activeClassName, children }) => {
  return (
    <Aux>
      <li>
        <NavLink
          to={toLink}
          className={bootstrap['nav-link']}
          activeClassName={activeClassName === true ? 'is-selected' : ''}
        >
          {children}
        </NavLink>
      </li>
    </Aux>
  );
};

export default withRouter(NavigationItem);
