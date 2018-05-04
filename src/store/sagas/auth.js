import {put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actions from '../actions';
import axios from 'axios';


export function* authUserAndOnSuccessSetLocalStorageDataSaga(action) {
   // yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
  //  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBbtd8680M10gTSbvKckLqaPqtsREhw5YE';
  //  if (!action.isSignup) {
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBbtd8680M10gTSbvKckLqaPqtsREhw5YE';
  //  }
    try {
        const response = yield axios.post(url, authData)
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId))
        yield put(actions.checkAuthTimeout(response.data.expiresIn))
        yield put(actions.onLoginSuccess())
    }
    catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }

}


export function* checkUserTokenAndCheckExpirationDateAndSetUserIdAndTokenSaga(action) {

    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        }
    }
}

export function* removeTokenUserIdExpirationDateFromLocalStorageSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed())
}

export function* setTimerToLogoutUserSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout())
}