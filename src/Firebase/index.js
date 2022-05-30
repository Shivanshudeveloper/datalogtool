import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLtrssCDvGvzYSIwzwjpFrXOOJFn4ZLys",
    authDomain: "messianfox-fcd33.firebaseapp.com",
    projectId: "messianfox-fcd33",
    storageBucket: "messianfox-fcd33.appspot.com",
    messagingSenderId: "622566633414",
    appId: "1:622566633414:web:6d6ac15f5530a62c02ccc7",
    measurementId: "G-TKSSTTVKNB"
};

// Initialize Firebase


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


let storage = firebase.storage();
let database = firebase.database();
let auth = firebase.auth();
let firestore = firebase.firestore();
// Authentication for Google
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Authentication for Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
// Authentication for Twitter
var twitterProvider = new firebase.auth.TwitterAuthProvider();
export {
  firestore,
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  database,
  storage,
  firebase as default,
};