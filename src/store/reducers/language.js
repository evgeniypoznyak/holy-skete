import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  languageSelected: 'english',
  showSpinnerInsteadOfApp: false,
  dataInProgress: false,
};

const onChangeLanguageActionReceived = (state, action) => {
  return updateObject(state, {
    languageSelected: action.language,
  });
};

const onShowHideSpinnerByAction = (state, action) => {
  return updateObject(state, {
    showSpinnerInsteadOfApp: action.showSpinner,
  });
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LANGUAGE_CHANGED:
      return onChangeLanguageActionReceived(state, action);
    case actionTypes.LANGUAGE_CHANGED_SHOW_HIDE_SPINNER:
      return onShowHideSpinnerByAction(state, action);
    default:
      return state;
  }
};

export default reducer;