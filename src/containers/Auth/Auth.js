import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import classes from './Auth.scss';
import Input from '../../components/UI/Input/Input';
import {updateObject, checkValidity} from '../../shared/utility';
import * as actions from '../../store/actions'
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: this.props.content.placeholders.email
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: this.props.content.placeholders.password
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true,
        onLoginSuccess: false,
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    onChangeLanguage = (language) => {
        this.props.onChangeLanguageStart(language)
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));


        if (this.props.loading) {
            form = <Spinner/>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.onLoginSuccess) {
            authRedirect = <Redirect to={'/'}/>
        }


        return (
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {authRedirect}
                    {errorMessage}
                    {form}
                    <button>{this.props.content.placeholders.submit}</button>
                </form>
                <div>
                    <button onClick={() => this.onChangeLanguage('russian')}>Change language</button>
                    <h1>{this.props.content.name}</h1>
                </div>
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        onLoginSuccess: state.auth.onLoginSuccess,
        content: state.appData.data[state.language.languageSelected].content.pages.auth,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onChangeLanguageStart: (language) => dispatch(actions.onChangeLanguageStartAction(language)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth)