import {takeEvery} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'

import {
    checkUserTokenAndCheckExpirationDateAndSetUserIdAndTokenSaga,
    authUserAndOnSuccessSetLocalStorageDataSaga,
    setTimerToLogoutUserSaga,
    removeTokenUserIdExpirationDateFromLocalStorageSaga
} from './auth';

import {onSetupTemporarySpinnerForAllAppSaga, onInitiateContentSaga} from './content'


export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_USER, authUserAndOnSuccessSetLocalStorageDataSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, setTimerToLogoutUserSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, checkUserTokenAndCheckExpirationDateAndSetUserIdAndTokenSaga)
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, removeTokenUserIdExpirationDateFromLocalStorageSaga)
}

export function* watchLanguage() {
    yield takeEvery(actionTypes.LANGUAGE_CHANGED_START, onSetupTemporarySpinnerForAllAppSaga)
    yield takeEvery(actionTypes.CONTENT_INITIATE, onInitiateContentSaga)
}