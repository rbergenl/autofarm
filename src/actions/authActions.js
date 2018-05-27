// actions are functions that might interact with services, updates values and map these to be dispatched to reducers
import * as log from 'loglevel';
import history from '../lib/history';

import {
  LOGGED_IN_STATUS_CHANGED
} from './';

export const loggedInStatusChanged = loggedIn => ({
  type: LOGGED_IN_STATUS_CHANGED,
  loggedIn,
});

export const loginUser = (username, password) => (
  (dispatch) => {
    loginUserSuccess(dispatch);
  }
);

export const logoutUser = () => (
  (dispatch) => {
    sessionStorage.removeItem('isLoggedIn');
    dispatch({ type: LOGGED_IN_STATUS_CHANGED, loggedIn: false });
    history.push('/');
  }
);

const loginUserSuccess = (dispatch) => {
  log.info('logged in');
  sessionStorage.setItem('isLoggedIn', 'true');
  dispatch({ type: LOGGED_IN_STATUS_CHANGED, loggedIn: true });
  history.push('/');
};