import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.scss';
import Aux from '../Aux/Aux';

const Layout = ({ children }) => (
  <Aux>
    <main>{children}</main>
  </Aux>
);
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
