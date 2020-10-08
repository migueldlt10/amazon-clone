import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6iC6K6SbnFbJCjW_kP-Y_8FOjkSmxVk8",
  authDomain: "clone-5029e.firebaseapp.com",
  databaseURL: "https://clone-5029e.firebaseio.com",
  projectId: "clone-5029e",
  storageBucket: "clone-5029e.appspot.com",
  messagingSenderId: "849095772736",
  appId: "1:849095772736:web:27d4dd40e1b5717479eda5",
  measurementId: "G-2X30NTL0SG",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };
