import firebase from "firebase"
import "firebase/storage"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCdBSFs2RhZQg8RYoLGNc0LpGVl4fO2N0w",
    authDomain: "mobileproject-84e63.firebaseapp.com",
    projectId: "mobileproject-84e63",
    storageBucket: "mobileproject-84e63.appspot.com",
    messagingSenderId: "587370053418",
    appId: "1:587370053418:web:2343215501630c6a7ce853"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database