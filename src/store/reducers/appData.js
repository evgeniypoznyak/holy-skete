import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import {english as englishAppData} from './appDataLanguages/english';
import {russian as russianAppData} from './appDataLanguages/russian';


const initialState = {
  data: {
    english: englishAppData,
    russian: russianAppData,
  },
  openCloseModal: false,
};

const onDataReceived = (state, action) => {
    return updateObject(state, {
        data: action.data,
    });
};

const setupNewsFeed = (state, action) => {
    const objectToUpdate = {
        data: {
            ...state.data,
            russian: {
                ...state.data.russian,
                languageData: {
                    ...state.data.russian.languageData,
                    news: {
                        ...state.data.russian.languageData.news,
                        newsContent: action.news.russian,
                    },
                },
            },
            english: {
                ...state.data.english,
                languageData: {
                    ...state.data.english.languageData,
                    news: {
                        ...state.data.english.languageData.news,
                        newsContent: action.news.english,
                    },
                },
            },
        },
    };
    return updateObject(state, objectToUpdate);
};

const setupCalendar = (state, action) => {
    //console.log('action.calendar: ', action.calendar);
    const objectToUpdate = {
        data: {
            ...state.data,
            russian: {
                ...state.data.russian,
                languageData: {
                    ...state.data.russian.languageData,
                    calendar: {
                        ...state.data.russian.languageData.calendar,
                        date: action.calendar.dateRus,
                        holidays: action.calendar.holidaysRus.holidays,
                        saints: action.calendar.holidaysRus.saints,
                        voice: action.calendar.holidaysRus.voice + '-й',
                        week: action.calendar.holidaysRus.week,
                    },
                },
            },
            english: {
                ...state.data.english,
                languageData: {
                    ...state.data.english.languageData,
                    calendar: {
                        ...state.data.english.languageData.calendar,
                        date: action.calendar.dateEng,
                        holidays: action.calendar.holidaysEng.holidays,
                        saints: action.calendar.holidaysEng.saints,
                        voice: action.calendar.holidaysEng.voice + 'th',
                        week: action.calendar.holidaysRus.week,
                    },
                },
            },
        },
    };
    return updateObject(state, objectToUpdate);
};

const openCloseModal = (state, action) => {
  const objectToUpdate = {openCloseModal: action.modalStatus};
  return updateObject(state, objectToUpdate);
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DATA_RECEIVED:
            return onDataReceived(state, action);
        case actionTypes.SETUP_NEWS_FEED:
            return setupNewsFeed(state, action);
        case actionTypes.SETUP_CALENDAR:
            return setupCalendar(state, action);
        case actionTypes.MODAL_OPEN_CLOSE:
          return openCloseModal(state, action);
        default:
            return state;
    }
};

export default reducer;