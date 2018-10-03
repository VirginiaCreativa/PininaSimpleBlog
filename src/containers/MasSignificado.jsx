import React, { Component } from 'react';
import axios from 'axios';
import MasSignificadoLayout from '../components/MasSignificado/MasSignificado';

const apiPoint = '/api/significado';

class MasSignificado extends Component {
  state = {
    significados: [],
  };

  async componentDidMount() {
    const response = await axios.get(apiPoint).then(res => {
      this.setState({ significados: res.data });
    });
    return response;
  }

  render() {
    return (
      <>
        <MasSignificadoLayout signDatas={this.state.significados} />
      </>
    );
  }
}

export default MasSignificado;
