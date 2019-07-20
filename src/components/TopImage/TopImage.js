import React from 'react';
import classes from './TopImage.scss';

const topImage = (props) => {
    const headers = {
        main: props.topImageData.topImageTextHeader,
        sub: props.topImageData.topImageTextSubHeader,
    };

    const cssHolder = classes.TextHolder +
      ' container-fluid justify-content-center';
    const cssHeader = classes.GeneralText + ' ' + classes.TextHeader;
    const cssSubHeader = classes.GeneralText + ' ' + classes.TextSubHeader;
    let headerImage = null;
    if (headers.main) {
        headerImage = <div className='row'>
            <div className={cssHeader}>{headers.main}</div>
        </div>;
    }
    let subHeaderImage = null;
    if (headers.sub) {
        subHeaderImage = <div className='row'>
            <div className={cssSubHeader}>{headers.sub}</div>
        </div>;
    }

    return (
        <div className={classes.TopImage}>
            <div className={cssHolder}>
                {headerImage}
                {subHeaderImage}
            </div>
            <img className={classes.Image} src={props.topImageUrl} alt='img'/>
        </div>
    );
};

export default topImage;
