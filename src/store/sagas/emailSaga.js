import {put} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios/index';


export function* onInitEmailProcessSaga(action) {
    let errorHappened = false;
    yield axios.post('http://data.holyskete.com/email', action.userData)
        .catch((error) => {
            errorHappened = error.message;
        });
    if (errorHappened) {
        yield put(actions.onEmailErrorHappened(errorHappened));
    } else {
        yield put(actions.onEmailSecusess(errorHappened));
    }
}
