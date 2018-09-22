import React, {Component} from 'react';
import classes from './Modal.scss';

class Modal extends Component {

  render() {

    let modal  =
          <div
              onClick={this.props.openCloseModal}

              className={classes.BackDropModal}>

            <div

                className={classes.Modal}>

              {this.props.children}

            </div>


          </div>;


    return (

        <div>
          {modal}
        </div>

    );

  }

}

export default Modal;