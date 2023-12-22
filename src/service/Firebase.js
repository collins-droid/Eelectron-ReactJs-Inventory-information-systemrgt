import firebase from '@firebase/app';
import firebase_auth from '@firebase/auth';
import firestore from '@firebase/firestore';

const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
  apiKey: "AIzaSyDtnN_1k9zWd4FTcM5jwV8qxYkWTwx44Iw",
  authDomain: "katool-4b5eb.firebaseapp.com",
  databaseURL: "https://katool-4b5eb-default-rtdb.firebaseio.com",
  projectId: "katool-4b5eb",
  storageBucket: "katool-4b5eb.appspot.com",
  messagingSenderId: "878196130482",
  appId: "1:878196130482:web:fb10f0c4f0403962b63fab",
  measurementId: "G-W3HHHWDBNC"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);

export default firebaseapp;
