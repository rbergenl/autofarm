import config from './config.json';
import firebaseConfig from './firebase.json';

// this is a mapping from (possible changing) raw config into a stable application config
export default {
  logLevel: config.LogLevel,
  androidClientId: config.androidClientId,
  firebase: firebaseConfig.result
};
