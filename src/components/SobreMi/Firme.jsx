import React from 'react';
import classes from './Firme.scss';
import firmePinina from '../../assets/images/pinina_firme.gif';

const Firme = () => (
  <div className={classes.boxFirme}>
    <div className={classes.Firme}>
      <img src={firmePinina} alt="Firme Pinina" />
    </div>
  </div>
);

export default Firme;
