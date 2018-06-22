import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import classes from './ContactUs.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import {checkValidity, updateObject} from '../../shared/utility';

class ContactUs extends Component {

  state = {
    contactForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
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
          placeholder: 'Your E-Mail',
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
          placeholder: 'Include your message here...',
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
      const formData = {};
      for (let formElementIdentifier in this.state.contactForm) {
        formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
      }

      console.log(formData);
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

  render() {

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

    return (
        <div className={classes.ContactUs}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-6">
                <div className="h1 text-center ">Contact Us</div>

                <form onSubmit={this.submitHandler}>
                  {authRedirect}
                  {errorMessage}
                  {form}
                  <div className='form-group'>
                    <button
                        className={'btn btn-lg btn-block btn-primary form-control '
                        + animateClass}
                        disabled={!this.state.formIsValid}>SEND
                    </button>
                  </div>
                </form>

              </div>

            </div>


          </div>


        </div>
    );

  }

}

export default ContactUs;