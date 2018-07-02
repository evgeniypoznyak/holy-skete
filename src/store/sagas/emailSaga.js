 import {put} from 'redux-saga/effects';
 import * as actions from '../actions';
 import axios from 'axios/index';


export function* onInitEmailProcessSaga(action) {

  let errorHappened = false;

const response = yield axios.post('http://127.0.0.1:8000/email', action.userData)
.catch( (error) => {
  errorHappened = error.message;
});

  if (errorHappened) {
    yield put(actions.onEmailErrorHappened(errorHappened));
  } else {
    yield put(actions.onEmailSecusess(errorHappened));
  }
  console.log(response);

  //EMAIL_ERROR
  // onEmailErrorHappened

//  let news = {english: contentEng.data.items, russian: contentRus.data.items};
//  yield put(actions.onSetupNewsFeed(news));
}
