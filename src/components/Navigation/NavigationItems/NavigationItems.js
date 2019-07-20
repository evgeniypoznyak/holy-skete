import React from 'react';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import ChangeLanguage from '../../ChangeLanguage/ChangeLanguage';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>

            <NavigationItem link="/" exact>
                {props.contentMenu.menuHomePage}
            </NavigationItem>

            <NavigationItem link="/cemetery">
                {props.contentMenu.menuCemetery}
            </NavigationItem>

            <NavigationItem link="/clergy">
                {props.contentMenu.menuClergy}
            </NavigationItem>

            <NavigationItem link="/directions">
                {props.contentMenu.menuDirections}
            </NavigationItem>

            <NavigationItem link="/contact-us">
                {props.contentMenu.menuContactUs}
            </NavigationItem>

            <NavigationItem link="/donations">
                {props.contentMenu.menuDonations}
            </NavigationItem>

            <ChangeLanguage/>
        </ul>
    );
};


export default navigationItems;
