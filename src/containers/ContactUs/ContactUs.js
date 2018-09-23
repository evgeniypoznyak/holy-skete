import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import classes from './ContactUs.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import {checkValidity, updateObject} from '../../shared/utility';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class ContactUs extends Component {

    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: this.props.content.contactUsFormData.contactUsFormInputName,
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: this.props.content.contactUsFormData.contactUsFormInputEmail,
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: this.props.content.contactUsFormData.contactUsFormInputMessage,
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
        },
        formIsValid: false,
    };

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.formIsValid) {
            const formData = {
                emailRecipient: this.props.emailData.emailRecipient,
            };
            for (let formElementIdentifier in this.state.contactForm) {
                formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
            }
            this.props.onUserContactFormDataReceived(
                formData,
            );
        }

    };

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = updateObject(
            this.state.contactForm[inputIdentifier], {
                value: event.target.value,
                valid: checkValidity(event.target.value,
                    this.state.contactForm[inputIdentifier].validation),
                touched: true,
            });
        const updatedContactForm = updateObject(this.state.contactForm, {
            [inputIdentifier]: updatedFormElement,
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    };

    emailRecipientButtonHandler(emailRecipient) {
        this.props.onContactUsRecipientChange(emailRecipient);
    }

    render() {

        //let frAnatolyCssClass = null;
        let frDimitriCssClass = null;
        let frTikhonCssClass = null;

        switch (this.props.emailData.emailRecipient) {
            case 'father Dimitri':
                frDimitriCssClass = 'btn btn-info btn-block';
                frTikhonCssClass = 'btn btn-outline-info btn-block';
                break;
            case 'father Tikhon':
                frTikhonCssClass = 'btn btn-info btn-block';
                frDimitriCssClass = 'btn btn-outline-info btn-block';
                break;
            default:
        }

        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key],
            });
        }

        let form = formElementsArray.map(formElement => (
            <div key={formElement.id} className='form-group'>
                <Input
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event,
                        formElement.id)}/>
            </div>

        ));

        if (this.props.loading) {
            form = <Spinner/>;
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.onLoginSuccess) {
            authRedirect = <Redirect to={'/'}/>;
        }

        let animateClass = null;
        if (this.state.formIsValid) {
            animateClass = classes.bounceIn;
        }

        let sendEmailButton = null;
        if (!this.props.emailData.emailSendingInProgress && !this.props.emailData.emailSuccessfullySend) {
            sendEmailButton = <button
                className={'btn btn-lg btn-block btn-primary form-control '
                + animateClass}
                disabled={!this.state.formIsValid}>
                {this.props.content.contactUsFormData.contactUsFormButton}
            </button>;
        }
        if (this.props.emailData.emailSuccessfullySend) {
            sendEmailButton = <div className="alert alert-success text-center" role="alert">
                {this.props.content.contactUsFormData.emailSuccessfullySend}
            </div>
        }
        if (this.props.emailData.emailSendingInProgress && !this.props.emailData.emailSuccessfullySend) {
            sendEmailButton = <Spinner/>;
        }

        let emailError = null;
        if (this.props.emailData.emailError) {
            emailError =
                <div className='form-group'>
                    <div className="alert alert-danger" role="alert">
                        <strong>{this.props.emailData.emailError}</strong>
                    </div>
                </div>;
        }

        return (
            <div className={classes.ContactUs}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">

                            <div className={classes.ChangeRecipientBlock}>
                                <div className="h6">
                                    {this.props.content.changeEmailRecipientText}
                                </div>

                                <button
                                    className={frTikhonCssClass}
                                    onClick={() => {
                                        this.emailRecipientButtonHandler('father Tikhon');
                                    }}>
                                    {this.props.content.frTikhonNameChangeButton}
                                </button>
                                <button
                                    className={frDimitriCssClass}
                                    onClick={() => {
                                        this.emailRecipientButtonHandler('father Dimitri');
                                    }}>
                                    {this.props.content.deaconDimitriNameChangeButton}
                                </button>

                            </div>


                            <div className="h1 text-center ">
                                {this.props.content.contactUsFormData.contactUsFormHeader}
                            </div>
                            <hr/>

                            <form onSubmit={this.submitHandler}>
                                {authRedirect}
                                {errorMessage}
                                {form}
                                {emailError}
                                <div className='form-group'>
                                    {sendEmailButton}
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        );

    }

}

const mapStateToProps = state => {
    // console.log(state);
    return {
        emailData: state.email,
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        onLoginSuccess: state.auth.onLoginSuccess,
        content: state.appData.data[state.language.languageSelected].languageData.pages.contactUs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUserContactFormDataReceived: (userData) => dispatch(
            actions.onEmailProcessStart(userData)),
        onContactUsRecipientChange: (recipient) => dispatch(
            actions.onEmailRecipientChangeStart(recipient)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);