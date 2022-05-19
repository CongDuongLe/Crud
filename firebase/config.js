// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";
// get realtime database 
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1j2sx8COA0xgPpD0xmgKG6_kdB1sfhj8",
  authDomain: "vuoncay-719e6.firebaseapp.com",
  databaseURL: "https://vuoncay-719e6-default-rtdb.firebaseio.com",
  projectId: "vuoncay-719e6",
  storageBucket: "vuoncay-719e6.appspot.com",
  messagingSenderId: "930008888483",
  appId: "1:930008888483:web:bc05071da613b14dbcfb16",
  measurementId: "G-FJJBNCJZGZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
export const db = getDatabase();
