import React from 'react';
import classes from './Banner.scss';

const banner = (props) => {
    const divStyle = {
        backgroundImage: `url("${props.imageUrl}")`,
    };

    return (

        <div className={classes.Banner}>
            <div
                style={divStyle}
                className={classes.TextWrapper}
            >
                {props.children}
            </div>
        </div>
    );
};

export default banner;
