// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmgzDUKnhYbT2_5F1CPL4wKNpjJ_0kFCY",
  authDomain: "papex-landing.firebaseapp.com",
  projectId: "papex-landing",
  storageBucket: "papex-landing.appspot.com",
  messagingSenderId: "862371773797",
  appId: "1:862371773797:web:f56fdb9cb62a39c14e1de5",
  measurementId: "G-VTBJ3TKTLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 