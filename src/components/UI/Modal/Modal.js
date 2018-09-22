import React, {Component} from 'react';
import classes from './Modal.scss';
import {updateObject} from '../../../shared/utility';

class Modal extends Component {

  state = {
    openModal: true,
  };

  openCloseModal = (e) => {
    e.stopPropagation();
    const updatedOpenCloseModal = updateObject(
        this.state, {openModal: !this.state.openModal}
    );
    this.setState(updatedOpenCloseModal);
  };

  componentDidMount() {
    this.setState({openModal: this.props.openModal})
  }

  render() {

    let modal =
        <div className={classes.BackDropModal}>

          <div className={classes.Modal}>

            <div className={classes.ModalClose}>
              <button
                  onClick={this.openCloseModal}
                  className='btn btn-sm btn-danger'>X</button>
            </div>

            <div className={classes.ModalTitle}>
              {this.props.title}
            </div>

            <div className={classes.ModalBody}>
              <div>
                {this.props.children}
              </div>
            </div>


          </div>


        </div>;


    let display = null;

    if (this.state.openModal) {
      display = modal;
    }


    return (

        <div>
          {display}
        </div>

    );

  }

}

export default Modal;