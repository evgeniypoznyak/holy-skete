// EMAIL_PROCESS_START


/*
export const EMAIL_PROCESS_START = 'EMAIL_PROCESS_START';
export const EMAIL_IN_PROGRESS = 'EMAIL_IN_PROGRESS';
export const EMAIL_SUCCESS = 'EMAIL_SUCCESS';
export const EMAIL_ERROR = 'EMAIL_ERROR';

 */

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