import React, {Component} from 'react';
import classes from './Modal.scss';
import * as actions from '../../../store/actions';
import connect from 'react-redux/es/connect/connect';
import MainContent from '../../MainContent/MainContent';

class Modal extends Component {
  closeModal = () => {
      this.props.onModalOpenClose(false);
  };

  render() {
      const modal =
        <div className={classes.BackDropModal}>

            <div className={classes.Modal}>

                <div className={classes.ModalClose}>
                    <button
                        onClick={this.closeModal}
                        className='btn btn-sm btn-danger'>X
                    </button>
                </div>

                <div className={classes.ModalTitle}>
                    {this.props.title}
                </div>

                <div className={classes.ModalBody}>
                    <MainContent paragraphs={this.props.paragraphs}/>
                </div>

            </div>


        </div>;

      let display = null;

      if (this.props.modalOpen) {
          display = modal;
      }

      return (

          <div>
              {display}
          </div>

      );
  }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.appData.openCloseModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onModalOpenClose: (modalStatus) => dispatch(
            actions.onModalOpenClose(modalStatus),
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
