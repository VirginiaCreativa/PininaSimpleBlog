import React, { Component } from 'react';
import axios from 'axios';
import MasSignificadoLayout from '../components/MasSignificado/MasSignificado';

const apiPoint = '/api/significado';

class MasSignificado extends Component {
  state = {
    significados: [],
    loading: true,
  };

  async componentDidMount() {
    await axios.get(apiPoint).then(res =>
      setTimeout(() => {
        this.setState({
          significados: res.data,
          loading: false,
        });
      }, 3000),
    );
  }

  render() {
    const { loading } = this.state;
    const styleLoading = {
      fontSize: '2rem',
      padding: '18px',
      border: '1px dashed #bbb',
      textAlign: 'center',
    };
    return (
      <>
        {loading ? (
          <p style={styleLoading}>
            Loading...
            <span role="img" aria-labelledby="Hand">
              👆
            </span>
            un momento!!!
          </p>
        ) : (
          <MasSignificadoLayout signDatas={this.state.significados} />
        )}
      </>
    );
  }
}

export default MasSignificado;
