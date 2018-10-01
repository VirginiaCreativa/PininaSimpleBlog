import React, { Component } from 'react';
import LayoutSobre from '../components/SobreMi/SobreMi';
import HeadingTitle from '../components/UI/HeadingTitle/HeadingTitle';

class About extends Component {
  state = {};

  render() {
    return (
      <>
        <HeadingTitle title="Sobre Mí" />
        <LayoutSobre />
      </>
    );
  }
}

export default About;
