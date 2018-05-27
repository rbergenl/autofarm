import { combineReducers } from 'redux';

import auth from './reducers/authReducer';
//import rooms from './roomsReducer';
//import chat from './chatReducer';
//import users from './usersReducer';
//import iot from './iotReducer';
//import unreads from './unreadsReducer';

const rootReducer = combineReducers({
  auth
//  rooms,
//  chat,
//  users,
//  iot,
//  unreads,
});

export default rootReducer;