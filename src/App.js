import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './App.scss';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';

// Lazy-load components
const asyncAuth = AsyncComponent(() => {
    return import('./containers/Auth/Auth')
})
const asyncSkete = AsyncComponent(() => {
    return import('./containers/Skete/Skete')
})
const asyncCemetery = AsyncComponent(() => {
    return import('./containers/Cemetery/Cemetery')
})
const asyncClergy = AsyncComponent(() => {
    return import('./containers/Clergy/Clergy')
})
const asyncDirections = AsyncComponent(() => {
    return import('./containers/Directions/Directions')
})
const asyncContactUs = AsyncComponent(() => {
    return import('./containers/ContactUs/ContactUs')
})
const asyncDonations = AsyncComponent(() => {
    return import('./containers/Donations/Donations')
})


class App extends Component {

    componentDidMount() {
        // some logic here before app loads
    }

    render() {

        let routes = (
            <Switch>
                <Route path={'/login'} component={asyncAuth}/>
                <Route path={'/skete'} component={asyncSkete}/>
                <Route path={'/cemetery'} component={asyncCemetery}/>
                <Route path={'/clergy'} component={asyncClergy}/>
                <Route path={'/directions'} component={asyncDirections}/>
                <Route path={'/contact-us'} component={asyncContactUs}/>
                <Route path={'/donations'} component={asyncDonations}/>
                <Route path={'/'} exact component={HomePage}/>
                <Redirect to={'/'}/>
            </Switch>
        );


        if (false) {
            routes = (
                <Switch>
                </Switch>
            );
        }

        return (
            <div className={classes.App}>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));