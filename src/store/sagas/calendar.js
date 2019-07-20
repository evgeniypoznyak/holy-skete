import {put} from 'redux-saga/effects';
import axios from 'axios/index';
import * as actions from '../actions';
import {stripHtmlTags} from '../../shared/utility';

export function* onInitCalendarSaga() {
    const calendar = {};
    const calendarUrl = 'https://azbyka.ru/days/api/day.json';
    const calendarJSON = yield axios.get(calendarUrl);
    const result = renderCalendar(calendarJSON.data);
    calendar.holidaysEng = result;
    calendar.holidaysRus = result;
    calendar.dateEng = returnDateByLanguage('en');
    calendar.dateRus = returnDateByLanguage('ru');
    yield put(actions.onSetupCalendar(calendar));
}

function jsonValueIsReceived(holidays) {
    if (typeof holidays === 'object' && !(holidays instanceof Array)) {
        return false;
    }
    return true;
}

function renderCalendar(data) {
    const result = {};
    result.voice = data.fasting.voice;
    result.week = stripHtmlTags(data.fasting.round_week);

    if (jsonValueIsReceived(data.holidays)) {
        result.holidays = data.holidays.map((el) => {
            const imgObj = {};
            const holidaysAssets = 'https://cdn.azbyka.ru/days/assets/img/holidays/';
            const holidaysURL = 'https://azbyka.ru/days/prazdnik-';
            if (el.imgs && el.imgs.length > 1) {
                imgObj.img = holidaysAssets + el.id + '/' + el.imgs[0].preview;
            }
            return {
                name: el.title,
                url: holidaysURL + el.uri,
                ...imgObj,
            };
        });
    }

    if (jsonValueIsReceived(data.saints)) {
        result.saints = data.saints.map((el) => {
            const saintsAssets = 'https://cdn.azbyka.ru/days/assets/img/saints/';
            const saintsURL = 'https://azbyka.ru/days/sv-';
            const imageObj = {};
            if (el.imgs && el.imgs.length > 1) {
                imageObj.img = saintsAssets + el.id + '/' + el.imgs[0].preview;
            }
            return {
                ...imageObj,
                url: saintsURL + el.uri,
                name: stripHtmlTags(el.type_of_sanctity + ' ' + el.title + el.suffix),
            };
        });
    }
    return result;
}

function returnDateByLanguage(language) {
    return new Date().toLocaleString(language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

