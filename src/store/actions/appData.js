import * as actionTypes from './actionTypes';


export const onInitCalendar = () => {
  return {
    type: actionTypes.INIT_CALENDAR,
  }
}
export const onInitNews = () => {
  return {
    type: actionTypes.INIT_NEWS,
  }
}

export const onDataRequest = () => {
  return {
    type: actionTypes.DATA_REQUEST,
  };
};

export const onSetupNewsFeed = (news) => {
  return {
    type: actionTypes.SETUP_NEWS_FEED,
    news: news,
  };
};

export const onSetupCalendar = (calendar) => {
  return {
    type: actionTypes.SETUP_CALENDAR,
    calendar: calendar,
  };
};
