import React from 'react';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import Aux from '../Aux/Aux';
import classes from './LayoutHeader.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const LayoutHeader = () => (
  <Aux>
    <div className={[classes.Affix, classes.Nav].join(' ')}>
      <div className={classes.Center}>
        <Header />
        <Footer />
      </div>
    </div>
  </Aux>
);

export default LayoutHeader;
