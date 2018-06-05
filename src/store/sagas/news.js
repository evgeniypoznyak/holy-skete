import {put} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios/index';


export function* onInitNewsSaga() {
    //setup news feed
    let rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=';
    let urlRus = rss2json + 'http://www.pravoslavie.ru/xml/prav_news_rss.xml';
    let urlEng = rss2json + 'https://orthochristian.com/xml/rss.xml';

    let contentRus = yield axios.get(urlRus);
    let contentEng = yield axios.get(urlEng);
    let news = {english: contentEng.data.items, russian: contentRus.data.items};
    yield put(actions.onSetupNewsFeed(news));
}
