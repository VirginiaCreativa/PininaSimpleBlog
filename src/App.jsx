import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import LayoutHeader from './hoc/LayoutHeader/LayoutHeader';
import HeaderSidedrawer from './hoc/LayoutHeader/Navigations/SideDrawer/HeaderSidedrawer';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home';
import Sobre from './containers/Sobre';
import Ensenanza from './containers/Ensenanza';
import EstiloDeVida from './containers/EstiloVida';
import Contactos from './containers/Contactos';

class App extends Component {
  state = {};

  render() {
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
              <HeaderSidedrawer />
              <Layout>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/sobre" component={Sobre} />
                  <Route path="/ensenanza" component={Ensenanza} />
                  <Route path="/estilodevida" component={EstiloDeVida} />
                  <Route path="/contactos" component={Contactos} />
                  <Redirect to="/" />
                </Switch>
              </Layout>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
