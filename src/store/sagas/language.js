import {put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as helpers from '../../shared/utility';

export function* onSetupTemporarySpinnerForAllAppSaga(action) {
    yield put(actions.onChangeLanguageAction(action.language));
}


export function* onInitiateLanguageSaga(action) {
    yield put(actions.onInitCalendar());
    yield put(actions.onInitNews());
    const browserLanguageIndex = yield helpers.browserLanguage();
    switch (browserLanguageIndex.split('-').shift()) {
        case 'ru':
            yield put(actions.onChangeLanguageStartAction('russian'));
            break;
        default:
            yield put(actions.onChangeLanguageStartAction('english'));
    }
}


