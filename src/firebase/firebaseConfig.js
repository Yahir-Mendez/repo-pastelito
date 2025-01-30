// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRMH7ATAWryMPwy7dAxVbmazeBhvTsVg",
  authDomain: "pastelito-jerarca.firebaseapp.com",
  projectId: "pastelito-jerarca",
  storageBucket: "pastelito-jerarca.firebasestorage.app",
  messagingSenderId: "437059812661",
  appId: "1:437059812661:web:35362346afc9e26553207c",
  measurementId: "G-NB14FMCNKF"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);