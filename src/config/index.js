import config from './config.json';
import firebaseConfig from './firebase.json';

export default {
  logLevel: config.LogLevel,
  firebase: firebaseConfig.result
};