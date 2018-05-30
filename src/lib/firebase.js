//import { ref, firebaseAuth } from '../config/constants'
import { auth } from '../firebaseApp';

/*
export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
*/

export const loginUser = () => {
  var provider = new auth.GoogleAuthProvider();
  return new Promise((resolve, reject) => {
    auth().signInWithPopup(provider).then(function(result) {
          const userData = Object.assign({
              // The signed-in user info.
              user: result.user,
              // This gives you a Google Access Token. You can use it to access the Google API.
              token: result.credential.accessToken
          });
          resolve(userData);
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          reject(error)
        });
  });
};

export const logoutUser = () => {
  return auth().signOut();
};
