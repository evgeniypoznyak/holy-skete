import {put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actions from '../actions';
import * as helpers from '../../shared/utility';

export function* onSetupTemporarySpinnerForAllAppSaga(action) {
  yield put(actions.onShowHideSpinner(true));
  yield delay(0);
  yield put(actions.onShowHideSpinner(false));
  yield put(actions.onChangeLanguageAction(action.language));
}


export function* onInitiateLanguageSaga(action) {
  yield put(actions.onInitCalendar());
  yield put(actions.onInitNews());

  // setup language
  let browserLanguageIndex = yield helpers.browserLanguage();
  switch (browserLanguageIndex.split('-').shift()) {
    case 'ru':
      yield put(actions.onChangeLanguageStartAction('russian'));
      break;
    default:
      yield put(actions.onChangeLanguageStartAction('english'));
  }
}




