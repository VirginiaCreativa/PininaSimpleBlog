import React from 'react';
import PropTypes from 'prop-types';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import classes from './Layout.scss';
import Aux from '../Aux/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <Aux>
    <main>{children}</main>
  </Aux>
);
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
