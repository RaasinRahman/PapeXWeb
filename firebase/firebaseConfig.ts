// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmgOGbblRFjLim67GRDRwcSxB2yNDCPHU",
  authDomain: "papexweb-aed97.firebaseapp.com",
  databaseURL: "https://papexweb-aed97-default-rtdb.firebaseio.com",
  projectId: "papexweb-aed97",
  storageBucket: "papexweb-aed97.firebasestorage.app",
  messagingSenderId: "472497425561",
  appId: "1:472497425561:web:4e1a57c35b79dc9173fc08",
  measurementId: "G-8B48SQB7FX"
};

// Initialize Firebase - check if app already exists
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage }; 