import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;
console.log(REACT_APP_API_KEY);

firebase.initializeApp({
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
});
const db = firebase.firestore();
const auth = firebase.auth();
const storageRef = firebase.storage().ref();

export { db, auth, storageRef };
