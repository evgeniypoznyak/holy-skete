import {put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import * as actions from '../actions'
import * as helpers from '../../shared/utility';
import axios from 'axios';


export function* onSetupTemporarySpinnerForAllAppSaga(action) {
    yield put(actions.onShowHideSpinner(true))
    yield delay(0);
    yield put(actions.onShowHideSpinner(false))
    yield put(actions.onChangeLanguageAction(action.language))
}

export function* onInitiateContentSaga(action) {

    let server = 'http://127.0.0.1:8000/rss';

    let postDataRus = {
        urls:  [
            "http://www.pravoslavie.ru/xml/prav_news_rss.xml",
            "https://orthochristian.com/xml/rss.xml",
            ],
    };
    let postDataEng = {
        url: "https://orthochristian.com/xml/rss.xml",
    };

   // let test1 = yield axios.post( server, {urls: {param1: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', param2: '456'}});
   // let test2 = yield axios.post( server, postDataEng);

   // console.log(test1)
   // console.log(test2)

    //setup news feed
    let rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=';
    let urlRus = rss2json + 'http://www.pravoslavie.ru/xml/prav_news_rss.xml';
    let urlEng = rss2json + 'https://orthochristian.com/xml/rss.xml';
    let contentRus = yield axios.get(urlRus)
    let contentEng = yield axios.get(urlEng)
    let news = {english: contentEng.data.items, russian: contentRus.data.items}
    yield put(actions.onSetupNewsFeed(news))

    // setup language
    let browserLanguageIndex = yield helpers.browserLanguage()
    switch (browserLanguageIndex.split("-").shift()) {
        case 'ru':
            yield put(actions.onChangeLanguageStartAction('russian'))
            break;
        default:
            yield put(actions.onChangeLanguageStartAction('english'))
    }
}