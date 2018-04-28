import {put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import * as actions from '../actions'
import axios from 'axios';


export function* authUserSaga(action) {
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
    }
    catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }

}