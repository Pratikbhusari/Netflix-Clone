// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnbtbUgQpDnBgFwmHFVWREae3HMRXbiSo",
  authDomain: "netflix-react-clone-a7ddc.firebaseapp.com",
  projectId: "netflix-react-clone-a7ddc",
  storageBucket: "netflix-react-clone-a7ddc.appspot.com",
  messagingSenderId: "919086790042",
  appId: "1:919086790042:web:48bae20fc06a04afec3623",
  measurementId: "G-0YJX5F7D6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth();
const db = getFirestore(app);

export {app, auth, db}