import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  checkUserTokenAndCheckExpirationDateAndSetUserIdAndTokenSaga,
  authUserAndOnSuccessSetLocalStorageDataSaga,
  setTimerToLogoutUserSaga,
  removeTokenUserIdExpirationDateFromLocalStorageSaga,
} from './auth';
import {
  onSetupTemporarySpinnerForAllAppSaga,
  onInitiateLanguageSaga,
} from './language';
import {onInitNewsSaga} from './news';
import {onInitCalendarSaga} from './calendar';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER,
      authUserAndOnSuccessSetLocalStorageDataSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, setTimerToLogoutUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE,
      checkUserTokenAndCheckExpirationDateAndSetUserIdAndTokenSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT,
      removeTokenUserIdExpirationDateFromLocalStorageSaga);
}

export function* watchLanguage() {
  yield takeEvery(actionTypes.LANGUAGE_CHANGED_START,
      onSetupTemporarySpinnerForAllAppSaga);
  yield takeEvery(actionTypes.INIT_LANGUAGE, onInitiateLanguageSaga);
}

export function* watchCalendar() {
  yield takeEvery(actionTypes.INIT_CALENDAR, onInitCalendarSaga);
}

export function* watchNews() {
  yield takeEvery(actionTypes.INIT_NEWS, onInitNewsSaga);
}