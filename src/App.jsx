import React, { Component } from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import Routes from './components/Routes/Routes';
import LayoutHeader from './hoc/LayoutHeader/LayoutHeader';
import HeaderSidedrawer from './hoc/LayoutHeader/Navigations/SideDrawer/HeaderSidedrawer';
import Layout from './hoc/Layout/Layout';

import MasSignificado from './containers/MasSignificado';

class App extends Component {
  state = {
    sidedrawer: false,
  };

  handleSideDrawerClosed = () => {
    this.setState({ sidedrawer: false });
  };

  handleOutSide = () => {
    this.setState({ sidedrawer: false });
  };

  handleSideDrawer = () => {
    this.setState(prevState => ({ sidedrawer: !prevState.sidedrawer }));
  };

  render() {
    const { sidedrawer } = this.state;

    return (
      <React.Fragment>
        <div className={bootstrapGrid.container}>
          <div className={bootstrapGrid.row}>
            <div
              className={[
                bootstrapGrid['d-none'],
                bootstrapGrid['d-sm-none'],
                bootstrapGrid['d-md-block'],
                bootstrapGrid['col-md-3'],
              ].join(' ')}
            >
              <LayoutHeader />
            </div>
            <div
              className={[
                bootstrapGrid['col-sm-auto'],
                bootstrapGrid['col-md-9'],
              ].join(' ')}
            >
              <HeaderSidedrawer
                onShow={this.handleSideDrawer}
                toggleNavbar={sidedrawer}
                onClosed={this.handleSideDrawerClosed}
                onSideout={this.handleOutSide}
              />
              <Layout>
                <Routes />
              </Layout>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
