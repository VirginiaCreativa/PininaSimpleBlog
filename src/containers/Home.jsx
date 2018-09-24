import React, { Component } from 'react';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';

class Home extends Component {
  render() {
    return (
      <>
        <div className={bootstrapGrid.container}>
          <h3>HELLO</h3>
          <p>Virginia Velásquez Soto</p>
          <p>33 age</p>
        </div>
      </>
    );
  }
}

export default Home;
