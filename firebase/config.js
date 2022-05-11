// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcCGVfvS8oZFMTdnFjeqGWZFhqP377-EM",
    authDomain: "crud-585f7.firebaseapp.com",
    projectId: "crud-585f7",
    storageBucket: "crud-585f7.appspot.com",
    messagingSenderId: "720473654969",
    appId: "1:720473654969:web:0e9c2872643414dc113d68"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();