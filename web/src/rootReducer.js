import { combineReducers } from 'redux';
import rooms from './roomsReducer';
import auth from './authReducer';
import chat from './chatReducer';
import users from './usersReducer';
import iot from './iotReducer';
import unreads from './unreadsReducer';

const rootReducer = combineReducers({
  rooms,
  auth,
  chat,
  users,
  iot,
  unreads,
});

export default rootReducer;