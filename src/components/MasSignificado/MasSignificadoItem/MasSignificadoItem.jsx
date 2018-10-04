import React from 'react';
import { Link } from 'react-router-dom';
import HeadingTitle from '../../UI/HeadingTitle/HeadingTitle';
import Image from '../../UI/Image/Image';
import Aux from '../../../hoc/Aux/Aux';
import classes from './MasSignificadoItem.scss';

const details = 1;

const MasSignificadoItem = ({ title, date, image, content }) => (
  <Aux>
    <div className={classes.MasSignficadoItem}>
      <HeadingTitle title={title} detailsHead={details} date={date} />
      <Image srcImg={image} altImg={title} />
      <p>{content}</p>
      <div className={classes.ReadMore}>
        <Link to="/" className={classes.BtnMore}>
          Sigue leyendo ...
        </Link>
      </div>
    </div>
  </Aux>
);

export default MasSignificadoItem;
