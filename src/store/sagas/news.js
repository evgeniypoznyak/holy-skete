import {put} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios/index';


export function* onInitNewsSaga() {
    //setup news feed
    // let rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=';
    let rss2json = 'http://data.holyskete.com/rss?url=';
    let urlRus = rss2json + 'http://www.pravoslavie.ru/xml/prav_news_rss.xml';
    let urlEng = rss2json + 'https://orthochristian.com/xml/rss.xml';

    let contentRus = yield axios.get(urlRus);
    let contentEng = yield axios.get(urlEng);
    let russianItems = {};
    let englishItems = {};
    if (
        contentRus &&
        contentRus.data &&
        contentRus.data.rss &&
        contentRus.data.rss.channel &&
        contentRus.data.rss.channel.item
    ) {
        russianItems = contentRus.data.rss.channel.item
    }
    if (
        contentEng &&
        contentEng.data &&
        contentEng.data.rss &&
        contentEng.data.rss.channel &&
        contentEng.data.rss.channel.item
    ) {
        englishItems = contentEng.data.rss.channel.item
    }

    let news = {
        english: englishItems,
        russian: russianItems
    };
    yield put(actions.onSetupNewsFeed(news));

}
