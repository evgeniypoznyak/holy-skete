import React from 'react';
import classes from './TopImage.scss';
import TopImage from '../../assets/images/top-header.jpg';

// todo multiple imports. Switch between by props if needed


const topImage = (props) => {
    return (
        <div className={classes.TopImage}>
            <div className={classes.TextHeader}>Russian Orthodox Church Outside Russia</div>
            <div className={classes.TextSubHeader}>Sub-Header</div>
            <img className={classes.Image} src={TopImage} alt='img'/>
            {/*<img className={classes.Image} src={props.topImageData.topImageUrl}  alt='img'/>*/}

        </div>
    );
};

export default topImage;