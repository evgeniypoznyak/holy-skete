import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    emailRecipient: 'father Tikhon',
    emailSendingInProgress: false,
    emailSuccessfullySend: false,
    emailError: false,
};


const changeEmailRecipient = (state, action) => {
    return updateObject(state, {
        emailRecipient: action.emailRecipient,
    });
};

const emailWasSuccessfullySent = (state, action) => {
    return updateObject(state, {
        emailSendingInProgress: false,
        emailSuccessfullySend: true,
    });
};

const onEmailProcessStart = (state, action) => {
    return updateObject(state, {
        emailSendingInProgress: true,
    });
};

const onEmailError = (state, action) => {
    return updateObject(state, {
        emailSendingInProgress: false,
        emailSuccessfullySend: false,
        emailError: action.error,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_RECIPIENT_CHANGE:
            return changeEmailRecipient(state, action);
        case actionTypes.EMAIL_PROCESS_START:
            return onEmailProcessStart(state, action);
        case actionTypes.EMAIL_SUCCESS:
            return emailWasSuccessfullySent(state, action);
        case actionTypes.EMAIL_ERROR:
            return onEmailError(state, action);
        default:
            return state;
    }
};

export default reducer;
