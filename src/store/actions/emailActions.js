import * as actionTypes from './actionTypes';

export const onEmailProcessStart = (userData) => {
  return {
    type: actionTypes.EMAIL_PROCESS_START,
    userData: userData,
  };
};
export const onEmailRecipientChangeStart = (emailRecipient) => {
  return {
    type: actionTypes.EMAIL_RECIPIENT_CHANGE,
    emailRecipient: emailRecipient,
  };
};

export const onEmailErrorHappened = (error) => {
  return {
    type: actionTypes.EMAIL_ERROR,
    error: error,
  };
};

export const onEmailSecusess = () => {
  return {
    type: actionTypes.EMAIL_SUCCESS,
  };
};

