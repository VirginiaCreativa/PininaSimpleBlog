import React, { Component } from 'react';
import axios from 'axios';
import MasSignificadoLayout from '../components/MasSignificado/MasSignificado';

class MasSignificado extends Component {
  state = {};

  async componentDidMount() {
    const response = await axios.get('/api/significado');
    console.log(response);
    if (response.status !== 200) {
      throw Error(response.message);
    }
    return response;
  }

  render() {
    return (
      <>
        <MasSignificadoLayout />
      </>
    );
  }
}

export default MasSignificado;
