import * as actionTypes from './actionTypes';


export const onChangeLanguageAction = (language) => {
    return  {
        type: actionTypes.LANGUAGE_CHANGED,
        language: language,
    };
};

export const onChangeLanguageStartAction = (language) => {
    return  {
        type: actionTypes.LANGUAGE_CHANGED_START,
        language: language,
    };
};

export const onShowHideSpinner = (showSpinner) => {
    return  {
        type: actionTypes.LANGUAGE_CHANGED_SHOW_HIDE_SPINNER,
        showSpinner: showSpinner,
    };
};

export const initiateBrowserLanguageAction = () => {
    return {
        type: actionTypes.INIT_LANGUAGE,
    }
}