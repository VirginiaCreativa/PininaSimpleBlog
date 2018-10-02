import React, { Component } from 'react';
import LayoutSobre from '../components/SobreMi/SobreMi';
import HeadingTitle from '../components/UI/HeadingTitle/HeadingTitle';

class About extends Component {
  state = {
    details: 0,
  };

  render() {
    return (
      <>
        <HeadingTitle title="Sobre Mí" detailsHead={this.state.details} />
        <LayoutSobre />
      </>
    );
  }
}

export default About;
