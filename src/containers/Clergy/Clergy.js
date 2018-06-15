import React, {Component} from 'react';
import classes from './Clergy.scss';
import {connect} from 'react-redux';

class Clergy extends Component {

  render() {

    return (
        <div className={classes.Clergy}>Clergy</div>
    );

  }

}

const mapStateToProps = state => {
  return {
    language: state.language.languageSelected,
    content: state.appData.data[state.language.languageSelected].languageData.pages.cemetery,
    russian: state.appData.data.russian,
    english: state.appData.data.english,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Clergy);