import React, {Component} from 'react';
import classes from './Clergy.scss';
import {connect} from 'react-redux';

import hierarchUrl from '../../assets/images/clergy/hierarch.jpg';
import frTikhonUrl from '../../assets/images/clergy/fr_tikhon.jpg';
import frAnatoliyUrl from '../../assets/images/clergy/fr_anatoliy.jpg';
import * as actions from '../../store/actions';
import Modal from '../../components/UI/Modal/Modal';

class Clergy extends Component {

  emailButtonHandler(emailRecipient) {
    this.props.onContactUsRecipientChange(emailRecipient);
    this.props.history.push('/contact-us');
  }

  render() {

    const metropolitan = {
      name: this.props.content.clergyMetropolitan.clergyMetropolitanName,
      title: this.props.content.clergyMetropolitan.clergyMetropolitanTitle,
      addressName: this.props.content.clergyMetropolitan.clergyMetropolitanAddressName,
      addressLine1: this.props.content.clergyMetropolitan.clergyMetropolitanAddress1,
      addressLine2: this.props.content.clergyMetropolitan.clergyMetropolitanAddress2,
    };

    const frTikhon = {
      name: this.props.content.rector.clergyRectorName,
      title: this.props.content.rector.clergyRectorTitle,
      addressLine1: this.props.content.rector.clergyRectorAddress1,
      addressLine2: this.props.content.rector.clergyRectorAddress2,
      buttonText: this.props.content.rector.clergyRectorEmailButtonText,
      biography: this.props.content.rector.biography,
    };

    const frAnatoliy = {
      name: this.props.content.priest2.clergyPriest2Name,
      addressLine1: this.props.content.priest2.clergyPriest2Address1,
      addressLine2: this.props.content.priest2.clergyPriest2Address2,
      buttonText: this.props.content.priest2.clergyPriest2EmailButtonText,
    };

    let frTikhonBiography = null;
    if (frTikhon.biography.length > 0) {

      let modalContent = frTikhon.biography.map(textLine =>
          <div>{textLine}</div>
      );

      frTikhonBiography = <Modal>{modalContent}</Modal>;
    }

    return (
        <div className={classes.Clergy}>
          <div className="container">

            <div className={'row ' + classes.ClergyRow}>
              <div className="col-sm-6">
                <img src={hierarchUrl} className="img-fluid shadow"
                     alt={'img'}/>
              </div>
              <div className="col-sm-6">
                <div
                    className="container d-flex h-100 justify-content-center align-items-center">
                  <div
                      className={'row justify-content-center ' +
                      classes.ClergyDescription}>
                    <div className="container-fluid text-center">
                      <div>{metropolitan.name}</div>
                      <div>{metropolitan.title}</div>
                      <hr/>
                      <div>{metropolitan.addressName}</div>
                      <div>{metropolitan.addressLine1}</div>
                      <div>{metropolitan.addressLine2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={'row ' + classes.ClergyRow}>
              <div className="col-sm-6 order-1 order-sm-0">
                <div
                    className="container d-flex h-100 justify-content-center align-items-center">
                  <div
                      className={'row justify-content-center ' +
                      classes.ClergyDescription}>
                    <div className="container-fluid text-center">
                      <div>{frTikhon.name}</div>
                      <div>{frTikhon.title}</div>
                      <div>{frTikhon.addressLine1}</div>
                      <div>{frTikhon.addressLine2}</div>
                      <div>{frTikhonBiography}</div>
                      <div>
                        <hr/>
                        <button
                            className="btn btn-outline-success btn-lg"
                            onClick={() => {
                              this.emailButtonHandler('father Tikhon');
                            }}
                        >{frTikhon.buttonText}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={frTikhonUrl} className="img-fluid shadow"
                     alt={'img'}/>
              </div>
            </div>

            <div className={'row ' + classes.ClergyRow}>
              <div className="col-sm-6">
                <img src={frAnatoliyUrl} className="img-fluid shadow"
                     alt={'img'}/>
              </div>
              <div className="col-sm-6">
                <div
                    className="d-flex h-100 justify-content-center align-items-center">
                  <div
                      className={'row justify-content-center ' +
                      classes.ClergyDescription}>

                    <div className="container-fluid text-center">
                      <div>{frAnatoliy.name}</div>
                      <div>{frAnatoliy.addressLine1}</div>
                      <div>{frAnatoliy.addressLine2}</div>
                      <div>
                        <hr/>
                        {/*<button*/}
                        {/*className="btn btn-outline-success btn-lg"*/}
                        {/*onClick={() => {*/}
                        {/*this.emailButtonHandler('father Anatoly');*/}
                        {/*}}*/}
                        {/*>{frAnatoliy.buttonText}</button>*/}
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    language: state.language.languageSelected,
    content: state.appData.data[state.language.languageSelected].languageData.pages.clergy,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onContactUsRecipientChange: (recipient) => dispatch(
        actions.onEmailRecipientChangeStart(recipient)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clergy);