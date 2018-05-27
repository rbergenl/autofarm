// actions are functions that might interact with services, updates values and map these to be dispatched to reducers

import history from '../lib/history';

import {
  LOGGED_IN_STATUS_CHANGED
} from '../actionTypes';

export const loggedInStatusChanged = loggedIn => ({
  type: LOGGED_IN_STATUS_CHANGED,
  loggedIn,
});

export const loginUser = (username, password) => (
  (dispatch) => {
    loginUserSuccess(dispatch);
  }
);

const loginUserSuccess = (dispatch) => {
  console.log('im here')
  sessionStorage.setItem('isLoggedIn', 'true');
  dispatch({ type: LOGGED_IN_STATUS_CHANGED, loggedIn: true });
  history.push('/');
};