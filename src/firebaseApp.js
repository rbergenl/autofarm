import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDHL6JFTyBcaV60WpE4yXfeO0aZbzA9Xbk",
  authDomain: "practice-auth.firebaseapp.com",
  databaseURL: "https://practice-auth.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

/* MY OWN

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';

// Get the Firebase config from the auto generated file.
import * as Config from 'config';

// Initialize Firebase
const firebaseApp = firebase.initializeApp(Config.firebase);

// Retrieve Firebase Messaging object.
const messaging = firebaseApp.messaging();

module.exports = {
    firebaseApp,
    messaging
}

*/