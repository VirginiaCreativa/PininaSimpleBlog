import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import classes from './styles/global.scss';
import Header from './hoc/Layout/Header/Header';
import Footer from './hoc/Layout/Footer/Footer';
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
            <div className={bootstrapGrid['col-2']}>
              <div className={[classes.Affix, classes.Nav].join(' ')}>
                <div className={classes.Center}>
                  <Header />
                  <Footer />
                </div>
              </div>
            </div>
            <div className={bootstrapGrid['col-10']}>
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
