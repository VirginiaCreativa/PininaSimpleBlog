import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout';

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Layout>Hola!</Layout>
      </React.Fragment>
    );
  }
}

export default Home;
