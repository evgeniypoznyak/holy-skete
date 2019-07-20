import React, {Component} from 'react';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

class ChangeLanguage extends Component {
    render() {
        return (
            <div>
                <div className='btn-group-sm'>

                    <Button
                        color={'outline-success'}
                        onClick={() => this.props.onChangeLanguageStart('english')}
                    >{this.props.switchLanguageContent.switchLanguageEnglish}</Button>

                    <Button
                        color={'outline-primary'}
                        onClick={() => this.props.onChangeLanguageStart('russian')}
                    >{this.props.switchLanguageContent.switchLanguageRussian}</Button>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.appData.data[state.language.languageSelected].languageData.pages.homePage,
        switchLanguageContent: state.appData.data[state.language.languageSelected].languageData.switchLanguage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguageStart: (language) => dispatch(
            actions.onChangeLanguageStartAction(language)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
