import React from 'react';
import classes from './TopImage.scss';

const topImage = (props) => {
  return (
      <div className={classes.TopImage}>

          <img className={classes.Image} src={props.topImageData.topImageUrl}  alt='img'/>

      </div>
  );
};

export default topImage;