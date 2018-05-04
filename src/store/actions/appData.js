import * as actionTypes from './actionTypes';


export const onDataRequest = () => {
    return  {
        type: actionTypes.DATA_REQUEST,
    };
};

export const onSetupNewsFeed = (news) => {
    return {
        type: actionTypes.SETUP_NEWSFEED,
        news: news
    }
}