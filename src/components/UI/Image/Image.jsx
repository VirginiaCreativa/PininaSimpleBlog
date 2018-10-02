import React from 'react';
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Aux from '../../../hoc/Aux/Aux';

const Image = ({ srcImg, altImg, classImg }) => {
  const classStyle = {
    marginBottom: '20px',
  };
  return (
    <Aux>
      <img
        src={srcImg}
        alt={altImg}
        className={bootstrap['img-fluid']}
        style={classStyle}
      />
    </Aux>
  );
};

export default Image;
