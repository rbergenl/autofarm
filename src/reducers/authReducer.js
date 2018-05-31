// reducers listen to actions and update the state

import {
  LOGGED_IN_STATUS_CHANGED,
/*  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER,
  AUTH_FORM_UPDATE,
  IDENTITY_UPDATED,
  LOGOUT,*/
} from '../actions';

export const initialState = {
  loggedIn: false,
/*  username: '',
  password: '',
  email: '',
  error: '',
  notice: '',
  loading: false,
  user: null,
  identityId: '',*/
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_STATUS_CHANGED:
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
      /*
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: '',
        notice: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...initialState,
        user: action.user,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: action.error || 'Authentication Failed',
        password: '',
        loading: false,
      };
    case LOGOUT:
      return initialState;
    case AUTH_FORM_UPDATE:
      return {
        ...state,
        [action.prop]: action.value,
      };
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
        error: '',
        notice: '',
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...initialState,
        username: action.username,
        notice: 'Registration successful. Please sign in',
      };
    case REGISTER_USER_FAILED:
      return {
        ...initialState,
        error: action.error || 'Registration Failed',
      };
    case IDENTITY_UPDATED:
      return {
        ...state,
        identityId: action.identityId,
      };
      */
    default:
      return state;
  }
};
