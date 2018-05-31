// Firebase
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/messaging';

// Get the Firebase config from the auto generated file.
import Config from './config';

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(Config.firebase);
//export const ref = firebase.database().ref()
//export const auth = firebase.auth;
// TODO: does messaging work with react-native?
//export const messaging = firebaseApp.messaging();
