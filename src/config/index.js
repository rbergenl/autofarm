import config from './config.json';
import firebaseConfig from './firebase.json';

export default {
  logLevel: config.LogLevel,
  androidClientId: config.androidClientId,
  firebase: firebaseConfig.result
};
