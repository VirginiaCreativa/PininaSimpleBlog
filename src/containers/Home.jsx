import React, { Component } from 'react';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';

class Home extends Component {
  render() {
    return (
      <>
        <div className={bootstrapGrid.container}>
          <h3>HELLO</h3>
          <p>
            Ullamcorper condimentum urna.Curabitur accumsan sem et nisi
            ultricies porttitor.Aliquam sed nunc elit.Nunc faucibus interdum
            mauris at mattis.Phasellus congue volutpat porttitor.Vivamus
            fringilla iaculis ex, et condimentum magna pharetra id.Aliquam erat
            volutpat.Nam odio velit, egestas vel leo tempus, luctus dapibus
            mauris{' '}
          </p>
          <p>Creativity Is More Than A Song And Dance Act</p>
        </div>
      </>
    );
  }
}

export default Home;
