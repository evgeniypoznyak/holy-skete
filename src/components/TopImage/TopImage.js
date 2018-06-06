import React from 'react';
import classes from './TopImage.scss';
import TopImage from '../../assets/images/top-header.jpg';

// todo multiple imports. Switch between by props if needed

const topImage = (props) => {
  const headers = {
    main: props.topImageData.topImageTextHeader,
    sub: props.topImageData.topImageTextSubHeader,
  };

  const cssHolder = classes.TextHolder +
      ' container-fluid justify-content-center';
  const cssHeader = classes.GeneralText + ' ' + classes.TextHeader;
  const cssSubHeader = classes.GeneralText + ' ' + classes.TextSubHeader;

  return (
      <div className={classes.TopImage}>
        <div className={cssHolder}>
          <div className='row'>
            <div className={cssHeader}>{headers.main}</div>
          </div>
          <div className='row'>
            <div className={cssSubHeader}>{headers.sub}</div>
          </div>
        </div>
        <img className={classes.Image} src={TopImage} alt='img'/>
      </div>
  );
};

export default topImage;