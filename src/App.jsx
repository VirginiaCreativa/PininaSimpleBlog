import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Home from './containers/Home';

class App extends Component {
  state = {};

  render() {
    return <Home />;
  }
}

export default hot(module)(App);
