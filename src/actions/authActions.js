// actions are functions that might interact with services, updates values and map these to be dispatched to reducers
import * as log from 'loglevel';
import history from '../lib/history';
import * as Firebase from '../lib/firebase';

import {
  LOGGED_IN_STATUS_CHANGED
} from './';

export const loggedInStatusChanged = loggedIn => ({
  type: LOGGED_IN_STATUS_CHANGED,
  loggedIn,
});

export const loginUser = (username, password) => (
  (dispatch) => {
    return Firebase.loginUser()
      .then(userData => loginUserSuccess(dispatch, userData))
      .catch((error) => {
        log.error(error);
        loginUserFail(dispatch, error.message);
      });
  }
);

const loginUserSuccess = (dispatch, userData) => {
  log.info('logged in', userData);
  sessionStorage.setItem('isLoggedIn', 'true');
  dispatch({ type: LOGGED_IN_STATUS_CHANGED, loggedIn: true });
  history.push('/');
};

const loginUserFail = () => {
  
};

export const logoutUser = () => (
  (dispatch) => {
    return Firebase.logoutUser()
      .then(logoutUserSuccess(dispatch))
      .catch((error) => {
        log.error(error);
        logoutUserFail(dispatch, error.message);
      });
  }
);
    
const logoutUserSuccess = (dispatch) => {
  log.info('logged out');
  sessionStorage.removeItem('isLoggedIn');
  dispatch({ type: LOGGED_IN_STATUS_CHANGED, loggedIn: false });
  history.push('/');
};

const logoutUserFail = () => {
  
};