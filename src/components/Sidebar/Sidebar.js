import React from 'react';
import classes from './Sidebar.scss';

const sidebar = (props) => (
    <div className={classes.Sidebar}>
      {props.children}
    </div>
);

export default sidebar;