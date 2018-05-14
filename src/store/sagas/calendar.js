import {put} from 'redux-saga/effects';
import axios from 'axios/index';
import * as actions from '../actions';
import {stripHtmlTags} from '../../shared/utility';

export function* onInitCalendarSaga() {
  const calendar = {};

  // setup calendar
  // https://azbyka.ru/days/site/api_help
  // Saints : https://azbyka.ru/days/api/saints.json

  // let testUrl = 'https://azbyka.ru/days/api/connections/2018-04-08/holidays.json';
  // let dayJson = 'https://azbyka.ru/days/api/day.json';
  // let dateJson = 'https://azbyka.ru/days/api/day/2018-05-17.json';

  const calendarUrl = 'https://azbyka.ru/days/api/day.json';
  let calendarJSON = yield axios.get(calendarUrl);
  let result = renderCalendar(calendarJSON.data);
  // console.log(result);
  calendar.holidaysEng = result;
  calendar.holidaysRus = result;
  calendar.dateEng = returnDateByLanguage('en');
  calendar.dateRus = returnDateByLanguage('ru');
  yield put(actions.onSetupCalendar(calendar));
}

function jsonValueIsReceived(holidays): boolean {
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

