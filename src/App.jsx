import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import LayoutHeader from './hoc/LayoutHeader/LayoutHeader';
import HeaderSidedrawer from './hoc/LayoutHeader/Navigations/SideDrawer/HeaderSidedrawer';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home';
import Sobre from './containers/Sobre';
import Ensenanza from './containers/Ensenanza';
import EstiloDeVida from './containers/EstiloVida';
import Contactos from './containers/Contactos';
import NotFound from './components/NotFound/NotFound';

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
                <Switch>
                  <Route path="/sobre" component={Sobre} />
                  <Route path="/ensenanza" component={Ensenanza} />
                  <Route path="/estilodevida" component={EstiloDeVida} />
                  <Route path="/contactos" component={Contactos} />
                  <Route path="/NotFound" component={NotFound} />
                  <Route path="/" exact component={Home} />
                  <Redirect from="*" to="/NotFound" />
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
