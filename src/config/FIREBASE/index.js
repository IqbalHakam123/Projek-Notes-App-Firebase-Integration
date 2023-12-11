import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyABAXgfuaBP3AibYc3fjxKTNszFeZZ7wMo",
  authDomain: "noted-app-a814a.firebaseapp.com",
  databaseURL: "https://noted-app-a814a-default-rtdb.firebaseio.com",
  projectId: "noted-app-a814a",
  storageBucket: "noted-app-a814a.appspot.com",
  messagingSenderId: "356579619268",
  appId: "1:356579619268:web:3f5cc408fcda5004ae7491"
});

const FIREBASE = firebase;

export default FIREBASE;