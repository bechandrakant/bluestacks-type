import firebase from "firebase";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBqCFYrnvNB4YDlc9soPntPBP7l3aUbXgI",
  authDomain: "bluestacks-1098e.firebaseapp.com",
  projectId: "bluestacks-1098e",
  storageBucket: "bluestacks-1098e.appspot.com",
  messagingSenderId: "408854640050",
  appId: "1:408854640050:web:195b9fe03b1b155acba0ab",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
