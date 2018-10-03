import React, { Component } from 'react';
import MasSignificadoItem from './MasSignificadoItem/MasSignificadoItem';
import Aux from '../../hoc/Aux/Aux';

const MasSignificado = ({ signDatas }) => (
  <Aux>
    {signDatas.map(item => (
      <MasSignificadoItem key={item.id} {...item} />
    ))}
  </Aux>
);

export default MasSignificado;
