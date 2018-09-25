import React from 'react';
import PropTypes from 'prop-types';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import classes from './Layout.scss';
import Aux from '../Aux/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <Aux>
    <div className={bootstrapGrid.container}>
      <div className={bootstrapGrid.row}>
        <div className={bootstrapGrid['col-3']}>
          <div className={[classes.Affix, classes.Nav].join(' ')}>
            <div className={classes.Center}>
              <Header />
              <Footer />
            </div>
          </div>
        </div>
        <div className={bootstrapGrid['col-9']}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  </Aux>
);
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
