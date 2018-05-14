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

        <NavigationItem link="/skete">
          {props.contentMenu.menuSkete}
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

        {/*
        {props.isAuthenticated ? <NavigationItem link="/protected">Protected</NavigationItem> : null}

        {!props.isAuthenticated
            ? <NavigationItem link="/login">Login</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
      */}

      </ul>
  );
}


export default navigationItems;