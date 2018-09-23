import React, {Component} from 'react';
import classes from './Clergy.scss';
import {connect} from 'react-redux';

import hierarchUrl from '../../assets/images/clergy/hierarch.jpg';
import frTikhonUrl from '../../assets/images/clergy/fr_tikhon.jpg';
import frAnatoliyUrl from '../../assets/images/clergy/fr_anatoliy.jpg';
import deaconDimitriUrl from '../../assets/images/clergy/deaconDimitri.jpg';
import * as actions from '../../store/actions';
import Modal from '../../components/UI/Modal/Modal';
import {updateObject} from '../../shared/utility';

class Clergy extends Component {

  state = {
    openModal: false,
  };

  openModalParent = () => {
    const updatedOpenCloseModal = updateObject(
        this.state, {openModal: !this.state.openModal}
    );
    this.setState(updatedOpenCloseModal);

  };

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
      biographyButton: this.props.content.rector.clergyRectorBiographyButtonText,
      biographyTitle: this.props.content.rector.clergyRectorBiographyTitle,
    };

    const frAnatoliy = {
      name: this.props.content.priest2.clergyPriest2Name,
      addressLine1: this.props.content.priest2.clergyPriest2Address1,
      addressLine2: this.props.content.priest2.clergyPriest2Address2,
      buttonText: this.props.content.priest2.clergyPriest2EmailButtonText,
    };

    const deaconDimitri = {
      name: this.props.content.deacon1.name,
      addressLine1: this.props.content.deacon1.address1,
      addressLine2: this.props.content.deacon1.address2,
      buttonText: this.props.content.deacon1.emailButtonText,
    };


    let frTikhonBiography = null;
    if (frTikhon.biography.length > 0) {

      let modalContent = frTikhon.biography.map((textLine, index) =>
          <div key={index}>{textLine}</div>,
      );

      frTikhonBiography = null;

    }

    if (this.state.openModal) {
      frTikhonBiography = <Modal
          title={frTikhon.biographyTitle}
          modalButtonText={frTikhon.biographyButton}>{frTikhon.biographyButton}
      </Modal>;
    }

    let mainContent =
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
                      <button
                          className={'btn btn-outline-info btn-sm'}
                          onClick={this.openModalParent}
                      >{frTikhon.biographyButton}
                      </button>
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

              <div className={'row ' + classes.ClergyRow}>
                  <div className="col-sm-6 order-1 order-sm-0">
                      <div
                          className="container d-flex h-100 justify-content-center align-items-center">
                          <div
                              className={'row justify-content-center ' +
                              classes.ClergyDescription}>
                              <div className="container-fluid text-center">
                                  <div>{deaconDimitri.name}</div>
                                  <div>{deaconDimitri.title}</div>
                                  <div>{deaconDimitri.addressLine1}</div>
                                  <div>{deaconDimitri.addressLine2}</div>
                                  <div>
                                      <hr/>
                                      <button
                                          className="btn btn-outline-success btn-lg"
                                          onClick={() => {
                                              this.emailButtonHandler('father Dimitri');
                                          }}
                                      >{deaconDimitri.buttonText}</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <img src={deaconDimitriUrl} className="img-fluid shadow"
                           alt={'img'}/>
                  </div>
              </div>

          </div>
        </div>


    let display = mainContent;

    return (
       <div>
         {display}
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