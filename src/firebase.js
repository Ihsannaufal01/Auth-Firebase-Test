// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGlBi0baDJ1-pIejz6iXqPZZDzeREhiq8",
  authDomain: "firestore-db-60cde.firebaseapp.com",
  projectId: "firestore-db-60cde",
  storageBucket: "firestore-db-60cde.firebasestorage.app",
  messagingSenderId: "59766454178",
  appId: "1:59766454178:web:21604bc59bc7c9005264fb",
  measurementId: "G-RECGHVYDCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth (app);
export const db = getFirestore (app);
