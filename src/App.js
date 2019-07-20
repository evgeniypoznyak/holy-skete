import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './App.scss';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
import * as actions from './store/actions';
import Spinner from './components/UI/Spinner/Spinner';

const asyncAuth = AsyncComponent(() => {
    return import('./containers/Auth/Auth');
});
const asyncSlideShow = AsyncComponent(() => {
    return import('./containers/SlideShow/SlideShow');
});
const asyncSkete = AsyncComponent(() => {
    return import('./containers/Skete/Skete');
});
const asyncCemetery = AsyncComponent(() => {
    return import('./containers/Cemetery/Cemetery');
});
const asyncClergy = AsyncComponent(() => {
    return import('./containers/Clergy/Clergy');
});
const asyncDirections = AsyncComponent(() => {
    return import('./containers/Directions/Directions');
});
const asyncContactUs = AsyncComponent(() => {
    return import('./containers/ContactUs/ContactUs');
});
const asyncDonations = AsyncComponent(() => {
    return import('./containers/Donations/Donations');
});

class App extends Component {
    componentDidMount() {
        this.props.onInitiateBrowserLanguageStart();
        this.props.onTryAutoSignUp();
    }

    componentWillUnmount() {
    }

    render() {
        let routes = (
            <Switch>
                <Route path={'/login'} component={asyncAuth}/>
                <Route path={'/skete'} component={asyncSkete}/>
                <Route path={'/slideshow'} component={asyncSlideShow}/>
                <Route path={'/cemetery'} component={asyncCemetery}/>
                <Route path={'/clergy'} component={asyncClergy}/>
                <Route path={'/directions'} component={asyncDirections}/>
                <Route path={'/contact-us'} component={asyncContactUs}/>
                {/* <Route path={'/contact-fr-anatoly'} component={asyncFrAnatoly}/>*/}
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

        let app = (
            <div className={classes.App}>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );

        if (this.props.showSpinnerInsteadOfApp) {
            app = <Spinner/>;
        }

        return (
            app
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        showSpinnerInsteadOfApp: state.language.showSpinnerInsteadOfApp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState()),

        onInitiateBrowserLanguageStart: () => dispatch(
            actions.initiateBrowserLanguageAction()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
