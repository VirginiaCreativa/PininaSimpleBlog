import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../containers/Home';
import SobreMi from '../../containers/SobreMi';
import MasSignificados from '../../containers/MasSignificados';
import Cursos from '../../containers/Cursos';
import Blog from '../../containers/Blog';
import Contactos from '../../containers/Contactos';
import NotFound from '../../containers/NotFound';
import Aux from '../Aux/Aux';

class Routes extends Component {
  state = {};

  render() {
    return (
      <Aux>
        <Switch>
          <Route path="/sobremi" component={SobreMi} />
          <Route path="/massignificados" component={MasSignificados} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/blog" component={Blog} />
          <Route path="/contactos" component={Contactos} />
          <Route path="/NotFound" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/NotFound" />
        </Switch>
      </Aux>
    );
  }
}

export default Routes;
