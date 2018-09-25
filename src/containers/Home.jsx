import React, { Component } from 'react';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
import Layout from '../hoc/Layout/Layout';

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className={bootstrapGrid.container}>
          <Layout>Hola!</Layout>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
