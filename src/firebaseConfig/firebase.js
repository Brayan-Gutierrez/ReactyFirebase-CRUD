// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsq1EhekgSyascCWO2POk5k1keI6TXoDY",
  authDomain: "reactyfirebase-crud.firebaseapp.com",
  projectId: "reactyfirebase-crud",
  storageBucket: "reactyfirebase-crud.appspot.com",
  messagingSenderId: "247035439826",
  appId: "1:247035439826:web:c358e49e47383179f35b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)