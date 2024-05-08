// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore" 
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBa8At8yqZb5esFWk5pBHSZFQoz3lLiCsM",
  authDomain: "firstfirebase-d5ab7.firebaseapp.com",
  projectId: "firstfirebase-d5ab7",
  storageBucket: "firstfirebase-d5ab7.appspot.com",
  messagingSenderId: "464039902989",
  appId: "1:464039902989:web:868bbf39b11c321565ba44",
  measurementId: "G-6CE38GPD1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();