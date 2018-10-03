import React from 'react';
import { Link } from 'react-router-dom';
import HeadingTitle from '../../UI/HeadingTitle/HeadingTitle';
import Image from '../../UI/Image/Image';
import Aux from '../../../hoc/Aux/Aux';
import classes from './MasSignificadoItem.scss';

const details = 1;

const MasSignficadosItem = ({ title, date, image, resumen }) => (
  <Aux>
    <div className={classes.MasSignficado}>
      <HeadingTitle title={title} detailsHead={details} date={date} />
      <Image srcImg={image} altImg={title} />
      <p>{resumen}</p>
      <Link to="/:id" className={classes.btnDetalle}>
        Sigue leyendo...
      </Link>
    </div>
  </Aux>
);

export default MasSignficadosItem;
