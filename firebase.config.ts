// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbYmk-SDtXmYu4SrioKlMC-PKEjC7HZ48",
    authDomain: "udemy-de33a.firebaseapp.com",
    databaseURL: "https://udemy-de33a-default-rtdb.firebaseio.com",
    projectId: "udemy-de33a",
    storageBucket: "udemy-de33a.appspot.com",
    messagingSenderId: "541443965193",
    appId: "1:541443965193:web:765cd342d64941995413d8"
};



const firebaseApp = initializeApp(firebaseConfig);
export const fireStore = getFirestore(firebaseApp);


