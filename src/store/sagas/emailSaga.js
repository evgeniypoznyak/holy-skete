 import {put} from 'redux-saga/effects';
 import * as actions from '../actions';
 import axios from 'axios/index';


export function* onInitEmailProcessSaga(action) {

const response = yield axios.post('http://127.0.0.1:8000/email', action.userData);
  console.log(response);

//  let news = {english: contentEng.data.items, russian: contentRus.data.items};
//  yield put(actions.onSetupNewsFeed(news));
}
