import React from 'react';
import smallLogo from '../../assets/images/logo.png';
import classes from './Logo.scss';
import {NavLink} from 'react-router-dom';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
      <NavLink to='/'>
        <img src={smallLogo} alt="HolySkete" />
      </NavLink>
    </div>
);

export default logo;