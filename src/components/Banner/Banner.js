import React from 'react';
import classes from './Banner.scss';

const banner = (props) => {


  const cssHolder = classes.TextHolder +
      ' container-fluid justify-content-center';

  return (

      <div className={classes.Banner}>
        <div className={cssHolder}>
          <div className={classes.GeneralText}>
            {props.children}
          </div>
        </div>
        <img className={classes.Image} src={props.imageUrl} alt='img'/>
      </div>
  )
};

export default banner;